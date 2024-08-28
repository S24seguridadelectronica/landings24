// App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ImageSection from './components/ImageSection';
import TerceraSeccion from './components/TerceraSeccion';

function App() {
  const imageUrls = [
    `${process.env.PUBLIC_URL}/logo192.png`,
    `${process.env.PUBLIC_URL}/example-image.png`
  ];

  const altTexts = ['First image', 'Second image'];

  return (
    <div>
      <HeroSection
        title="Welcome to Our Amazing Service"
        subtitle="We provide the best solutions for you"
        imageUrl={`${process.env.PUBLIC_URL}/logo192.png`}
        buttonText="Contact Us!"
        onButtonClick={() => alert('Button clicked!')}
      />
      <ImageSection
        imageUrls={imageUrls}
        altTexts={altTexts}
      />
      <TerceraSeccion
        heading="Explore More"
        description="Discover more about our services"
        imageUrl={`${process.env.PUBLIC_URL}/tercera-image.png`}
      />
    </div>
  );
}

export default App;
