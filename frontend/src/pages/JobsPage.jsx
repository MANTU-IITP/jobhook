import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/api/jobs').then(r=>r.json()).then(setJobs).catch(()=>{});
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
      <div className="grid gap-4">
        {jobs.map(j => <JobCard job={j} key={j.id} />)}
      </div>
    </div>
  );
}
