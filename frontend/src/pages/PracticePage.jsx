import React from 'react';
export default function PracticePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Practice Problems</h2>
      <p className="mt-4 text-gray-600">Prepare for tests with sample questions.</p>
      <ul className="mt-6 space-y-3">
        <li className="bg-white border p-3 rounded">Two Sum (easy)</li>
        <li className="bg-white border p-3 rounded">Binary Search (medium)</li>
        <li className="bg-white border p-3 rounded">Design a REST API (system design)</li>
      </ul>
    </div>
  );
}
