import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobCategories from './components/JobCategories';
import HowItWorksApplicants from './components/HowItWorksApplicants';
import HowItWorksEmployers from './components/HowItWorksEmployers';
import Footer from './components/Footer';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import PracticePage from './pages/PracticePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ApplicantDashboard from './pages/ApplicantDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import PostJobPage from './pages/PostJobPage';
import CodingTestPage from './pages/CodingTestPage';
import ProtectedRoute from './routes/ProtectedRoute';
import { getUser } from './utils/auth';

export default function App() {
  const [user, setUser] = useState(getUser());
  useEffect(() => setUser(getUser()), []);
  const onAuthChange = () => setUser(getUser());

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar onAuthChange={onAuthChange} />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <JobCategories />
              <HowItWorksApplicants />
              <HowItWorksEmployers />
            </>} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/login" element={<LoginPage onAuthChange={onAuthChange} />} />
            <Route path="/register" element={<RegisterPage onAuthChange={onAuthChange} />} />
            <Route path="/applicant" element={<ProtectedRoute role="applicant"><ApplicantDashboard user={user} /></ProtectedRoute>} />
            <Route path="/employer" element={<ProtectedRoute role="employer"><EmployerDashboard user={user} /></ProtectedRoute>} />
            <Route path="/post-job" element={<ProtectedRoute role="employer"><PostJobPage /></ProtectedRoute>} />
            <Route path="/test" element={<ProtectedRoute role="applicant"><CodingTestPage /></ProtectedRoute>} />
            <Route path="*" element={<div className="p-6">Page not found</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
