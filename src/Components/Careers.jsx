import React from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import MidSection from "./MidSection";
import JobProfile from "./JobProfile";
import Interview from "./Interview";
import Form from "./Form";
import Footer from "./Footer";


const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <JobProfile />
      <MidSection />
      <Interview/>
      <Footer/>
      {/* <Form/> */}
    </div>
  );
};

export default CareersPage;
