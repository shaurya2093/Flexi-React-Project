import React from 'react';
import Card from 'react-bootstrap/Card';
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../Assests/1.jpeg';
import img2 from '../Assests/2.jpeg';
import img3 from '../Assests/3.jpeg';
import img4 from '../Assests/4.jpg';
import img5 from '../Assests/5.jpg';
import img6 from '../Assests/6.jpg';
import video from '../Assests/video.mp4'; // Add the path to your video file
import Footer from '../../Footer';

export default function Services() {
  const services = [
    {
      title: 'Package Tours',
      description: 'Explore our curated package tours to various destinations around the world. We provide hassle-free travel experiences with expert guides and comfortable accommodations.',
      imageUrl: img1
    },
    {
      title: 'Custom Travel Planning',
      description: 'Let us plan your trip according to your preferences and interests. Our team of travel experts will create a personalized itinerary tailored just for you.',
      imageUrl: img2
    },
    {
      title: 'Travel Insurance',
      description: 'Ensure a safe journey with our comprehensive travel insurance packages. We offer coverage for medical emergencies, trip cancellations, and more, giving you peace of mind during your travels.',
      imageUrl: img3
    },
    {
      title: 'Adventure Tours',
      description: 'Embark on thrilling adventures in breathtaking landscapes. Our experienced guides will lead you to the most exciting destinations.',
      imageUrl: img4
    },
    {
      title: 'Cultural Experiences',
      description: 'Immerse yourself in the rich cultures and traditions of diverse communities worldwide. Expand your horizons with unique cultural experiences.',
      imageUrl: img5
    },
    {
      title: 'Luxury Accommodations',
      description: 'Indulge in opulent accommodations and world-class amenities. Experience the pinnacle of comfort and luxury during your travels.',
      imageUrl: img6
    }
  ];

  return (
  
    <div className="container">
      <video src={video} autoPlay loop muted id="myVideo"  className="background-video" />

      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Services</h2>
        </div>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src={service.imageUrl} alt={service.title} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Footer/>
      
    </div>
   
  );
  
}