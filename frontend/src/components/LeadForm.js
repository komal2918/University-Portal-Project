import React, { useState } from 'react';
import axios from 'axios';
import './LeadForm.css';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry'
];

const COURSES = [
  'B.Tech Computer Science', 'B.Tech Mechanical', 'B.Tech Civil', 'B.Tech Electrical',
  'MBA', 'BBA', 'M.Tech', 'LLB', 'B.Pharma', 'B.Des', 'B.Sc Agriculture'
];

const INTAKE_YEARS = ['2024', '2025', '2026'];

function LeadForm({ universityName }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    courseInterested: '',
    intakeYear: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.state) {
      newErrors.state = 'Please select a state';
    }

    if (!formData.courseInterested) {
      newErrors.courseInterested = 'Please select a course';
    }

    if (!formData.intakeYear) {
      newErrors.intakeYear = 'Please select an intake year';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      setMessage({ type: 'error', text: 'Please fix the errors above' });
      return;
    }

    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const PIPEDREAM_URL = 'https://eoxk7xj50i7b48n.m.pipedream.net'; // Replace with actual URL
      await axios.post(PIPEDREAM_URL, {
        ...formData,
        university: universityName,
        timestamp: new Date().toISOString()
      });

      setMessage({ 
        type: 'success', 
        text: 'Thank you! Your application has been submitted successfully.' 
      });
      
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        state: '',
        courseInterested: '',
        intakeYear: '',
        consent: false
      });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'Something went wrong. Please try again later.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="lead-form">
      <h2>Apply Now</h2>
      <p>Fill out the form below and we will get back to you soon!</p>

      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            maxLength="10"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>State *</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={errors.state ? 'error' : ''}
          >
            <option value="">Select your state</option>
            {INDIAN_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {errors.state && <span className="error-text">{errors.state}</span>}
        </div>

        <div className="form-group">
          <label>Course Interested *</label>
          <select
            name="courseInterested"
            value={formData.courseInterested}
            onChange={handleChange}
            className={errors.courseInterested ? 'error' : ''}
          >
            <option value="">Select a course</option>
            {COURSES.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {errors.courseInterested && <span className="error-text">{errors.courseInterested}</span>}
        </div>

        <div className="form-group">
          <label>Intake Year *</label>
          <select
            name="intakeYear"
            value={formData.intakeYear}
            onChange={handleChange}
            className={errors.intakeYear ? 'error' : ''}
          >
            <option value="">Select intake year</option>
            {INTAKE_YEARS.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          {errors.intakeYear && <span className="error-text">{errors.intakeYear}</span>}
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <span>I agree to receive information from {universityName} *</span>
          </label>
          {errors.consent && <span className="error-text">{errors.consent}</span>}
        </div>

        <button type="submit" disabled={submitting} className="submit-btn">
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}

export default LeadForm;

