import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import reCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
  const PUBLIC_EMAIL_KEY = process.env.REACT_APP_EMAIL_USER_ID;

  const captchaRef = useRef(null);

  const [toSend, setToSend] = useState({
    to_name: "Gabby",
    from_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_EMAIL_KEY)
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="form-contact" onSubmit={(event) => onSubmit(event)}>
          <div className="contact-info">
            {" "}
            <input
              className="c1"
              type="text"
              placeholder="Full Name"
              required
              name="from_name"
              value={toSend.from_name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={toSend.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="message-info">
            <input
              className="c2"
              type="text"
              placeholder="Subject"
              name="subject"
              value={toSend.subject}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              cols="50"
              rows="5"
              required
              value={toSend.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <button className="btn-send-message">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
