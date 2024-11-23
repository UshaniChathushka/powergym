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

                {/* Contact Information Section */}
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
            </section>
        </div>
    );
}

export default Contact;
