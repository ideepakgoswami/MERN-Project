import React from "react";
import ContactCard from "./ContactCard";
import { BsPhoneFill, BsFillPinMapFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";


const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <ContactCard icon={<BsPhoneFill size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Phone' text="7863969837" />
          <ContactCard icon={<AiFillMail size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Email' text="deepak@gmail.com" />
          <ContactCard icon={<BsFillPinMapFill size={30} className="me-3" style={{ color: 'skyblue' }} />} heading='Address' text="Delhi" />
        </div>
      </div >

      <div class="container">
        <h1 className="text-center mt-5 pt-5 pb-4">Get In Touch</h1>
        <form>
          <div class="form-row d-flex justify-content-evenly mb-4">
            <div class="form-group col-md-3 me-4">
              <input type="text" class="form-control" id="inputName" placeholder="Name" />
            </div>
            <div class="form-group col-md-3 me-4">
              <input type="email" class="form-control" id="inputEmail" placeholder="Email" />
            </div>
            <div class="form-group col-md-3 ms-4">
              <input type="tel" class="form-control" id="inputPhone" placeholder="Phone" />
            </div>
          </div>
          <div class="form-row d-flex justify-content-evenly">
            <div class="form-group col-md-11">
              <textarea class="form-control" id="inputMessage" rows="3" placeholder="Message"></textarea>
            </div>
          </div >
          <div class="mt-3 text-center">
            <button
              type="submit"
              name="signup"
              id="signup"
              className="btn btn-primary"
              value="register"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>


    </>
  );
};

export default Contact;
