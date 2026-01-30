import React from "react";
import { Star, Trophy, Medal } from "lucide-react";

const achievementsData = [
  {
    title: "Java (Golden) Certificate from NPTEL",
    link: "https://drive.google.com/file/d/1NV1BB4xleQzqY5tqf5EUFjy8ynpQRp4v/view",
    icon: <Medal className="w-6 h-6" />,
  },
  {
    title: "1st Place – National Level Event – FusionEra-2k24",
    link: "https://drive.google.com/file/d/1Hku-zknYC5bIdoPcgUuNXS_Atfwe0yT3/view",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "1st Place – National Level Event – Tech-Trend2k24",
    link: "https://drive.google.com/file/d/1uMJs9XjEtOyYYhN8LBtyLj6FKK78Ne_Y/view",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "2nd Place – National Level Event – Code Crusade - 2k24",
    link: "https://drive.google.com/file/d/1Q9Gl2CfQAziRrzz88oJ7D_Ltum5wh9jp/view?usp=sharing",
    icon: <Medal className="w-6 h-6" />,
  },
  {
    title: "2nd Place – National Level Event – Quiz Competition",
    link: "https://drive.google.com/file/d/1WqI64DBxN2ahaec2pRjnbFDe95yo43Ai/view?usp=sharing",
    icon: <Medal className="w-6 h-6" />,
  },
  

];

const leadershipData = [
  {
    title: "GDG Organizer – Google Developer Group (GDG) | JJMCOE",
    description: [
      "As a GDG Lead at JJMCOE, I organized developer-focused events, workshops, and hackathons, fostering a strong local tech community.",
      "I collaborated with Google Developers and mentored peers in areas like web development, cloud, and AI."
    ],
    tenure: "Sep 2024 – June 2025",
    icon: <Star className="w-6 h-6" />,
  },
  {
    title: "E-CELL Technical CO-ORDINATOR",
    //link: "https://drive.google.com/file/d/1TBM2kFo3GRuQ2HjFb7OC4V6SeWMnY8p6/view",
    description: [
      "As the Technical Co-ordinator of the E-Cell at JJMCOE, I was responsible for developing and managing tech infrastructure for events, hackathons, and startup workshops.",
      "I supported innovation by integrating technology into entrepreneurial initiatives.",
    ],
    icon: <Star className="w-6 h-6" />,
  }
];

function Achievement() {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">🏆 Achievements & Leadership</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-purple-500 pb-2 inline-block">
            Achievements
          </h3>
          <ul className="space-y-5">
            {achievementsData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
              >
                <div className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm mt-1 inline-block"
                    >
                      View Document
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-purple-500 pb-2 inline-block">
            Leadership
          </h3>
          <ul className="space-y-5">
            {leadershipData.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
              >
                <div className="bg-purple-500 text-white p-3 rounded-full flex items-center justify-center mt-1">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-sm mt-1 inline-block"
                    >
                      View Document
                    </a>
                  )}
                  {item.description && (
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  )}
                  {item.tenure && (
                    <p className="text-sm font-medium text-gray-500 mt-2">{item.tenure}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
