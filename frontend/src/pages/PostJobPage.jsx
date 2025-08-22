import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PostJobPage() {
  const nav = useNavigate();
  const handle = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {
      title: form.get('title'),
      company: form.get('company'),
      location: form.get('location'),
      scoreReq: Number(form.get('scoreReq')) || 60,
      employerId: 'emp-1'
    };
    await fetch('http://localhost:4000/api/jobs',{method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body)});
    alert('Job posted');
    nav('/employer');
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold">Post a Job</h3>
      <form onSubmit={handle} className="mt-4 space-y-4 bg-white border p-6 rounded">
        <input name="title" className="w-full p-2 border rounded" placeholder="Job title" required />
        <input name="company" className="w-full p-2 border rounded" placeholder="Company" required />
        <input name="location" className="w-full p-2 border rounded" placeholder="Location" required />
        <input name="scoreReq" type="number" className="w-full p-2 border rounded" placeholder="Minimum required score (%)" defaultValue="65" />
        <button className="px-4 py-2 bg-yellow-400 rounded text-gray-900">Post Job</button>
      </form>
    </div>
  );
}
