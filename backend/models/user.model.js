const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'recruiter'],
      required: true,
    },
    profile: {
      bio: {
        type: String,
      },
      skills: {
        type: [String],
      },
      resume: {
        type: String, // URL to Resume File
      },
      resumeOriginalName: {
        type: String,
      },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
      },
      profilePhoto: {
        type: String,
        default:
          'https://res.cloudinary.com/dv0xm4c4v/image/upload/v1633557967/Job%20Portal/Profile%20Photos/default-profile-photo.jpg',
      },
    },
  },
  { timestamps: true } // ✅ Corrected Placement
);

const User = mongoose.model('User', userSchema);
module.exports = User;
