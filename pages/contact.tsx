import React from "react";
import LocationIcon from "../assets/icons/locationIcon";
import EmailIcon from "../assets/icons/emailIcon";
import MobileIcon from "../assets/icons/mobileIcon";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="contactPage">
      <div className="textContent">
        <h1>
          <span id="spanGreen">Resource</span> <span id="spanBlue">Zen</span>{" "}
          would love to hear from you
        </h1>
        <h2>Contact Us</h2>
        <div className="contactItem">
          <LocationIcon />
          <h3>4 Havenga Street, Upper Oakdale Bellville, Cape Town</h3>
        </div>
        <div className="contactItem">
            <EmailIcon />
          <h3>info@al.co.za</h3>
        </div>
        <div className="contactItem">
            <MobileIcon />
          <h3>+27 21 949 4080</h3>
        </div>
        
      </div>
      <form action="">
          <h1>Get in Touch</h1>
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="contact">Contact Number</label>
          <input type="text" />
          <label htmlFor="email">Email</label>
          <input type="text" />
          <label htmlFor="message">Message</label>
          <input type="text" />
          <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
