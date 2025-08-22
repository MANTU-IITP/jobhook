import React from 'react';
import { Link } from 'react-router-dom';
import { getUser, clearUser } from '../utils/auth';

export default function Navbar({ onAuthChange }) {
  const user = getUser();
  const logout = () => { clearUser(); onAuthChange?.(null); };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-yellow-400 inline-block rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-900">J</div>
          <span className="font-bold text-xl text-gray-900">JobHook</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-700">
          <Link to="/jobs" className="hover:text-yellow-600">Find Jobs</Link>
          <Link to="/practice" className="hover:text-yellow-600">Practice</Link>
          <Link to="/post-job" className="hover:text-yellow-600">Post Job</Link>
        </nav>

        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link to="/login" className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">Login</Link>
              <Link to="/register" className="px-4 py-2 rounded bg-yellow-400 text-gray-900 hover:bg-yellow-300">Sign Up</Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">{user.name} ({user.role})</span>
              <Link to={user.role === 'applicant' ? '/applicant' : '/employer'} className="px-3 py-2 bg-yellow-400 rounded text-gray-900">Dashboard</Link>
              <button onClick={logout} className="px-3 py-2 bg-gray-100 rounded border border-gray-300">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
