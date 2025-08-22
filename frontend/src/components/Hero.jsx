import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Find your <span className="text-yellow-500">dream job</span> with us
          </h1>
          <p className="mt-4 text-gray-600">Upload resume, take verified coding tests, and get auto‑shortlisted — companies only perform final interviews.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/login" className="px-5 py-3 rounded bg-yellow-400 text-gray-900 font-semibold">Upload Resume</Link>
            <Link to="/practice" className="px-5 py-3 rounded border border-gray-300">Try Practice</Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[380px] h-[300px] bg-gradient-to-tr from-yellow-400 to-yellow-200 rounded-xl shadow-2xl flex items-center justify-center text-gray-900 font-bold">Illustration</div>
        </div>
      </div>
    </section>
  );
}
