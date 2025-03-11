const postJob = async (req, res)=>{
  try{
    const {title, description, requirements, salary,location,jobType,experience,positin,companyId}=req.body;
    const userId = req.userId;

    if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId){
      return res.status(400).json({
        message:"Something is missing",
        success:false
      })
    };
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel:experience,
      position,
      company:companyId,
      created_by : userId
    })

    return res.status(200).json({
      message:"New job created successfully",
      job,
      success:true

    })
  }catch(error){
    console.log(error);
  }
}

const getAllJobs = async(req,res)=>{
  try{
    const keyword= req.query.keyword || "";
    const query={
      $or:[
        {title:{$regex:keyword, $options:"i"}},
        {description:{$regex:keyword,$options:"i"}},
      ]
    };
    const jobs = await Job.find(query);
    if(!job){
      return res.status(404).json({
        message:"Jobs not found",
        success:false
      })
    };
    return res.status(200).json({
      jobs,
      success: true
    })
  }catch(error){
    console.log(error);
  }
}

const getJobById = async(req, res)=>{
  try{

  }catch{
    
  }
}