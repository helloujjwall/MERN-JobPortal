import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

function Job() {
  const navigate = useNavigate();
  const jobId='dndndndjjd'
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 mb-7 mx-auto w-[95%]  mt-5'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500 '>2 days ago</p>
        <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button className='border rounded-full w-10 h-10  items-center justify-center' variant='outline' size="icon">
          <Avatar>
            <AvatarImage
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?ga=GA1.1.1532546902.1743271261&semt=ais_hybrid"
              className="w-full h-full object-cover rounded-full"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error, ea incidunt reprehenderit molestias, quidem in iste quae obcaecati dolorem odio fuga ipsam accusantium.</p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <Badge variant="ghost" className='text-blue-700 font-bold'>12 Position</Badge>
        <Badge variant="ghost" className='text-[#F83002] font-bold'>Part Time</Badge>
        <Badge variant="ghost" className='text-[#7209B7] font-bold'>24 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant='outline' onClick={()=> navigate('/job/description/${jobId}')}>Details</Button>
        <Button className='bg-[#7209b7] text-[#ffffff]'>Save for later</Button>
      </div>
    </div>
  )
}

export default Job
