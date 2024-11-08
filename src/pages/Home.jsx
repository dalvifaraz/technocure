// Home.js
import React from 'react';
import './Home.css';
import { Card } from '../components';

export const Home = () => {
  const cardData = [
    {
      title: 'Card Title 1',
      description: 'This is the description for card 1.',
      image:
        'data:image/png;base64,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',
    },
    {
      title: 'Card Title 2',
      description:
        'This is the description for card 2. This is the description for card 2. This is the description for card 2. This is the description for card 2.  This is the description for card 2. This is the description for card 2.  This is the description for card 2. This is the description for card 2.',
      image:
        'https://content.jdmagicbox.com/comp/thane/s4/022pxx22.xx22.130212151031.k8s4/catalogue/modern-technologies-thane-bvsjgch0l3.jpg',
    },
    {
      title: 'Card Title 3',
      description: 'This is the description for card 3.',
      image: 'image3.jpg',
    },
    {
      title: 'Card Title 4',
      description:
        'This is the description for card 4. This is the description for card 2. This is the description for card 2.',
      image: 'image4.jpg',
    },
    {
      title: 'Card Title 5',
      description: 'This is the description for card 5.',
      image: 'image5.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <div className='home-container'>
      <div className='home-featured-service-container'>
        <h1 className='home-featured-service-title'>Our Featured Services</h1>
        <p className='home-featured-service-description'>
          Technocure Computer Systems; is a team of highly skilled professionals
          having history of more then 15 years of experience in the field of
          electronics PCB’s component level repair and IT support services.
        </p>
        <div className='card-grid'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              onButtonClick={() => console.log('hello')}
            />
          ))}
        </div>
      </div>
      <div className="home-about-us-container">
      <div className="home-about-us-content">
        <h1 className="home-about-us-title">About Technocure</h1>
        <p className="home-about-us-description">
          Technocure Computer Systems is a team of highly skilled professionals with over 15 years of experience in electronics PCB repair and IT support. 
          We use state-of-the-art systems to diagnose and address issues, providing warranty options and replacements within a timely manner. 
          Our team is dedicated to delivering top-notch service to our customers.
        </p>
        <button className="home-about-us-button">Find out more</button>
      </div>
      <div className="home-about-us-image-container">
        <img src="path_to_image.jpg" alt="Technocure Team" className="home-about-us-image" />
      </div>
    </div>
    </div>
  );
};
