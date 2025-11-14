# University Portal

Landing pages for universities with lead forms and APIs.

## Stack

- Frontend: React + JavaScript + CSS
- Backend: Express.js (Node.js)
- No TypeScript, No Tailwind - Just basics

## Project Structure

```
UniversityPortal/
├── frontend/     # React app
└── backend/      # Express API server
```

## Setup

### Backend

```bash
cd backend
npm install
npm start
```

Server runs on http://localhost:5000

### Frontend

```bash
cd frontend
npm install
npm start
```

App runs on http://localhost:3000

## Pages

- `/` - Home page
- `/lpu` - LPU landing page
- `/amity` - Amity landing page

## APIs

Backend provides:
- `GET /api/courses` - List of courses
- `GET /api/fees` - Fee structure (nested JSON)
- `GET /api/facilities` - Campus facilities
- `GET /api/placement-stats` - Placement data

## Features

- Lead form with validation
- Form posts to Pipedream webhook
- Fee modal popup
- Responsive design
- No page refresh on form submit

## Pipedream Setup

Update Pipedream URL in `frontend/src/components/LeadForm.js` line 93.

## Notes

- Run backend first, then frontend
- Backend runs on port 5000, frontend on port 3000
- CORS enabled for local development

Built for internship assessment in ~10 hours.

