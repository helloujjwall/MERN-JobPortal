import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'


const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Sending Data: ", input);  
    try {
          const res = await axios.post(`${USER_API_END_POINT}/login`, input,{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true,
          });
          
          if(res.data.success){
            navigate("/");
            toast.success(res.data.message)
          }
    } catch (error) {
      console.log("Axios Error Response: ", error.response);
        toast.error(error.response.data.message);
    }
  }


  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>

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
                value='user' 
                checked={input.role ==='user'}
                onChange={changeEventHandler}
                className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                type='radio' 
                name='role' 
                value='recruiter' 
                checked={input.role ==='recruiter'}
                onChange={changeEventHandler}
                className='cursor-pointer '
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type='submit' className='w-full mt-12 mb-3 bg-[#6A38C2]'>Login</Button>
          <span className='text-sm '>Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login;