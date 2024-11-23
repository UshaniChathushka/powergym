import React from 'react';
import sectionImage from '../../images/package.png'; // Background image for section
import './package.scss'; // Importing the stylesheet for custom styles

function Package() {
  return (
    <div className="package">
      <section
        className="package-section"
        style={{
          backgroundImage: `url(${sectionImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '1000px',
          width: '100%',
        }}
      >
        <form className="package-form">
          <h2>Select Your Gym Package</h2>
          <p>
            Choose the gym membership package that fits your needs. We offer three packages with different benefits to help you achieve your fitness goals.
          </p>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="contactNumber">Contact Number</label>
          <input type="tel" id="contactNumber" name="contactNumber" placeholder="Enter your contact number" required />

          <label htmlFor="package">Select Packages</label>
          <select id="package" name="package" required>
            <option value="basic">Basic Membership</option>
            <option value="pro">Pro Membership</option>
            <option value="elite">Elite Membership</option>
          </select>

          <label htmlFor="notes">Additional Notes or Requests</label>
          <textarea id="notes" name="notes" placeholder="Enter any additional notes or requests" style={{ height: '120px' }} />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Package;
