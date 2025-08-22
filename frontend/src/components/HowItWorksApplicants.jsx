import React from "react";
import { FileText, Code, Award } from "lucide-react";

export default function HowItWorksApplicants() {
  const steps = [
    { icon: <FileText className="w-8 h-8 text-white" />, title: "Upload Resume", desc: "Submit your resume to get started." },
    { icon: <Code className="w-8 h-8 text-white" />, title: "Take Coding Test", desc: "Attempt coding & aptitude rounds." },
    { icon: <Award className="w-8 h-8 text-white" />, title: "Get Job Score", desc: "Get matched with jobs by score." },
  ];
  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex justify-center">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/student-using-laptop-5691211-4750853.png" alt="Applicant Journey" className="w-[300px] md:w-[380px]" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">For <span className="text-yellow-500">Applicants</span></h2>
          <p className="text-gray-600 mb-8">Showcase your talent and get auto‑shortlisted through coding tests.</p>
          <div className="space-y-6">
            {steps.map((s,i)=> (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-yellow-500 p-3 rounded-full">{s.icon}</div>
                <div><h3 className="text-lg font-semibold">{s.title}</h3><p className="text-gray-600">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
