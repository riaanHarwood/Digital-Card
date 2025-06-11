import React from 'react';
import './card.css';
import './media-card.css';
import image from './profile-pic.png'; 

export const Example = () => {
  return (
    <div className="card">
      <img className="profile-img" src={image} alt="Profile" />
      <h2>John Smith</h2>
      <h4>Software Developer</h4>
      <p>Computer Science Graduate | React Enthusiast | Passionate about software development and artificial intelligence</p>
      <div className="buttons">
        <button onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIn</button>
        <button onClick={() => window.open('mailto:example@example.com')}>Email</button>
      </div>
    </div>
  );
};
