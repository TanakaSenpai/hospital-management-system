"use client";
import Image from "next/image";
import React from "react";
import DoctorImage from "@/public/Images/doctor.jpg";
import "./styles.css";
import { Button } from "@/components/ui/button";
import { addAppointment } from "@/app/utils/firebase";
import Cookies from "js-cookie";

const BookAppointment = () => {
  const uid = Cookies.get('userId')
  return (
    <div className="my-20 flex justify-center container">
      <div className="appointContainer flex justify-between items-center p-5 gap-5">
        <div className="flex flex-col justify-between w-full lg:w-2/4 h-80">
          <h1 className="text-2xl font-semibold">Book an Appointment</h1>
          <form
            className="flex flex-col"
            id="appointmentForm"
            // action={addAppointment(uid)}
          >
            <label className="mb-1" htmlFor="reason">
              Your reason for visit?
            </label>
            <input
              className="mb-4 p-2 border border-[#ccc] rounded-[4px]"
              type="text"
              id="reason"
              name="reason"
              required
            />
            <label className="mb-1" htmlFor="appointmentDate">
              Appointment Date:
            </label>
            <input
              className="mb-4 p-2 border border-[#ccc] rounded-[4px]"
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              required
            />
            <Button className="p-2 " type="submit">
              Book Appointment
            </Button>
          </form>
        </div>
        <div className="w-2/4 hidden lg:block">
          <Image src={DoctorImage} alt="Appointment" />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
