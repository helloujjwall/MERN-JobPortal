const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db.js');
const userRoute = require('./routes/user.route.js');
dotenv.config({});

const app = express(); 



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
}
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

//API's
app.use("/api/v1/user",userRoute);



app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});