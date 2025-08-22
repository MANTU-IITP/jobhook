import React from 'react';
import { Link } from 'react-router-dom';

export default function EmployerDashboard({ user }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Hello, {user?.name}</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Post a Job</h4>
          <p className="text-sm text-gray-600 mt-2">Set minimum test score to auto‑shortlist candidates.</p>
          <Link to="/post-job" className="mt-4 inline-block px-3 py-2 bg-yellow-400 rounded text-gray-900">Post Job</Link>
        </div>
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Shortlisted Candidates</h4>
          <p className="text-sm text-gray-600 mt-2">After test submissions, shortlists will appear here.</p>
        </div>
      </div>
    </div>
  );
}
