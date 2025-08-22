import React, { useEffect, useState } from 'react';

export default function CodingTestPage() {
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  useEffect(() => { const t = setInterval(()=> setTimeLeft(s=> s>0? s-1:0), 1000); return ()=> clearInterval(t); }, []);
  const format = s => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
  const submit = async () => {
    const payload = { applicantName: 'Student', answers: { q1: 'answer' } };
    const res = await fetch('http://localhost:4000/api/tests/submit', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
    const data = await res.json();
    alert('Score: ' + data.score + '%\nShortlisted for: ' + data.shortlistedJobs.map(j=>j.title).join(', '));
  };
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold">Coding Test</h3>
      <div className="mt-4 flex gap-6">
        <div className="flex-1 bg-white border p-4 rounded">
          <div className="font-semibold">Problem: Two Sum</div>
          <p className="text-gray-600 mt-2">Return indices of two numbers adding to target.</p>
          <textarea className="mt-4 w-full h-72 border p-3 rounded" placeholder="Write your code here..." />
        </div>
        <aside className="w-64 bg-white border p-4 rounded">
          <div className="font-semibold">Timer</div>
          <div className="text-3xl font-bold mt-2">{format(timeLeft)}</div>
          <div className="mt-6">
            <button className="w-full px-3 py-2 bg-blue-600 text-white rounded">Run</button>
            <button onClick={submit} className="w-full mt-3 px-3 py-2 bg-yellow-400 rounded text-gray-900">Submit</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
