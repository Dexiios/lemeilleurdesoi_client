import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroContactSection from "../components/HeroContact";
import Footer from "../components/Footer";
import FirstService from "../components/FirstService";

const FirstServicePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroContactSection />
      <FirstService />
      <Footer />
    </>
  );
};
<h1>Contact page</h1>;
export default FirstServicePage;
