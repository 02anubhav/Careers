import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MidSection from "./MidSection";
import JobProfile from "./JobProfile";
import Interview from "./Interview";
import Form from "./Form";
import Footer from "./Footer";
import HeroSection from "./HeroSection";


const CareersPage = () => {
  return (
    <div className=" bg-white">
      <Navbar />
      {/* <Hero /> */}
      <HeroSection/>
      <JobProfile />
      <MidSection />
      <Interview/>
      {/* <Footer/> */}
      {/* <Form/> */}
    </div>
  );
};

export default CareersPage;
