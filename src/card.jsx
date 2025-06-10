import React from 'react';
import './card.css'; // Import your card-specific CSS
import './media-card.css'; // Import your media-card-specific CSS


function Card() {
  return (
    <div className="card">
      <h1>John Doe</h1>
      <h2>Software Developer</h2>
      <p>Full stack engineer with over 5 years of experience</p>
    </div>
  );
}

export default Card;