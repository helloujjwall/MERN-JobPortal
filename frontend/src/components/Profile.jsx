import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import profilePic from "/src/assets/helloujjwall.jpg";
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const isResume = true;

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      
      {/* Profile Card Section */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-6 p-8 relative">
        
        {/* Edit Button (Pen Icon) - Top Right Corner */}
        <Button 
          className="absolute top-4 right-4 p-2 hover:bg-[#5b3086] rounded-full bg-[#6A38C2]" 
          variant="ghost" 
          title="Edit Profile"
          onClick={() => setOpen(true)}
        >
          <Pen className="w-5 h-5" strokeWidth={2.5} />
        </Button>

        {/* Profile Details */}
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profilePic} alt="Profile Picture" title="Profile Picture" />
            </Avatar>
            <div>
              <h1 className="text-xl font-medium">Ujjwal Singh</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='my-4'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>mrujjwal03@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>8355068389</span>
          </div>
        </div>
        <hr />

        {/* Skills Section */}
        <div className='my-4'>
          <h1 className='text-xl font-medium'>Skills</h1>
          <div className='flex flex-wrap gap-2 mt-2'>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Badge key={index} className='bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-full'>
                  {skill}
                </Badge>
              ))
            ) : (
              <span className='text-gray-500 italic'>No skills added</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-xl font-medium'>Resume</Label>
          {isResume ? (
            <a href="https://ujjwalsingh.rf.gd/resume" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-800 cursor-pointer'>
              Resume - Ujjwal Singh
            </a>
          ) : (
            <span className="text-gray-500 italic">Not Available</span>
          )}
        </div>
      </div>

      {/* Applied Jobs Section with Reduced Gap */}
      <div className='max-w-4xl mx-auto bg-white rounded-2xl mt-2 p-4'>
        <h1 className='font-bold text-lg my-4'>Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}

export default Profile;
