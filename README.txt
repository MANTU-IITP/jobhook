JobHook – Full‑Stack Starter (Frontend + Backend)
================================================


Quick start:
1) Backend
   cd backend
   npm install
   npm run dev
   -> runs at http://localhost:4000

2) Frontend
   cd ../frontend
   npm install
   npm run dev
   -> opens at http://localhost:5173

Core flows implemented:
- Applicant uploads resume:  POST /api/upload (multipart/form-data)
- Start a coding test:      POST /api/tests/start
- Submit a test:            POST /api/tests/submit (returns score + shortlisted jobs)
- Employer posts a job:     POST /api/jobs  (title, company, location, scoreReq, employerId)
- List jobs:                GET  /api/jobs
- Job details:              GET  /api/jobs/:id
- View shortlist:           GET  /api/shortlists/:jobId

