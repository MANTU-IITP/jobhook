import React from "react";
import { Briefcase, Users, CheckCircle } from "lucide-react";

export default function HowItWorksEmployers() {
  const steps = [
    { icon: <Briefcase className="w-8 h-8 text-white" />, title: "Post a Job", desc: "Create job with required skills & min score." },
    { icon: <Users className="w-8 h-8 text-white" />, title: "Review Applicants", desc: "See resumes with verified test scores." },
    { icon: <CheckCircle className="w-8 h-8 text-white" />, title: "Hire the Best", desc: "Interview only the top performers." },
  ];
  return (
    <section className="bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        <div className="flex-1 flex justify-center">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/recruiter-searching-candidate-5691220-4750862.png" alt="Employer Journey" className="w-[300px] md:w-[380px]" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">For <span className="text-yellow-500">Employers</span></h2>
          <p className="text-gray-600 mb-8">Simplify hiring by focusing on pre‑screened talent.</p>
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
