import React from "react";
import { Instagram, Send, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Never Wants to Miss Any <span className="text-yellow-500">Job News?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input type="email" placeholder="Your@email.com" className="px-4 py-3 rounded-xl w-full md:w-1/3 border border-gray-300 focus:outline-none" />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition">Subscribe</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold text-yellow-500 mb-3">⚓ JobHook</h3>
          <p className="text-sm leading-relaxed text-gray-600">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition"><Send className="w-5 h-5"/></a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-yellow-500 hover:text-white transition"><Youtube className="w-5 h-5"/></a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-yellow-500 mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-600">Find Job</a></li>
            <li><a href="#" className="hover:text-yellow-600">Find Company</a></li>
            <li><a href="#" className="hover:text-yellow-600">Find Employee</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-yellow-500 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-600">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-600">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-yellow-500 mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-600">Help & Support</a></li>
            <li><a href="#" className="hover:text-yellow-600">Feedback</a></li>
            <li><a href="#" className="hover:text-yellow-600">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        Designed & Developed By <span className="text-yellow-500 font-semibold">Mantu Kumar</span>
      </div>
    </footer>
  );
}
