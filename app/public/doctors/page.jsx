import React from "react";
import Image from "next/image";
import doctors from "@/app/api/doctors/doctosData"
import "./style.css";
import DoctorsCard from "../components/DoctorsCard";


const DoctorsPage = () => {
  
  return (
    <div className="">
      <h1 className="text-4xl font-semibold text-center my-10">Our Doctors</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((item, i) => (
          <DoctorsCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
