import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../utils/auth';

export default function LoginPage({ onAuthChange }) {
  const [role, setRole] = useState('applicant');
  const [name, setName] = useState('');
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    // simple pass-through "login"
    setUser({ role, name: name || (role==='applicant' ? 'Student' : 'Employer') });
    onAuthChange?.();
    nav(role==='applicant' ? '/applicant' : '/employer');
  };
  return (
    <div className="max-w-md mx-auto p-6 mt-12 bg-white rounded border">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full p-2 border rounded">
          <option value="applicant">Applicant / Student</option>
          <option value="employer">Employer / Recruiter</option>
        </select>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" />
        <button className="w-full py-2 bg-yellow-400 text-gray-900 rounded">Login</button>
      </form>
    </div>
  );
}
