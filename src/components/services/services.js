import React from 'react';
import rightIcon from '../../images/right.png';
import servicesHeaderImg from '../../images/services.png';
import services1Img from '../../images/services1.png';
import services2Img from '../../images/services2.png';
import './services.scss';

function Services() {
  return (
    <div className="services">
      {/* Header Section */}
      <header className="services-header" style={{ backgroundImage: `url(${servicesHeaderImg})` }}>
        <h1 className="services-title">SERVICES</h1>
        <p className="services-description">
          At PowerGym, we offer expert training, top-tier equipment, and a motivating environment to help you reach your fitness goals. Explore our services to get started on your journey.
        </p>
      </header>

      {/* Our Services Section */}
      <section className="our-services">
        <h2 className="section-title">Our Services</h2>
        <div className="our-services-content">
          {/* Left Image */}
          <img src={services1Img} alt="Services 1" className="services-image" />
          {/* Right Text */}
          <p className="services-paragraph">
            PowerGym offers a comprehensive range of services designed to support every aspect of your fitness journey. From personalized training with certified professionals to group classes that foster a sense of community, our diverse programs cater to all fitness levels and goals. With access to cutting-edge equipment and recovery facilities, we ensure you have all the tools needed to achieve lasting results. Whether you're looking to build strength, improve flexibility, or recover after intense workouts, PowerGym is here to guide you every step of the way. Explore our offerings below to discover the perfect support for your path to a healthier, stronger you.
          </p>
        </div>
      </section>

      {/* What Sets Our Services Apart */}
      <section className="sets-us-apart">
        <div className="apart-content">
          <div>
            <h2 className="section-title">What Sets Our Services Apart</h2>
            <p className="apart-description">
              Our commitment to excellence ensures every service at PowerGym supports you with the tools, expertise, and motivation you need to thrive. Whether you’re starting out or advancing in your fitness journey, discover how our services go above and beyond.
            </p>

            <div className="apart-features">
              {/* Feature 1 */}
              <div className="apart-feature">
                <img src={rightIcon} alt="Right Icon" />
                <div>
                  <h4>Customized Personal Training</h4>
                  <p>
                    Experience one-on-one sessions with certified trainers who personalize each workout, helping you achieve targeted results safely and effectively.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="apart-feature">
                <img src={rightIcon} alt="Right Icon" />
                <div>
                  <h4>Group Classes</h4>
                  <p>
                    Join dynamic group classes designed to challenge, inspire, and build camaraderie among participants at all fitness levels.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="apart-feature">
                <img src={rightIcon} alt="Right Icon" />
                <div>
                  <h4>Recovery and Wellness</h4>
                  <p>
                    Take advantage of our advanced recovery facilities and wellness programs to ensure you stay on track and injury-free during your fitness journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <img src={services2Img} alt="Services 2" className="services-image-right" />
        </div>
      </section>
    </div>
  );
}

export default Services;
