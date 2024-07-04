import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

const AppointmentsPage = () => {
  const appointments = [
    {
      name:"Ronaldo",
      reason: "I had a heart attack",
      date: "10/07/2024",
      time: "11 AM",
      doctor: "to be added"
    },
    {
      name:"Neymar",
      reason: "I broke a leg",
      date: "12/07/2024",
      time: "2 PM",
      doctor: "to be added"
    },
    {
      name:"Ramos",
      reason: "I have cancer",
      date: "15/07/2024",
      time: "to be added",
      doctor: "to be added"
    },
    {
      name:"Pele",
      reason: "I almost died",
      date: "19/07/2024",
      time: "5 PM",
      doctor: "to be added"
    },
  ];

  return (
    <div className='container mt-12'>
      <h1 className="text-3xl font-bold text-center mb-8">Appointments</h1>
      <Table>
        <TableCaption>A list of all the recent appointments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Doctor</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.reason}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.doctor}</TableCell>
              <TableCell className="text-right">
                <Button>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppointmentsPage
