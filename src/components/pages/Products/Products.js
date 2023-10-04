import React from 'react';
import './Products.css';
import video from '../Assests/videoproduct.mp4';
import Footer from '../../Footer';
import i1 from '../Assests/product1.jpg';
import i2 from '../Assests/product2.jpg'; // Add the path to your second product image
import i3 from '../Assests/product3.jpg'; // Add the path to your third product image

export default function Products() {
  const products = [
    { name: 'Beach Vacation Package', description: 'Immerse yourself in the tranquility of the world\'s most beautiful beaches carefully chosen for their pristine sands and picturesque surroundings.', price: '$800 - $1200', imageUrl: i1 },
    { name: 'Adventure Tour', description: 'Embark on an adrenaline-pumping journey through untamed wilderness and breathtaking landscapes.', price: '$1000 - $1500', imageUrl: i2 },
    { name: 'Cultural Exploration', description: 'Immerse yourself in diverse cultures, visit historical landmarks, and experience local traditions.', price: '$700 - $1000', imageUrl: i3 }
  ];

  return (
    <div className="container">
      <video src={video} autoPlay loop muted id="myVideo" className="background-video" />
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Products</h2>
        </div>
      </div>
      <div className="row" id="products-container">
        {products.map((product, index) => (
          <div key={index} className="col-lg-4 col-md-6 product-item mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}</strong></p>
                <a href="/" className="btn btn-primary">Try Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}