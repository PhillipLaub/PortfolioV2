import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="about">
      <div class="diagonal-box">
        <div className="banner--fadeTop"></div>{" "}
        <div class="content">
          <h1>Contact</h1>
        </div>
        <div className="banner__bottom"></div>
        <div className="contact__text">
          <p>
            {" "}
            <ContactForm />
          </p>
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    </div>
  );
}

export default Contact;
