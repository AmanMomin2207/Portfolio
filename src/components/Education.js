import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Dr. J. J. Magdum College of Engineering, Jaysingpur",
    year: "2022 - 2026",
    result: "CGPA: 9.00",
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Kisanveer Mahavidyalaya, Wai",
    year: "2020 - 2022",
    result: "Percentage: 63.33%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Dravid High School, Wai",
    year: "2020",
    result: "Percentage: 94.60%",
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

