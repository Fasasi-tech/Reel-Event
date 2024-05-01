
'use client'
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { useEventsQuery } from '../slices/usersApiSlice';
import Loader from '../Loader';




const Tables = () => {
const {data:events, isLoading, error} = useEventsQuery()
if (isLoading){
  return <Loader />
}

if (error){
  return <p>something went wrong!</p>
} 
 

const exportToExcel = () => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const ws = XLSX.utils.table_to_sheet(document.querySelector('Table'));
  const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
  const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const excelData = new Blob([excelBuffer], { type: fileType });
  const fileName = 'Invitees_data' + fileExtension;

  saveAs(excelData, fileName);
};

  return (
    <div>
      <div className='flex p-2  items-end justify-end'>
        <p className='cursor-pointer rounded-lg p-2 bg-[#3D802E] text-white' onClick={exportToExcel}>Download</p>
      </div>
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {  events.data.user.map((item, index) => (
            <TableRow key={index} >
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.phone_number.toString()}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>{item.createdAt.split('T')[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </div>
  )
}

export default Tables