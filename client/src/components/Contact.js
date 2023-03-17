import React from "react";
import ContactCard from "./ContactCard";
import { BsPhoneFill, BsFillPinMapFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (

    <div className="container mt-5">
      <div className="row">
        <ContactCard icon={<BsPhoneFill size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Phone' text="7863969837" />
        <ContactCard icon={<AiFillMail size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Email' text="deepak@gmail.com" />
        <ContactCard icon={<BsFillPinMapFill size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Address' text="Delhi" />
      </div>
    </div >

  );
};

export default Contact;
