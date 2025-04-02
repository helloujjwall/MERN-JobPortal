import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import profilePic from "/src/assets/helloujjwall.jpg";
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const isResume = true;

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-10 p-8">
        <div className='flex justify-between items-center'>

          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={profilePic} alt="Profile Picture" title="Profile Picture" />
            </Avatar>

            <div>
              <h1 className="text-xl font-medium">Ujjwal Singh</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sunt soluta debitis eligendi a harum impedit tempore cum maxime nulla, nisi recusandae.
              </p>
            </div>
          </div>
          <Button className='text-right' variant='ghost' title="Edit Profile"><Pen /></Button>
        </div>
        <div className='my-5'>
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
        <div className='my-5'>
          <h1 className='text-xl font-medium'>Skills</h1>
          <div className='flex flex-wrap gap-2 mt-2'>
            {
              skills.length > 0
                ? skills.map((skill, index) => (
                  <Badge key={index} className='bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-full'>
                    {skill}
                  </Badge>
                ))
                : <span className='text-gray-500 italic'>No skills added</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-xl font-medium'>Resume</Label>
          {
            isResume ? 
              <a href="https://ujjwalsingh.rf.gd/resume" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-800 cursor-pointer'>
                Resume - Ujjwal Singh
              </a>
              :
              <span className="text-gray-500 italic">Not Available</span>
          }
        </div>

        {/* Added margin for spacing */}
        <div className='max-w-4xl mx-auto bg-white rounded-2xl mt-6 p-4'>
          <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
    </div>
  );
}

export default Profile;

