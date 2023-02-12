import React, { useRef } from "react";
import "./Contacts.css";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nz6yet4",
        "template_7emsnrb",
        form.current,
        "Q5HVxVtKGLbQuDvaY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sonideepak887@gmail.com</h5>
            <a href="mailto:sonideepak887@gmail.com" target="_blank">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>91+ 9529076013</h5>
            <a href="https://wa.me/919529076013" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            type="text"
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button className=" btn btn-primary" type="submits">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
