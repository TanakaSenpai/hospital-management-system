import React from "react";
import doctors from "@/app/api/doctors/doctosData";
import DoctorsCard from "@/app/components/DoctorsCard";

const Doctors = () => {
  
  return (
    <div className="py-5">
      <div className="text-center my-5">
        <h1 className="text-4xl font-semibold my-3">Meet our Doctors</h1>
        <p className="text-gray-500 my-3">
          Our qualified doctors are ready to serve you.
        </p>
      </div>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2 justify-items-center">
          {doctors.slice(0, 4).map((item) => (
              <DoctorsCard key={item.email} data={item} />
            ))}
          </div>
      </div>
    </div>
  );
};

export default Doctors;
