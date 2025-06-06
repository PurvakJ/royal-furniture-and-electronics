import React from 'react';
import './About.css';
import aboutImage from '../assets/tv.jpg';
import showroomImage from '../assets/interior.jpg';
import showroomImage1 from '../assets/interior.avif';
import deliveryImage from '../assets/washing-machine.avif';
import services from '../assets/services.png';
import { div } from 'framer-motion/client';

const About = () => {
  return (
    <div>
      <section className="about-hero" style={{ backgroundImage: `url(${showroomImage1})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Royal Furniture & Electronics</h1>
          <p>Your trusted destination for quality furniture and electronics since 2008</p>
        </div>
      </section>
    <div className="about-page">

      <section className="about-content">
        <div className="about-image">
          <img src={showroomImage} alt="Our Showroom" />
        </div>
        <div className="about-text">
          <h2>Our Journey</h2>
          <p>
            Founded in 2024 by Mr. Rajnish Mittal, Royal Furniture & Electronics began as a modest 5000 sq.ft. store 
            in Maur. Today, we operate from a 10,000 sq.ft. flagship showroom and serve customers across North India 
            through our e-commerce platform. Our growth has been fueled by our commitment to quality and customer 
            satisfaction.
          </p>
          
          <h2>What We Offer</h2>
          <p>
            We specialize in premium home furniture, office furnishings, and the latest electronic appliances. 
            Our carefully curated collection includes:
          </p>
          <ul>
            <li>Living room sets (sofas, coffee tables, entertainment units)</li>
            <li>Bedroom furniture (beds, wardrobes, dressing tables)</li>
            <li>Home office solutions (desks, chairs, storage units)</li>
            <li>Kitchen appliances (refrigerators, microwaves, chimneys)</li>
            <li>Entertainment systems (TVs, home theaters, sound systems)</li>
            <li>Home comfort appliances (ACs, washing machines, water purifiers)</li>
          </ul>
        </div>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Quality Assurance</h3>
            <p>
              Every product in our showroom undergoes rigorous quality checks. We partner only with certified 
              manufacturers who meet our high standards.
            </p>
          </div>
          <div className="value-card">
            <h3>Customer First</h3>
            <p>
              Our dedicated support team ensures a seamless shopping experience, from product selection to 
              after-sales service.
            </p>
          </div>
          <div className="value-card">
            <h3>Transparent Pricing</h3>
            <p>
              No hidden costs. We offer competitive prices with clear breakdowns and honest recommendations 
              based on your budget.
            </p>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-text">
          <h2>Our Services</h2>
          <p>
            We go beyond just selling products. Our comprehensive services include:
          </p>
          <ul>
            <li><strong>Free Interior Consultation:</strong> Our design experts help you create cohesive home spaces</li>
            <li><strong>Home Delivery:</strong> Safe and timely delivery across the city</li>
            <li><strong>Professional Installation:</strong> Skilled technicians for furniture assembly and appliance setup</li>
            <li><strong>Extended Warranties:</strong> Optional extended protection plans for major purchases</li>
            <li><strong>Easy Financing:</strong> EMI options available for all products</li>
          </ul>
        </div>
        <div className="service-image">
          <img src={services} alt="Our Delivery Service" />
        </div>
      </section>

      <section className="milestones">
        <h2>Our Milestones</h2>
        <div className="milestone-container">
          <div className="milestone">
            <h3>15,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="milestone">
            <h3>50+</h3>
            <p>Brand Partnerships</p>
          </div>
          <div className="milestone">
            <h3>100+</h3>
            <p>Cities Served</p>
          </div>
          <div className="milestone">
            <h3>24/7</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;