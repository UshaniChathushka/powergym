import React from 'react';
import aboutImg from '../../images/about.png';
import about1 from '../../images/about1.png'; // Image 1 for grid
import about2 from '../../images/about2.png'; // Image 2 for grid
import about3 from '../../images/about3.png'; // Image 3 for grid
import about4 from '../../images/about4.png'; // Image 4 for grid
import Coach1 from "../../images/coach1.png";
import Coach2 from "../../images/coach2.png";
import Coach3 from "../../images/coach3.png";
import FacebookIcon from "../../images/fb.png";
import InstagramIcon from "../../images/instagram.png";
import XIcon from "../../images/X.png";
import './about.scss';

function About() {
  return (
    <div className="about">
      <header className="about-header" style={{ backgroundImage: `url(${aboutImg})` }}>
        <h1 className="about-us-title">ABOUT US</h1>
        <p className="about-us-paragraph">
          PowerGym is here to support your fitness goals with expert trainers, quality equipment, and an inspiring, empowering environment.
        </p>
      </header>

      {/* Who We Are Section */}
      <section className="who-we-are">
        <h2 className="section-title">Who We Are?</h2>
        <div className="who-we-are-content">
          <div className="who-we-are-images">
            <img src={about1} alt="About 1" />
            <img src={about2} alt="About 2" />
            <img src={about3} alt="About 3" />
            <img src={about4} alt="About 4" />
          </div>
          <div className="who-we-are-text">
            <p>
              PowerGym is a fitness community dedicated to helping individuals transform their lives through health and wellness. Our focus is on providing a high-quality, welcoming environment where members of all fitness levels feel supported on their journey. From the latest fitness technology to certified trainers, PowerGym is here to empower you with the tools and motivation to achieve your personal best.
            </p>
            <h2 className="our-mission">Our Mission</h2>
            <p>
              To inspire, support, and empower each member to achieve their unique fitness goals. We believe that a healthy lifestyle is key to a balanced, fulfilling life, and we’re here to help you find strength, resilience, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="core-values">
        <h2 className="section-title">Our Core Values</h2>
        <div className="core-values-cards">
          <div className="core-value-card">
            <h3>Community</h3>
            <p>
              PowerGym creates a welcoming space where members connect, motivate, and uplift each other toward reaching shared fitness goals.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Growth</h3>
            <p>
              We support continuous self-improvement, celebrating every milestone and encouraging progress in each member’s fitness journey.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Integrity</h3>
            <p>
              Our PowerGym team is committed to honesty and respect, fostering a trustworthy, positive environment for everyone who joins us.
            </p>
          </div>
          <div className="core-value-card">
            <h3>Wellness</h3>
            <p>
              We embrace a holistic fitness approach, promoting a balanced focus on physical health, mental wellness, and lifestyle harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Our Trainers */}
      <section className='our-trainers'>
        <h2>Meet Our Team</h2>
        <center>
          <p>Our dedicated trainers bring expertise, motivation, and personalized guidance to help you reach your fitness goals. Each team member is passionate about supporting you on your journey, providing tailored programs to suit individual needs and ensure steady progress.</p>
        </center>

        {/* Card Section */}
        <div className="trainer-card-container">
          {/* Trainer 1 */}
          <div className="trainer-card">
            <div className="trainer-img" style={{ backgroundImage: `url(${Coach1})` }}></div>
            <h2>ALEX CARTER</h2>
            <p>Head Trainer</p>
            <h4>Alex has over a decade of experience in strength and conditioning, creating customized training plans to help each member safely reach peak performance.</h4>
            <div className="social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={XIcon} alt="X" />
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="trainer-card">
            <div className="trainer-img" style={{ backgroundImage: `url(${Coach2})` }}></div>
            <h2>SARAH LEE</h2>
            <p>Fitness and Nutrition Coach</p>
            <h4>Specializing in holistic wellness, Sarah combines fitness coaching with personalized nutrition guidance, empowering members to achieve balanced, sustainable results.</h4>
            <div className="social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={XIcon} alt="X" />
            </div>
          </div>

          {/* Trainer 3 */}
          <div className="trainer-card">
            <div className="trainer-img" style={{ backgroundImage: `url(${Coach3})` }}></div>
            <h2>MICHAEL LEE</h2>
            <p>Functional Movement Specialist</p>
            <h4>David focuses on functional training to improve mobility, strength, and endurance, helping members stay active and injury-free throughout their fitness journey.</h4>
            <div className="social-icons">
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={XIcon} alt="X" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect Section */}
      <section className="what-you-can-expect">
        <h2>What You Can Expect</h2>
        <p>
          At PowerGym, we go beyond just workouts to create a holistic fitness experience designed to empower you on every level. From top-notch training programs to a vibrant community of like-minded individuals, PowerGym is where your personal fitness goals come to life. We support not only your physical training but also your overall well-being and lifestyle ambitions, making fitness a positive, lasting part of your daily life.
        </p>
        <p>
          Whether you’re aiming to build strength, improve wellness, or simply find a motivating space to grow, PowerGym is here to help. Our trainers offer personalized guidance tailored to your unique needs, ensuring that every visit brings you closer to your goals. Check out our Services page for a full range of offerings designed to support every fitness level, or dive into our Blog for tips, nutrition advice, and inspiring stories from our dedicated community.
        </p>
      </section>
    </div>
  );
}

export default About;
