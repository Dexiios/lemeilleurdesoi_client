import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroContactSection from "../components/HeroContact";
import Footer from "../components/Footer";
import InfoSection from "../components/InfoSection/Index";
import ContactSection from "../components/ContactSection";
import { contactObjOne } from "../components/InfoSection/Data";

const SecondServicePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroContactSection />
      <ContactSection />
      <InfoSection {...contactObjOne} />
      <Footer />
    </>
  );
};
<h1>Contact page</h1>;
export default SecondServicePage;
