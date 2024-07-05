import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import doctors from '@/app/api/doctors/doctosData';

const AppointmentsPage = () => {
  const appointments = [
    {
      id: 1,
      name: "Taylor",
      reason: "I had a heart attack",
      date: "10/07/2024",
      time: "to be assigned",
      doctor: "to be assigned",
      userID: "3",
    },
    {
      id: 2,
      name: "James",
      reason: "I broke a leg",
      date: "12/07/2024",
      time: "2 PM",
      doctor: "Dr. MD. Rashidul Hasan",
      userID: "5",
    },
    {
      id: 3,
      name: "Mandy",
      reason: "I'm concerned about my health",
      date: "15/07/2024",
      time: "to be added",
      doctor: "to be assigned",
      userID: "6",
    },
    {
      id: 4,
      name: "Gray",
      reason: "I have serious fever",
      date: "19/07/2024",
      time: "to be assigned",
      doctor: "to be assigned",
      userID: "8",
    },
  ];

  return (
    <div className="container mt-12">
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
            <TableHead className="text-right">Actions</TableHead>
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
              <TableCell className="flex gap-4 justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button >Assign</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Assign Doctor</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Assign doctor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Doctors</SelectLabel>
                            {doctors.map((item) => (
                              <SelectItem key={item.id} value={item.id}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Date
                        </Label>
                        <Input id="date" type="date" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Time
                        </Label>
                        <Input id="date" type="time" className="col-span-3" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="border-red-500 text-red-500">Cancel</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppointmentsPage
