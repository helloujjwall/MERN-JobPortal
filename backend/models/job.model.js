const mongoose = require('mongoose');
const { create } = require('./user.model');
const { application } = require('express');

const jobSchema = new mongoose.Schema({
  tile: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String]
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, 
  applications:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Application',
    },
  ]
  
}, { timestamps: true });

export const Job = mongoose.model('Job', jobSchema);