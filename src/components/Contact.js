import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="p-12 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">📬 Contact Me</h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <a
          href="mailto:misbashaikh1107@gmail.com"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-50 transition w-full md:w-1/3"
        >
          <Mail className="w-8 h-8 text-indigo-600" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">misbashaikh1107@gmail.com</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/misba-shaikh-b45477257"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-50 transition w-full md:w-1/3"
        >
          <Linkedin className="w-8 h-8 text-blue-600" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">LinkedIn</h3>
            <p className="text-gray-600">linkedin.com/in/misba-shaikh</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/misbashaikh3099"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-indigo-50 transition w-full md:w-1/3"
        >
          <Github className="w-8 h-8 text-gray-800" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">GitHub</h3>
            <p className="text-gray-600">github.com/misbashaikh3099</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
