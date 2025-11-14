// API Configuration
const config = {
  API_URL: process.env.REACT_APP_API_URL || 
           (process.env.NODE_ENV === 'production' 
             ? 'https://university-portal-api.onrender.com/api'  // Replace with your Render URL
             : 'http://localhost:5000/api')
};

export default config;

