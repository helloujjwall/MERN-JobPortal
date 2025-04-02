import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import profilePic from "/src/assets/helloujjwall.jpg";
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className='flex justify-between'>

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
          <Button className='text-right' variant='goast' title="Edit Profile"><Pen /></Button>
        </div>
        <div className='my-5' >
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>mrujjwal03@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>8355068389</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
