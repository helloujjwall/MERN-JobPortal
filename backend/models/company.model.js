const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique:true,
  },
  description:{
    type: String,
  },
  website:{
    type: String,
  },
  location:{
    type: String,
  },
  logo:{
    type: String,  //URL to Company Logo
    default: 'https://res.cloudinary.com/dv0xm4c4v/image/upload/v1633557967/Job%20Portal/Company%20Logos/default-company-logo.jpg',
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },


},{timestamps: true});

module.exports = mongoose.model('Company', companySchema);