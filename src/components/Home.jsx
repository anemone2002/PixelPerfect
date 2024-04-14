import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/main.jpg'; // Path to your background image

function Home() {
  return (
    <section className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover our amazing services and take your business to the next level.</p>
        <Link to="/services" className="btn btn-primary">Learn More</Link>
      </div>
    </section>
  );
}

export default Home;