import React from 'react';
import contactIcon from '../../images/contact.png';
import contactImg from '../../images/contactimg.png';
import emailIcon from '../../images/email.png';
import locationIcon from '../../images/location.png';
import './contact.scss';

function Contact() {
    return (
        <div className='Contact'>
            {/* Header Section */}
            <header className="contact-header" style={{ backgroundImage: `url(${contactImg})` }}>
                <h1 className="contact-title">CONTACT US</h1>
                <p className="contact-description">
                    Whether you have questions, feedback, or need assistance, the PowerGym team is here to help. Reach out to us through any of the methods below, and we’ll get back to you as soon as possible.
                </p>
            </header>

            {/* Contact Form and Information Section */}
            <section className="contact-section">
                {/* Form Section */}
                <div className="form-container">
                    <h2>Send Us a Message</h2>
                    <p>Have a question or need more information? Use the form below to get in touch with us.</p>
                    <form className="contact-form">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your name" />

                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" />

                        <label>Subject</label>
                        <input type="text" placeholder="Enter subject" />

                        <label>Message</label>
                        <textarea placeholder="Your message here..." rows="5"></textarea>

                        <center><button type="submit">Submit</button></center>
                    </form>
                </div>

                {/* Contact Info with Map */}
                <div className="info-with-map">
                    <div className="contact-info">
                        <h3>Our Contact Information</h3>
                        <div className="contact-item">
                            <img src={contactIcon} alt="Contact Icon" />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email Icon" />
                            <p>info@powergym.com</p>
                        </div>
                        <div className="contact-item">
                            <img src={locationIcon} alt="Location Icon" />
                            <p>123 Fitness Ave, Los Angeles, CA 90001</p>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25161.61104743517!2d-118.28735929337076!3d33.96878790918895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c9062226fb1d%3A0xf36457ee888c3600!2sLos%20Angeles%2C%20CA%2090001%2C%20USA!5e1!3m2!1sen!2slk!4v1732335040701!5m2!1sen!2slk"
                            width="536"
                            height="458"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="powergym"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
