import React from "react";
import AvailableBadge from "./homePage/AvailableBadge";
import Image from "next/image";
import Link from "next/link";

const DoctorsCard = ({ data }) => {
  return (
    <div>
      <div
        className="w-[350px] border rounded-xl shadow-lg flex flex-col items-center p-5"
      >
        <AvailableBadge />
        <div className="bg-doctors_bg w-[303px] relative mt-1 flex justify-center">
          <Image src={data.image} width={162} height={350} alt={data.name} />
        </div>
        <p className="text-lg font-semibold mt-3">{data.name}</p>
        <p className="text-gray-600 text-sm mt-1">{data.speciality}</p>
        <p className="text-sm text-center my-2 text-gray-500">{data.bio}</p>
        <p className="text-center text-sm text-gray-500">Phone: {data.contact} <br /> Email: {data.email}</p>
        <p className="text-center text-sm text-gray-500 mt-2">Available: { data.availablity }</p>
        <Link
          href="/book-appointment"
          className="border border-primary py-2 w-full text-center my-5 font-semibold rounded-xl text-primary text-[15px] hover:bg-gray-100"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;
