
import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';

function AppliedJobTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className='text-right'>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="space-y-2">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <TableRow key={index} className="border-b border-gray-300">
              <TableCell>17-07-2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className='text-right'>
                <Badge className="bg-black text-white">Selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>


      </Table>
    </div>
  )
}

export default AppliedJobTable;
