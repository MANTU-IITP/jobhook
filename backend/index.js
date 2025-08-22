import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// storage for resumes
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

const DATA_DIR = path.join(__dirname, 'data');

// helper to read/write JSON
const readJSON = (p) => JSON.parse(fs.readFileSync(path.join(DATA_DIR, p), 'utf-8'));
const writeJSON = (p, data) => fs.writeFileSync(path.join(DATA_DIR, p), JSON.stringify(data, null, 2));

// ---- Jobs ----
app.get('/api/jobs', (req, res) => {
  res.json(readJSON('jobs.json'));
});

app.get('/api/jobs/:id', (req, res) => {
  const jobs = readJSON('jobs.json');
  const job = jobs.find(j => String(j.id) === String(req.params.id));
  if (!job) return res.status(404).json({ error: 'Not found' });
  res.json(job);
});

app.post('/api/jobs', (req, res) => {
  const jobs = readJSON('jobs.json');
  const job = { ...req.body, id: jobs.length ? (jobs[jobs.length-1].id + 1) : 1 };
  jobs.push(job);
  writeJSON('jobs.json', jobs);
  res.json(job);
});

// ---- Resume Upload ----
app.post('/api/upload', upload.single('resume'), (req, res) => {
  res.json({ message: 'Resume uploaded', file: req.file?.filename || null });
});

// ---- Tests ----
app.post('/api/tests/start', (req, res) => {
  res.json({ testId: uuidv4(), questions: [{ id: 'q1', prompt: 'Two Sum' }] });
});

app.post('/api/tests/submit', (req, res) => {
  const { applicantName = 'Student' } = req.body;
  // naive scoring
  const score = Math.floor(Math.random() * 41) + 60; // 60-100

  const scores = readJSON('scores.json');
  scores.push({ id: uuidv4(), applicantName, score, submittedAt: Date.now() });
  writeJSON('scores.json', scores);

  // shortlist based on jobs' scoreReq
  const jobs = readJSON('jobs.json');
  const shortlisted = jobs.filter(j => score >= (j.scoreReq || 0));

  // store shortlists (append applicant to each job)
  const shortlists = readJSON('shortlists.json');
  shortlisted.forEach(job => {
    const key = String(job.id);
    shortlists[key] = shortlists[key] || [];
    shortlists[key].push({ applicantName, score, when: Date.now() });
  });
  writeJSON('shortlists.json', shortlists);

  res.json({ score, shortlistedJobs: shortlisted });
});

// employer can view a job's shortlist
app.get('/api/shortlists/:jobId', (req, res) => {
  const shortlists = readJSON('shortlists.json');
  res.json(shortlists[String(req.params.jobId)] || []);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Backend running on port', PORT));
