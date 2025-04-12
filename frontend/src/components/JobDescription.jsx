import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
  const isApplied = false; // Replace with actual logic to check application status

  return (
    <div className='max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200'>
      <div className='flex items-center justify-between'>

        <div>
          <h1 className='font-bold text-2xl text-gray-800'>Frontend Developer</h1>

          <div className='flex items-center gap-3 mt-4'>
            <Badge className='bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-md'>12 Positions</Badge>
            <Badge className='bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-md'>Part Time</Badge>
            <Badge className='bg-purple-100 text-[#7209b7] font-semibold px-3 py-1 rounded-md'>24 LPA</Badge>
          </div>
        </div>

        {/* Conditional Button for Application Status */}
        <Button
          className={`px-5 py-2 font-semibold rounded-lg shadow-md transition-all duration-200
            ${isApplied ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>

      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>Bareilly</span></h1>
        <h1 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, culpa nam. Excepturi dignissimos minus, ducimus illum sapiente commodi rem deserunt officiis ipsam.</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yr</span></h1>
        <h1 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>50</span></h1>
        <h1 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>17-07-2024</span></h1>
      </div>
    </div>
  )
}

export default JobDescription;
