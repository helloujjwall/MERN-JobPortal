import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

function Job() {
  return (
    <div>
      <p>2 days ago</p>
      <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
      <div className='flex items-center gap-2 my-2'>
        <Button className='p-6' variant='outline' size='icon'>
          <Avatar className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 shadow-sm">
            <AvatarImage
              src="https://png.pngtree.com/png-vector/20220509/ourmid/pngtree-company-logo-design-trademark-design-creative-logo-png-image_4569380.png"
              className="w-full h-full object-cover"
            />
          </Avatar>
        </Button>
        
      </div>
    </div>
  )
}

export default Job
