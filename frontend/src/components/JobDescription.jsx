import React from 'react'
import { Badge } from './ui/badge'

function JobDescription() {
  return (
    <div>
      <h1 className='font-blod text-xl'>Title</h1>
      <div className='flex items-center gap-2 mt-4'>
      <Badge className='text-blue-700 font-bold'>12 Position</Badge>
      <Badge className='text-red-600 font-bold'>Part Time</Badge>
      <Badge className='text-[#7209b7] font-bold'>24 LPA</Badge>

      </div>

    </div>
  )
}

export default JobDescription
