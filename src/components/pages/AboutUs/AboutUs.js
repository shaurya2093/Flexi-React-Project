import React from 'react';
import { Button } from '../../Button';
import './AboutUs.css';
// Import the image
import teamImage from '../Assests/team-image.jpg';


function AboutUs() {
    return (
        <div className='about-us-container'>
          <h2 className="display-4">About Us</h2>
          <img src={teamImage} alt="Team" className="team-image" />
          <p className="lead">
            We are a team of passionate adventurers dedicated to bringing you the
            best experiences the world has to offer. With a blend of creativity and
            expertise, we curate thrilling journeys that leave you yearning for more.
          </p>
      <p>
        Our mission is simple: to inspire and enable you to embark on your own
        unforgettable adventures. Whether you're seeking adrenaline-pumping
        activities or tranquil getaways, we've got it all covered.
      </p>
      <p>
        In addition to our curated experiences, we also provide expert guides,
        top-notch equipment, and safety measures to ensure that every adventure
        with us is not only exciting but also secure.
      </p>
      <p>
        We believe that the best way to explore the world is by immersing
        yourself in its culture. That's why we collaborate with local communities
        to create authentic and meaningful experiences for our travelers.
      </p>
      <div className='about-us-btn'>
        <Button
          buttonStyle='btn btn-outline-primary'
          onClick={() => console.log('Contact Us button clicked')}
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default AboutUs;
