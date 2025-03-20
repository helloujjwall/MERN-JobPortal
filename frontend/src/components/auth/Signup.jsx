import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'

const Signup = () => {

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    PhoneNumber: "",
    role: "",
    file: ""
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };


  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.PhoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message || "Login successful");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
      console.log("Full Error:", error);
      console.log("Error Response:", error.response);
      console.log("Error Data:", error.response?.data);


    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
          <div className='my-2'>
            <Label>Full Name</Label>
            <Input
              type='text'
              value={input.fullname}
              name='fullname'
              onChange={changeEventHandler}
              placeholder='Enter your full name'
              className='my-5 mt-2' />
          </div>

          <div className='my-2'>
            <Label>Email</Label>
            <Input
              type='email'
              value={input.email}
              name='email'
              onChange={changeEventHandler}
              placeholder='example@gmail.com'
              className='mb-5 mt-2' />
          </div>

          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
              type='number'
              value={input.phoneNumber}
              name='phoneNumber'
              onChange={changeEventHandler}
              placeholder='+91 83550 68389'
              className='mb-5 mt-2' />
          </div>

          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type='password'
              value={input.password}
              name='password'
              onChange={changeEventHandler}
              placeholder='Enter your password'
              className='mb-5 mt-2' />
          </div>
          <div className='flex items-center justify-between'>
            <RadioGroup className='flex items-center gap-4'>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer' />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='recruiter'
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer ' />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className='flex items-center  gap-2'>
              <Label>Profile</Label>
              <Input
                accept='image/*'
                type='file'
                onChange={changeFileHandler}
                className='cursor-pointer'
              />
            </div>
          </div>
          <Button type='submit' className='w-full mt-12 mb-3 bg-[#6A38C2]'>Signup</Button>
          <span className='text-sm '>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup