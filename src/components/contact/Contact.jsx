import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container">
        {/* Email */}
        <div className="contact__card">
          <i className="bx bx-mail-send contact__card-icon"></i>
          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">pankajmaurya743539@gmail.com</span>
          <a
            href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            className="contact__button"
            target="_blank"
            rel="noreferrer"
          >
            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact__card">
          <i className="bx bxl-linkedin contact__card-icon"></i>
          <h3 className="contact__card-title">LinkedIn</h3>
          <span className="contact__card-data">Pankaj Maurya</span>
          <a
            href="https://www.linkedin.com/in/pankaj-maurya-7a9172228/"
            className="contact__button"
            target="_blank"
            rel="noreferrer"
          >
            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        {/* Instagram */}
        <div className="contact__card">
          <i className="bx bxl-instagram contact__card-icon"></i>
          <h3 className="contact__card-title">Instagram</h3>
          <span className="contact__card-data">pankajmaurya352</span>
          <a
            href="https://www.instagram.com/pankaj_maurya_352/"
            className="contact__button"
            target="_blank"
            rel="noreferrer"
          >
            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
