const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    // console.log("Received Data:", req.body);
    const { fullname, email, phoneNumber, password, role } = req.body;

    if (!fullname || !email || !phoneNumber || !password || !role) {
      // console.log("❌ Missing Fields:", req.body);
      return res.status(400).json({ message: "Please fill in all fields.", success: false });
    }

    const user = await User.findOne({ email });
    if (user) {
      // console.log("❌ Email already exists.");
      return res.status(400).json({ message: "This email already exists.", success: false });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });

    
    return res.status(200).json({ message: "Account created successfully.", success: true });

  } catch (err) {
    // console.log("❌ Backend Error:", err);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};



const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ message: "Something is missing.", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect Email.", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect Password.", success: false });
    }

    if (user.role !== role) {
      return res.status(400).json({ message: "Account doesn't exist with current role", success: false });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });

    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
      .json({ message: `Welcome back ${user.fullname}`, success: true, user: userData });
  } catch (err) {
    console.log(err);
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0, httpOnly: true }).json({ message: "Logged out successfully.", success: true });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;

    let skillsArray
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.userId;
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found.", success: false });
    }

    //Updating data

    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.bio = bio;
    if (skillsArray) user.profile.skills = skillsArray;



    await user.save();

    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({ message: "Profile updated successfully.", success: true, user: userData });
  } catch (err) {
    console.log(err);
  }
};

// ✅ **CommonJS export**
module.exports = { register, login, logout, updateProfile };
