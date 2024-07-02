import Image from "next/image";
import Link from "next/link";
import React from "react";
import AvailableBadge from "./AvailableBadge"

const Doctors = () => {

    const doctors = [
      {
        name: "Dr. Md. Rakibul Islam",
        speciality: "Cardiologist",
        img: "/Images/doctors/doctor-1.png",
      },
      {
        name: "Dr. Md. Rashidul Hasan",
        speciality: "Neurologist",
        img: "/Images/doctors/doctor-2.png",
      },
      {
        name: "Dr. Rahat Afza chowdhury",
        speciality: "Gynologist",
        img: "/Images/doctors/doctor-3.png",
      },
      {
        name: "Dr. A.K.M Akramul Haque",
        speciality: "Child Specialist",
        img: "/Images/doctors/doctor-4.png",
      },
  ];
  
  return (
    <div className="py-5 mb-10">
      <div className="text-center my-5">
        <h1 className="text-4xl font-semibold my-3">Meet our Doctors</h1>
        <p className="text-gray-500 my-3">
          Our qualified doctors are ready to serve you.
        </p>
      </div>
      <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2 justify-items-center">
            {doctors.map((item, i) => (
                <div className="w-[350px] border rounded-xl shadow-lg flex flex-col items-center p-5" key={i}>
                    <AvailableBadge />
                    <div className="bg-doctors_bg w-[303px] relative mt-1 flex justify-center">
                        <Image src={item.img} width={162} height={350} alt={item.name} />
                    </div>
                    <p className="text-lg font-semibold mt-3">{ item.name }</p>
                    <p className="text-gray-500 text-sm mt-1">{item.speciality}</p>
                    <Link href="/book-appointment" className="border border-primary py-2 px-4 my-5 font-semibold rounded-xl text-primary text-[15px] hover:bg-gray-100">Book an Appointment</Link>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Doctors;
