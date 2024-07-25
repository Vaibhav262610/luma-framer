import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full text-white flex justify-center items-center">
        about section
      </div>
      <Footer />
    </>
  );
};

export default page;
