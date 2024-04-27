import React from 'react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Tables = () => {
    const data = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
        { id: 1, name: "John Doe", email: "john.doe@example.com", age: 30 },
        { id: 2, name: "Jane Doe", email: "jane.doe@example.com", age: 25 },
        { id: 3, name: "Bob Smith", email: "bob.smith@example.com", age: 40 },
      ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Age</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default Tables