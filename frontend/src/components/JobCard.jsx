import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded border border-gray-200 flex justify-between items-center">
      <div>
        <div className="font-semibold text-gray-900">{job.title}</div>
        <div className="text-sm text-gray-500">{job.company} • {job.location}</div>
      </div>
      <div className="flex gap-3">
        <Link to={`/jobs/${job.id}`} className="px-4 py-2 bg-yellow-400 rounded text-gray-900">View</Link>
      </div>
    </div>
  );
}
