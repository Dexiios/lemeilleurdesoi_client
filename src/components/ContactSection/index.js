import React, { useEffect } from "react";
import {
  ContactSectionContainer,
  ContactImage,
  ContactText,
  ContactInfoWrap,
  ContactTextH1,
  ContactWrapBorder,
} from "./ContactElements";

import PhoneImg from "../../images/phone_image.png";
import MailImg from "../../images/mail_image.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    Aos.init({ duration: 3000, once: true });
  }, []);
  return (
    <>
      <ContactSectionContainer>
        <ContactWrapBorder data-aos="fade-up">
          <ContactInfoWrap>
            <ContactImage src={PhoneImg} />
            <ContactTextH1>Par téléphone</ContactTextH1>
            <ContactText>06 08 08 88 72</ContactText>
          </ContactInfoWrap>
          <ContactInfoWrap>
            <ContactImage src={MailImg} />
            <ContactTextH1>Par email</ContactTextH1>
            <ContactText>lemeilleurdesoi.rdv@gmail.com</ContactText>
          </ContactInfoWrap>
        </ContactWrapBorder>
      </ContactSectionContainer>
    </>
  );
};

export default ContactSection;
