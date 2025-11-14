import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <h1>University Admissions Portal</h1>
        <p>Choose a university to explore programs and apply</p>
        
        <div className="university-cards">
          <Link to="/lpu" className="university-card lpu-card">
            <div className="card-logo">L</div>
            <h2>Lovely Professional University</h2>
            <p>One of Indias largest universities with 30,000+ students</p>
            <div className="card-stats">
              <span>200+ Programs</span>
              <span>•</span>
              <span>90% Placement</span>
            </div>
          </Link>

          <Link to="/amity" className="university-card amity-card">
            <div className="card-logo">A</div>
            <h2>Amity University</h2>
            <p>Premier private university with global partnerships</p>
            <div className="card-stats">
              <span>150+ Programs</span>
              <span>•</span>
              <span>85% Placement</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

