import React from 'react'
import "./styles.css"
import { Button } from '@/components/ui/button';

const AssistantsPage = () => {
  const assistants = [
    {
      name: "Sifat Abdullah",
      email: "sifatcse1873@gmail.com",
    },
    {
      name: "Shahedur Sakif",
      email: "sakifshahedur7@gmail.com",
    },
    {
      name: "Munmun Akter Prianka",
      email: "tabassumayat16@gmail.com",
    },
  ];
  return (
    <div className='w-full container'>
      <div class="box w-full">
        <h1 className='text-center text-3xl my-3'>Assistant Information</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assistants.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className='flex gap-3'>
                  <Button variant="outline" className='button text-red-500 border-red-500'>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssistantsPage;
