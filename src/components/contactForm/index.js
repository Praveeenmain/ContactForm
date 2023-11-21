import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./index.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0p7x27",
        "template_ga1tct3",
        form.current,
        "kTIFAY9hefzKJ6Ezx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header"> Contact Form</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-container">
          <label htmlFor="user_name">Name</label>
          <br />
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Enter Name"
          />
        </div>
        <div className="input-container">
          <label htmlFor="user_email">Email</label>
          <br />
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-container">
          <label htmlFor="user_Number">Phone Number</label>
          <br />
          <input
            type="PhoneNumber"
            name="user_Number"
            id="user_Number"
            placeholder="987654321"
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="input-container">
          <button type="submit" value="Send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
