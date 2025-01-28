import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MidSection from "./MidSection";
import JobProfile from "./JobProfile";
import Interview from "./Interview";
import Form from "./Form";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar2 from "./ui/Navbar2";


import HeroSection2 from "./ui/HeroSection2";


const CareersPage = () => {
  return (
    <div className=" bg-white">
      {/* <Navbar /> */}
      {/* <Navbar2/> */}
      {/* <HeroSection2/> */}
      {/* <Hero /> */}
      <HeroSection/>
      <JobProfile />
      <MidSection />
      <Interview/>
      <Footer/>
      {/* <Form/> */}
    </div>
  );
};

export default CareersPage;
