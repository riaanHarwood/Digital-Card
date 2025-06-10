import React from 'react';
import './card.css'; // Import your card-specific CSS
import './media-card.css'; // Import your media-card-specific CSS

function Card() {
  return (
    <div className="card-container">
      {/* Your HTML/JSX structure for the card will go here */}
      {/* Based on the Instagram link, you'll have an image, name, job title, social links, etc. */}
      <h1>Your Name</h1>
      <h2>Your Job Title</h2>
      <p>Some interesting facts about you.</p>
      <div className="social-links">
        {/* Add buttons or links for social media */}
      </div>
    </div>
  );
}

export default Card;