import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institute: "Indira College of Engineering and Management, Pune",
      board: "Savitribai Phule Pune University",
      period: "2020 – 2024",
      score: "GPA: 8.43 / 10",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science (PCM)",
      institute: "Sadguru Gadage Maharaj College Karad",
      board: "Maharashtra State Board",
      period: "2020",
      score: "72.15%",
      icon: <FaSchool />,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Yashwant High School Karad",
      board: "Maharashtra State Board",
      period: "2018",
      score: "92.4%",
      icon: <FaSchool />,
    },
  ];

  return (
    <section
      id="education"
      className="bg-white text-black dark:bg-black dark:text-white py-24 md:py-28 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-500">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-800 p-6 rounded-xl transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-500 text-2xl mt-1">
                  {edu.icon}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {edu.institute}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.board}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {edu.period}
                  </p>

                  <p className="text-sm text-blue-500 mt-2">
                    {edu.score}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Education;