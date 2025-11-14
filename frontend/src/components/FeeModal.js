import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './FeeModal.css';

function FeeModal({ onClose }) {
  const [fees, setFees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await axios.get(`${config.API_URL}/fees`);
      setFees(response.data.data);
    } catch (error) {
      console.error('Error fetching fees:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Course-wise Fee Structure</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>

        <div className="modal-body">
          {loading && <p>Loading...</p>}

          {!loading && fees && (
            <div className="fees-container">
              <div className="fees-info">
                <p><strong>Academic Year:</strong> {fees.academicYear}</p>
              </div>

              <div className="fees-grid">
                {fees.fees.map((fee, index) => (
                  <div key={index} className="fee-card">
                    <h3>{fee.course}</h3>
                    <div className="fee-range">
                      <p className="amount">{formatCurrency(fee.min)} - {formatCurrency(fee.max)}</p>
                      <p className="label">Annual Fee Range</p>
                    </div>
                    <div className="scholarships">
                      <h4>Scholarships Available:</h4>
                      <ul>
                        <li><strong>Merit:</strong> {fee.scholarships.merit}</li>
                        <li><strong>Sports:</strong> {fee.scholarships.sports}</li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <p>Note: Fees mentioned are approximate and may vary. Contact admissions for exact details.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeeModal;

