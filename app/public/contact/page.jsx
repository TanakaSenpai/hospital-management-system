import React from "react";
import "./style.css"
import { FaAngleRight, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div>
      <section className="bg-contact-image bg-contact_bg">
        <div className="bg-overlay hero-section">
          <div>
            <h1 className="text-white text-4xl mb-5">Contact us</h1>
            <div className="bread-crumb flex justify-center items-center gap-2">
              <button type="button" className="button">
                Home
              </button>
              <span>
                <FaAngleRight className="text-white" />
              </span>
              <button type="button" className="button text-primary">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 content-center w-full">
            <div className="flex flex-col items-start md:items-center">
              <div className="">
                <h3 className="flex gap-2 items-center">
                  <FaLocationDot className="text-primary" />
                  Address
                </h3>
                <p>
                  Dhaka - Narayanganj Link Road
                  <br />
                  1230, Narayanganj, Dhaka
                </p>
              </div>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="">
                <h3 className="flex gap-2 items-center">
                  <FaEnvelope className="text-primary" />
                  Email
                </h3>
                <p>genocareinnovation32@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col md:items-center">
              <div className="">
                <h3 className="flex gap-2 items-center">
                  <FaPhone className="text-primary" />
                  <p>Hotline</p>
                </h3>
                <p>
                  +880 1XXXXXXXXX
                  <br /> +880 1XXXXXXXXX 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pad1 container">
          <h1 className="text-4xl text-center mb-5">Get In Touch</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.1181237069463!2d90.49197557539748!3d23.63594037874863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b11bb512fc81%3A0x7390d088efe98156!2sUniversity%20College%20of%20Technology!5e0!3m2!1sen!2sbd!4v1719945095624!5m2!1sen!2sbd"
            width="100%"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
