import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/jobs/${id}`).then(r=>r.json()).then(setJob).catch(()=>{});
  }, [id]);

  if (!job) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-bold">{job.title}</h3>
      <p className="text-gray-500">{job.company} • {job.location}</p>
      <div className="mt-6 bg-white border border-gray-200 p-4 rounded">
        <p className="text-gray-700">Required minimum test score: <span className="font-semibold text-yellow-600">{job.scoreReq}%</span></p>
        <p className="mt-4 text-gray-600">To apply, upload resume and take the platform's assessment.</p>
        <Link to="/test" className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded text-white">Take Test</Link>
      </div>
    </div>
  );
}
