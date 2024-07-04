import React from 'react'
import { Button } from '@/components/ui/button';
import "./styles.css";
import doctors from '@/app/api/doctors/doctosData';

const DoctorsPage = () => {
 
  return (
    <div className="w-full container">
      <div class="box w-full">
        <h1 className="text-center text-3xl my-3">Doctors Information</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.availablity}</td>
                <td className="flex gap-3">
                  <Button className="button">Edit</Button>
                  <Button
                    variant="outline"
                    className="button text-red-500 border-red-500"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoctorsPage
