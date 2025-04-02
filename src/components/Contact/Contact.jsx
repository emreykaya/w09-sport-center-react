import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        {/* TITLE */}
        <h2 data-aos="fade" data-aos-delay="0">CONTACT US</h2>
        <span data-aos="fade" data-aos-delay="0"></span>

        {/* TEXT */}
        <p data-aos="fade" data-aos-delay="100">
          Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
        </p>

        <div className="contact-container">
          {/* CONTACT LEFT SIDE */}
          <div data-aos="fade" data-aos-delay="150" className="contact-left">
            <div className="contact-left-top">
              <div className="contact-item">
                <h5>Mobile Number</h5>
                <p>+135 773 321 4442</p>
              </div>
              <div className="contact-item">
                <h5>Email Address</h5>
                <p>demo@demo.com</p>
              </div>
            </div>
            <div className="contact-left-bottom">
              <form className="contact-form">
                <h4>Make An Appointment</h4>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea name="message" placeholder="Your Message"></textarea>
              </form>
            </div>    
          </div>

          {/* CONTACT RIGHT SIDE */}
          <div data-aos="fade" data-aos-delay="200" className="contact-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.3118753823437!2d-70.55972631797177!3d41.454150599522485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1742295230727!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
