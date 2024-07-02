import Image from "next/image";
import React from "react";

const OurMedicalServices = () => {
  const services = [
    { label: "Well equiped lab", icon: "/Images/icons/lab.png" },
    { label: "Emergency Ambulance", icon: "/Images/icons/ambulance.png" },
    { label: "Online Appointment", icon: "/Images/icons/appointment.png" },
    { label: "Call Center", icon: "/Images/icons/call-center.png" },
  ];
  return (
    <div className="mb-10">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-dark my-3">
          Our Medical Services
        </h1>
        <p className="text-gray-600">
          We are dedicated to give you the best medical services.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-10 justify-items-center">
          {services.map((service) => (
            <div
              key={service.label}
              className={`flex flex-col items-center gap-4 border p-5 w-48 h-40 justify-center rounded-lg shadow-lg ${
                service.label === "Emergency Ambulance" ? "bg-primary" : ""
              }`}
            >
              <Image
                src={service.icon}
                alt={service.label}
                width={40}
                height={40}
              />
              <p
                className={`ext-dark text-sm text-nowrap ${
                  service.label === "Emergency Ambulance" ? "text-white" : ""
                }`}
              >
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMedicalServices;
