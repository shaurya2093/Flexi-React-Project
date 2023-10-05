// Importing React library for creating React components
import React from 'react';

// Importing the CSS file for styling
import '../../../App.css';

// Importing child components
import Cards from '../../Cards';          // Importing the Cards component
import HeroSection from '../../HeroSection';  // Importing the HeroSection component
import Footer from '../../Footer';        // Importing the Footer component

// Functional component for the Home page
function Home() {
  // Rendering the Home page components
  return (
    <>
      <HeroSection />   {/* Rendering the HeroSection component */}
      <Cards />         {/* Rendering the Cards component */}
      <Footer />        {/* Rendering the Footer component */}
    </>
  );
}

// Exporting the Home component as the default export for this file
export default Home;
