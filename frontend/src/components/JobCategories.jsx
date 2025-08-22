import React from "react";
import { Briefcase, Users, Megaphone, Code, Palette, DollarSign } from "lucide-react";

const companies = ["Pinterest","Slack","Spotify","Oracle","Walmart","Google","Amazon","Figma"];

const categories = [
  { icon: <DollarSign className="w-8 h-8 text-yellow-500" />, title: "Finance", desc: "Manage records & transactions", jobs: "800+ new job posted" },
  { icon: <Users className="w-8 h-8 text-yellow-500" />, title: "Human Resource", desc: "Recruit & support employees", jobs: "600+ new job posted" },
  { icon: <Megaphone className="w-8 h-8 text-yellow-500" />, title: "Digital Marketing", desc: "Promote brands online", jobs: "1k+ new job posted" },
  { icon: <Code className="w-8 h-8 text-yellow-500" />, title: "Web Developer", desc: "Build & maintain websites", jobs: "2k+ new job posted" },
  { icon: <Palette className="w-8 h-8 text-yellow-500" />, title: "Arts & Design", desc: "Create visual content", jobs: "500+ new job posted" },
];

export default function JobCategories() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted By <span className="text-yellow-500">1000+ Companies</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-600">
            {companies.map((c, i) => <span key={i} className="font-medium hover:text-yellow-600">{c}</span>)}
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Browse <span className="text-yellow-500">Job Category</span></h2>
          <p className="text-gray-500 mt-2">Explore opportunities tailored to your skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-yellow-500/30 shadow-sm hover:shadow-yellow-500/30 transition hover:scale-[1.02]">
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{cat.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{cat.desc}</p>
              <p className="text-yellow-600 font-medium">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
