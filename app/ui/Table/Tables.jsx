
import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";




const Tables = async() => {

  const getUsers = async () => {
    const res = await fetch('http://localhost:3001/api/v1/users/getUsers')
    return res.json()
  }
const data = await getUsers()
console.log(data)

  // const {data=[], isLoading, error} = useEventsQuery()
  // console.log(Array.isArray(data))
  // console.log(data)

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

 

    // const data = [
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //     { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
    //     { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
    //     { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
    //   ];
  return (
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
        </TableRow>
      </TableHeader>
      <TableBody>
        {  data.data.user.map((item, index) => (
          <TableRow key={index} >
            <TableCell>{item.first_name}</TableCell>
            <TableCell>{item.last_name}</TableCell>
            <TableCell>{item.gender}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.phone_number}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
    </Table>
  )
}

export default Tables