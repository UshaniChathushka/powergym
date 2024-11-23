import React from 'react';
import Coach1 from "../../images/coach1.png";
import Coach2 from "../../images/coach2.png";
import Coach3 from "../../images/coach3.png";
import dumbbellIcon from '../../images/dumbbell.png';
import dumbbellIcon2 from '../../images/dumbbell2.png';
import dumbbellIcon3 from '../../images/dumbbell3.png';
import dumbbellIcon4 from '../../images/dumbbell4.png';
import FacebookIcon from "../../images/fb.png";
import headerImg from '../../images/headerimg.png';
import InstagramIcon from "../../images/instagram.png";
import section3Img from '../../images/section3img.png';
import section3Img2 from '../../images/section3img2.png';
import section3Img3 from '../../images/section3img3.png';
import XIcon from "../../images/X.png";
import './Home.scss';

function Home() {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="home-header" style={{ backgroundImage: `url(${headerImg})` }}>
        <h1 className="h1main">
          <span className="line-one">FORGR YOUR</span>
          <span className="line-two">PATH TO</span> 
          <span className="line-three">STRENGTH!</span>
        </h1>
        <p>Achieve your goals with expert trainers, energizing classes, and a supportive community. Start your journey today!</p>
        <button className="join-now">JOIN NOW</button>
        <br /><br />
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">135+</span>
            <span className="stat-text">Fitness Programs</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-text">Expert Trainers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-text">Energizing Classes</span>
          </div>
        </div>
      </header>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2 className="why-choose-title">
          Why Choose <span className="power-gym">Power</span><span className="gym">Gym</span>?
        </h2>
        <center>
          <p>At PowerGym, we’re dedicated to providing a unique fitness experience. From top-tier trainers to personalized workouts, we empower you to reach your best.</p>
        </center>
        
        {/* Card Section */}
        <div className="card-container">
          <div className="card">
            <img src={dumbbellIcon} alt="Dumbbell Icon" className="card-icon"/>
            <h3 className="card-title">State-of-the-Art Equipment</h3>
            <p className="card-description">
              PowerGym provides top fitness technology and equipment for a professional, effective workout environment.
            </p>
          </div>
          <div className="card">
            <img src={dumbbellIcon2} alt="Dumbbell Icon" className="card-icon"/>
            <h3 className="card-title">Certified Personal Trainers</h3>
            <p className="card-description">
              Our skilled trainers deliver expert guidance, helping you safely achieve your personal fitness goals and improve your performance.
            </p>
          </div>
          <div className="card">
            <img src={dumbbellIcon3} alt="Dumbbell Icon" className="card-icon"/>
            <h3 className="card-title">Supportive Gym Community</h3>
            <p className="card-description">
              Join a welcoming community that encourages and inspires you, making every visit enjoyable and motivating.
            </p>
          </div>
          <div className="card">
            <img src={dumbbellIcon4} alt="Dumbbell Icon" className="card-icon"/>
            <h3 className="card-title">Personalized Flexible Plans</h3>
            <p className="card-description">
              Choose from a variety of memberships designed to suit your schedule, fitness goals, and commitment level.
            </p>
          </div>
        </div>

        <button className="join-now">JOIN NOW</button>
      </section>

{/* Welcome Section */}
<section className='welcome'>
  <div className="welcome-text">
    <h2 className="welcome-title">
      Welcome to <span className="power-gym">Power</span><span className="gym">Gym</span>?
    </h2>
    <p>
      PowerGym is a premier fitness facility committed to helping individuals achieve their health and fitness goals. With state-of-the-art equipment, certified trainers, and a motivating environment, we provide personalized fitness programs tailored to all levels. Our focus is on delivering results, fostering a supportive community, and ensuring every member has the tools to succeed. At PowerGym, we believe in empowering individuals to live healthier, more active lives.
    </p>
    <button className='learn-more'>LEARN MORE</button>
  </div>
  <div className="welcome-images">
    <div className="image-column">
      <img src={section3Img} alt="Fitness Equipment" className="welcome-image"/>
      <img src={section3Img3} alt="Personal Training Session" className="welcome-image"/>
    </div>
    <img src={section3Img2} alt="Group Workout" className="welcome-image-large"/>
  </div>
</section>

{/* Perfect Plan Section */}
<section className='perfect-plan'>
  <div className='perfect-plan'>
    <h2>Choose Your Perfect Plan</h2>
    <center>
      <p>PowerGym offers flexible memberships to match your fitness goals. Whether you're starting out or looking for premium access, find the perfect plan for your needs.</p>
    </center>

    {/* Card Section */}
    <div className="card-container">
      {/* Card 1 */}
      <div className="card">
        <h3 className="card-title">
          <span className="basic">Basic</span> <span className="membership">Membership</span>
        </h3>
        <p className="card-description">Great for beginners, this plan includes access to essential gym facilities, cardio machines, and free weights.</p>
        <h2 className="card-price"><span className="price">$29</span> <span className="month">month</span></h2>
        <button className="get-started">GET STARTED</button>
      </div>

      {/* Card 2 - Center Card (Orange color) */}
      <div className="card center-card">
        <h3 className="card-title">
          <span className="basic">Pro</span> <span className="membership">Membership</span>
        </h3>
        <p className="card-description">Enjoy full access to gym facilities, join group classes, and receive customized workout plans to help you reach your goals.</p>
        <h2 className="card-price"><span className="price">$59</span> <span className="month">month</span></h2>
        <button className="get-started">GET STARTED</button>
      </div>

      {/* Card 3 */}
      <div className="card">
        <h3 className="card-title">
          <span className="basic">Elite</span> <span className="membership">Membership</span>
        </h3>
        <p className="card-description">Unlock all facilities, specialized programs, and priority access to exclusive classes for ultimate fitness results.</p>
        <h2 className="card-price"><span className="price">$99</span> <span className="month">month</span></h2>
        <button className="get-started">GET STARTED</button>
      </div>
    </div>
  </div>
</section>

{/* Our Trainers */}
<section className='our-trainers'>
  <div className='our-trainers'>
    <h2>Our Trainers</h2>
    <center>
      <p>Meet the skilled trainers at PowerGym who provide expert guidance and motivation. They’re dedicated to helping you reach your goals safely, with personalized support to keep you on track.</p>
    </center>

    {/* Card Section */}
    <div className="trainer-card-container">
      {/* Trainer 1 */}
      <div className="trainer-card">
        <div className="trainer-img" style={{ backgroundImage: `url(${Coach1})` }}></div>
        <h2>ALEX CARTER</h2>
        <p>Personal Trainer</p>
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
        <p>Personal  Trainer</p>
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
        <p>Personal  Trainer</p>
        <div className="social-icons">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={XIcon} alt="X" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Stay Connected */}
<section className="stay-connected">
  <div className="container">
    {/* Left Side: Text */}
    <div className="text-section">
      <h2>
        Stay Connected <span className="power">Power</span><span className="gym">Gym!</span>
      </h2>
      <p>
        Join PowerGym for fitness insights, exclusive offers, and the latest updates to stay inspired on your fitness journey.
      </p>
    </div>

    {/* Right Side: Email Subscription */}
    <div className="subscribe-section">
      <label htmlFor="email" className="email-label"></label>
      <input type="email" id="email" className="email-input" placeholder="Enter your email" />
      <button className="subscribe-button">Subscribe</button>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
