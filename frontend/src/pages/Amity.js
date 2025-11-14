import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import LeadForm from '../components/LeadForm';
import FeeModal from '../components/FeeModal';
import './University.css';

function Amity() {
  const [courses, setCourses] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [placements, setPlacements] = useState(null);
  const [showFeeModal, setShowFeeModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [coursesRes, facilitiesRes, placementsRes] = await Promise.all([
        axios.get(`${config.API_URL}/courses`),
        axios.get(`${config.API_URL}/facilities`),
        axios.get(`${config.API_URL}/placement-stats`)
      ]);
      setCourses(coursesRes.data.data);
      setFacilities(facilitiesRes.data.data);
      setPlacements(placementsRes.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="university-page amity">
      {/* Hero Section */}
      <section className="hero purple">
        <div className="container">
          <h1>Amity University</h1>
          <p>Premier Private University with Global Partnerships & World-Class Research Facilities</p>
          <div className="hero-buttons">
            <button onClick={() => setShowFeeModal(true)} className="btn btn-white">
              Check Course-wise Fees
            </button>
            <button className="btn btn-outline">Download Brochure</button>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>25,000+</h3>
              <p>Students</p>
            </div>
            <div className="stat-box">
              <h3>150+</h3>
              <p>Programs</p>
            </div>
            <div className="stat-box">
              <h3>85%</h3>
              <p>Placement</p>
            </div>
            <div className="stat-box">
              <h3>200+</h3>
              <p>Global Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Amity University</h2>
          <p>
            Amity University is one of Indias leading private universities, known for its commitment to academic excellence,
            cutting-edge research, and strong industry connections. With campuses across India and international presence,
            Amity offers a truly global educational experience.
          </p>
          <p>
            The university offers over 150 programs across diverse disciplines including Engineering, Management, Law,
            Biotechnology, Design, Journalism, and more.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2>Popular Courses</h2>
          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <h3>{course.name}</h3>
                <p>{course.duration} • {course.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities">
        <div className="container">
          <h2>World-Class Facilities</h2>
          <div className="facilities-grid">
            {facilities.map(facility => (
              <div key={facility.id} className="facility-card">
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      {placements && (
        <section className="placements purple">
          <div className="container">
            <h2>Placement Highlights {placements.year}</h2>
            <div className="placement-stats">
              <div className="placement-stat">
                <h3>{placements.placementPercentage}%</h3>
                <p>Placement Rate</p>
              </div>
              <div className="placement-stat">
                <h3>₹{(placements.highestPackage / 100000).toFixed(1)}L</h3>
                <p>Highest Package</p>
              </div>
              <div className="placement-stat">
                <h3>₹{(placements.averagePackage / 100000).toFixed(1)}L</h3>
                <p>Average Package</p>
              </div>
              <div className="placement-stat">
                <h3>{placements.studentsPlaced}+</h3>
                <p>Students Placed</p>
              </div>
            </div>
            <div className="top-recruiters">
              <h3>Top Recruiters</h3>
              <div className="recruiters-list">
                {placements.topRecruiters.map((recruiter, idx) => (
                  <span key={idx} className="recruiter-tag">{recruiter}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lead Form Section */}
      <section className="apply-section">
        <div className="container">
          <LeadForm universityName="Amity University" />
        </div>
      </section>

      {/* Fee Modal */}
      {showFeeModal && <FeeModal onClose={() => setShowFeeModal(false)} />}
    </div>
  );
}

export default Amity;

