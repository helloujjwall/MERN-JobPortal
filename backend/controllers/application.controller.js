const Job = require("../models/job.model"); 
const Application = require("../models/application.model"); 
const { options } = require("../routes/job.route");
const { populate } = require("../models/company.model");


const applyJob = async (req,res)=>{
  try{
    const userId = res.id;
    const {id:jobId}= req.params.id;
    if(!job){
      return res.status(400).json({
        message:"Job id id required",
        success:false
      })
    };
    // check if the user has already applied for the job
    const existingApplication = await Application.findOne({job:jobId, applicant:userId});
    if(existingApplication){
      return res.status(400).json({
        message:"You have already applied for this job",
        success:false
      });
    }
    // check if the job exists
    const job = await Job.findById(jobId);
    if(!job){
      return res.status(404).json({
        message:"Job not found",
        success:false
      })
    }
    // Create a new application
    const newApplication = await Application.create({
       job:jobId,
       applicant:userId,
    });

    job.application.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message:"Job applied successfully.",
      success:true
    })
  }catch(error){
    console.log(error);
  }
};

const getAppliedJobs = async (req,res)=>{
  try{
    const userId= req.id;
    const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
      path:'Job',
      options:{sort:{createdAt:-1}},
      populate:{
        path:'company',
        options:{sort:{createdAt:-1}},
      }
    });
    if(!application){
      return res.status(404).json({
        message:"No Applications",
        success:false
      })
    };
    return res.status(200).json({
      application,
      success:true
    })
  }catch(error){
    console.log(error);
  }
}

// Admin Dekhega kitne user ne apply kiya hai
const getApplicants = async (req,res)=>{
  try{
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path:'applications',
      options:{sort:{createdAt:-1}},
      populate:{
        path:'applicant'
      }
    });  
    if(!job){
      return res.status(404).json({
        message:'Job not found',
        success:false
      })
    };
    return res.status(200).json({
      job,
      success:true
    })
  }catch(error){
    console.log(error);
  }
}

const updateStatus = async (req,res)=>{
  try{
    const {status}= res.body;
    const applicationId = req.params.id;
    if(!status){
      return res.status(400).json({
        message:'Status is required',
        success:false
      })
    };

    // Find the application by applicantion id
    const applicantion = await Application.findOne({_id:applicationId});
    if(applicantion){
      return res.status(404).json({
        message:"Application Not Found",
        success:false
      })
    };

    // Update the status
    applicantion.status = status.toLowerCase();
    await applicantion.save();

    return res.status(200).json({
      message:"Status updated successfully.",
      success:true
    });
  }catch(error){

  }
}

module.exports = { applyJob, getAppliedJobs, getApplicants, updateStatus };