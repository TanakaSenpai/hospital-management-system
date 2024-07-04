import React from 'react'
import Footer from "@/app/public/components/Footer";
import Navbar from "@/app/public/components/Navbar";


const DefaultLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>{ children }</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DefaultLayout
