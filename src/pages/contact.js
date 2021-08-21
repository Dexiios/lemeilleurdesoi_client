import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroContactSection from "../components/HeroContact";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection/Index";
import {
  contactObjOne
} from "../components/InfoSection/Data";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroContactSection />
      <InfoSection {...contactObjOne} />
      <Footer />
    </>
  );
};
<h1>Contact page</h1>;
export default ContactPage;
