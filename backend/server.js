const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Courses API
app.get('/api/courses', (req, res) => {
  const courses = [
    { id: 1, name: 'B.Tech Computer Science', duration: '4 years', level: 'Undergraduate' },
    { id: 2, name: 'MBA', duration: '2 years', level: 'Postgraduate' },
    { id: 3, name: 'BBA', duration: '3 years', level: 'Undergraduate' },
    { id: 4, name: 'M.Tech', duration: '2 years', level: 'Postgraduate' },
    { id: 5, name: 'LLB', duration: '3 years', level: 'Undergraduate' },
    { id: 6, name: 'B.Pharma', duration: '4 years', level: 'Undergraduate' }
  ];
  res.json({ success: true, data: courses });
});

// Fees API
app.get('/api/fees', (req, res) => {
  const fees = {
    university: 'Private University',
    academicYear: '2024-2025',
    fees: [
      {
        course: 'B.Tech',
        min: 120000,
        max: 350000,
        scholarships: {
          merit: 'Up to 100% tuition fee waiver',
          sports: 'Up to 50% tuition fee waiver'
        }
      },
      {
        course: 'MBA',
        min: 150000,
        max: 450000,
        scholarships: {
          merit: 'Up to 50% tuition fee waiver',
          sports: 'Up to 25% tuition fee waiver'
        }
      },
      {
        course: 'BBA',
        min: 80000,
        max: 200000,
        scholarships: {
          merit: 'Up to 75% tuition fee waiver',
          sports: 'Up to 40% tuition fee waiver'
        }
      }
    ]
  };
  res.json({ success: true, data: fees });
});

// Facilities API
app.get('/api/facilities', (req, res) => {
  const facilities = [
    { id: 1, name: 'Central Library', category: 'Academic', description: 'State-of-the-art library' },
    { id: 2, name: 'Sports Complex', category: 'Sports', description: 'World-class sports facilities' },
    { id: 3, name: 'Hostels', category: 'Accommodation', description: 'Comfortable hostel accommodation' },
    { id: 4, name: 'Research Labs', category: 'Academic', description: 'Advanced laboratories' },
    { id: 5, name: 'Medical Center', category: 'Healthcare', description: '24/7 medical facility' },
    { id: 6, name: 'Cafeteria', category: 'Dining', description: 'Multi-cuisine food options' }
  ];
  res.json({ success: true, data: facilities });
});

// Placement Stats API
app.get('/api/placement-stats', (req, res) => {
  const stats = {
    year: '2023-24',
    placementPercentage: 90,
    highestPackage: 5400000,
    averagePackage: 650000,
    studentsPlaced: 3150,
    topRecruiters: ['Microsoft', 'Google', 'Amazon', 'TCS', 'Infosys', 'Wipro']
  };
  res.json({ success: true, data: stats });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

