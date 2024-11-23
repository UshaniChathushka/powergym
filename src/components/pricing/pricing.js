import React from 'react';
import pricingHeaderImg from '../../images/pricing.png';
import rightIcon from '../../images/right.png';
import './pricing.scss';

function Pricing() {
  return (
    <div className="pricing">
      {/* Header Section */}
      <header className="pricing-header" style={{ backgroundImage: `url(${pricingHeaderImg})` }}>
        <h1 className="pricing-title">OUR PRICING</h1>
        <p className="pricing-description">
          Discover flexible membership options designed to fit your fitness goals and lifestyle. Choose the plan that best supports your journey.
        </p>
      </header>

      {/* Join the PowerGym Family Section */}
      <section className="join-family">
        <h2 className="join-heading">
          <span className="join">Join The </span>
          <span className="power">Power</span>
          <span className="gym">Gym</span>
          <span className="join"> Family</span>
        </h2><center>
        <p className="family-description">
          At PowerGym, we offer flexible membership plans to suit your fitness goals, whether you're a beginner or seeking advanced programs. Access our top facilities and expert guidance, all at affordable prices. Join today and start your fitness journey with the support you need to succeed.
        </p></center>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        {[
          {
            title: 'Basic Membership',
            description: 'Great for beginners, this plan includes access to essential gym facilities, cardio machines, and free weights.',
            price: '$29',
            perks: [
              'Access to cardio and strength equipment',
              'Locker room facilities',
              'Flexible gym hours for convenient access',
              'Free weights and core equipment',
            ],
          },
          {
            title: 'Premium Membership',
            description: 'Enjoy full access to gym facilities, join group classes, and receive customized workout plans to help you reach your goals.',
            price: '$59',
            perks: [
              'Access to all gym equipment, including advanced machines',
              'Access to group fitness classes like HIIT, yoga, and spin',
              'Customizable workout plans tailored to your goals',
              'Monthly progress assessments with a certified trainer',
              'Access to wellness resources for balanced health',
            ],
          },
          {
            title: 'Elite Membership',
            description: 'Unlock all facilities, specialized programs, and priority access to exclusive classes for ultimate fitness results.',
            price: '$99',
            perks: [
              'All-inclusive gym access, including specialty equipment and training areas',
              'Access to all group and specialized classes',
              'Priority class booking for exclusive sessions',
              'Monthly wellness assessments and progress tracking',
              'Complimentary personal training sessions each month',
            ],
          },
        ].map((card, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">
              <span className="basic">{card.title.split(' ')[0]}</span>
              <br />
              <span className="membership">{card.title.split(' ')[1]}</span>
            </h3>
            <p className="card-description">{card.description}</p>
            <p className="card-price">
              <span className="price">{card.price}</span>
              <span className="per-month"> month</span>
            </p>
            <ul className="card-perks">
              {card.perks.map((perk, idx) => (
                <li key={idx}>
                  <img src={rightIcon} alt="Right Icon" />
                  {perk}
                </li>
              ))}
            </ul>
            <button className="card-button">GET STARTED</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Pricing;
