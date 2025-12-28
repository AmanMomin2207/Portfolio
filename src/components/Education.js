import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Dr. J. J. Magdum College of Engineering, Jaysingpur",
    year: "2023 - 2026",
    result: "CGPA: 9.02",
  },
  {
    degree: "Diploma - Computer Science",
    institution: "Sharad Institute of Technology Polytechnic, Yadrav",
    year: "2020 - 2023",
    result: "Percentage: 75.66%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "The New High School, Ichalkaranji",
    year: "2020",
    result: "Percentage: 83.60%",
  },
];

function Education() {
  return (
    <section id="education" className="p-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-4">🎓Education</h2>
       <div className="max-w-4xl mx-auto space-y-8">
       {educationData.map((edu,index)=>(
        <div
        key={index}
         className="bg-white shadow-md rounded-2xl p-6 flex items-start gap-6 hover:shadow-xl transition-shadow"
         >
          <div className="bg-blue-100 p-3 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-6" />
            </div>
             <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
              <p className="text-sm font-medium text-gray-800">{edu.result}</p>
            </div>
          </div>
       ))}
       </div>
    </section>
  );
}

export default Education;

