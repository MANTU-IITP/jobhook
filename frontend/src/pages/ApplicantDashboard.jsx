import React, { useState } from 'react';

export default function ApplicantDashboard({ user }) {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const upload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('resume', file);
    fd.append('applicantName', user?.name || 'Student');
    const res = await fetch('http://localhost:4000/api/upload', { method:'POST', body: fd });
    const data = await res.json();
    setMessage(data?.message || 'Uploaded');
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Welcome, {user?.name}</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Profile</h4>
          <p className="text-sm text-gray-600 mt-2">Upload resume & keep profile updated.</p>
          <input type="file" onChange={upload} className="mt-3" />
          {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
        </div>
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">My Scores</h4>
          <button onClick={async()=>{
            const res = await fetch('http://localhost:4000/api/tests/start', {method:'POST'});
            const data = await res.json();
            alert('Test started: ' + data.testId);
          }} className="mt-4 px-3 py-2 bg-blue-600 text-white rounded">Start Test</button>
        </div>
        <div className="bg-white p-4 rounded border">
          <h4 className="font-semibold">Job Matches</h4>
          <p className="text-sm text-gray-600 mt-2">Matches appear after you submit a test.</p>
        </div>
      </div>
    </div>
  );
}
