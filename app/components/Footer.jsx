import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  const socials = [
    { link: "www.facebook.com", icon: <FaFacebook className="text-2xl" /> },
    {
      link: "www.twitter.com",
      icon: <AiFillTwitterCircle className="text-2xl" />,
    },
    { link: "www.instagram.com", icon: <FaInstagram className="text-2xl" /> },
  ];

  return (
    <div className="bg-secondary py-10 flex items-center mt-12">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-4">
          <Logo />
          <p>
            Our hospital stands as a beacon of hope, where skilled hands and
            caring hearts come together to comfort, treat, and restore. Every
            patient is not just a case, but a story of resilience and triumph
            waiting to be written. Together, we navigate the realms of illness
            and recovery, guided by expertise and fueled by empathy.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="text-primary font-semibold text-xl">Quick Links</p>
            <div className="flex flex-col">
              <Link href="/book-appointment">Book an appointment</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/doctors">Doctors</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary">Find Us</h3>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <Link href={social.link} key={i} className="hover:text-primary">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
