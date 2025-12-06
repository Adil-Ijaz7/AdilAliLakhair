import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiMysql,
  SiAmazon,
  SiLinux,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiNextdotjs,
  SiCplusplus,
  SiHuggingface,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiGithub,
  SiGit,
  SiBootstrap,
  SiMarkdown,
  SiGooglecolab,
  SiHeroku,
  SiWordpress,
  SiShopify
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";

export default function Skills() {
  const [expandedExp, setExpandedExp] = useState({});

  const toggleExpanded = (id) => {
    setExpandedExp(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const [skills] = useState([
    { id: 1, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "Java", icon: <FaJava size={50} /> },
    { id: 3, name: "C++", icon: <SiCplusplus size={50} /> },
    { id: 4, name: "JavaScript", icon: <SiJavascript size={50} /> },
    { id: 5, name: "React", icon: <SiReact size={50} /> },
    { id: 6, name: "Next.js", icon: <SiNextdotjs size={50} /> },
    { id: 7, name: "Node.js", icon: <SiNodedotjs size={50} /> },
    { id: 8, name: "HTML", icon: <SiHtml5 size={50} /> },
    { id: 9, name: "CSS", icon: <SiCss3 size={50} /> },
    { id: 10, name: "Bootstrap", icon: <SiBootstrap size={50} /> },
    { id: 11, name: "Docker", icon: <SiDocker size={50} /> },
    { id: 12, name: "AWS", icon: <SiAmazon size={50} /> },
    { id: 13, name: "PyTorch", icon: <SiPytorch size={50} /> },
    { id: 14, name: "TensorFlow", icon: <SiTensorflow size={50} /> },
    { id: 15, name: "Pandas", icon: <SiPandas size={50} /> },
    { id: 16, name: "Scikit-learn", icon: <SiScikitlearn size={50} /> },
    { id: 17, name: "Keras", icon: <SiKeras size={50} /> },
    { id: 18, name: "Numpy", icon: <SiNumpy size={50} /> },
    { id: 19, name: "Git", icon: <SiGit size={50} /> },
    { id: 20, name: "GitHub", icon: <SiGithub size={50} /> },
    { id: 21, name: "MySQL", icon: <SiMysql size={50} /> },
    { id: 22, name: "MongoDB", icon: <SiMongodb size={50} /> },
    { id: 23, name: "Linux", icon: <SiLinux size={50} /> },
    { id: 24, name: "FastAPI", icon: <SiFastapi size={50} /> },
    { id: 25, name: "Hugging Face", icon: <SiHuggingface size={50} /> },
    { id: 26, name: "Markdown", icon: <SiMarkdown size={50} /> },
    { id: 27, name: "WordPress", icon: <SiWordpress size={50} /> },
    { id: 28, name: "Shopify", icon: <SiShopify size={50} /> },
    { id: 29, name: "Google Colab", icon: <SiGooglecolab size={50} /> },
    { id: 30, name: "Heroku", icon: <SiHeroku size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Fiverr (Freelance)",
      role: "Full-Stack Developer",
      period: "Sep 2019 - Present",
      description: [
        "Built and maintained full-stack web applications using HTML, CSS, JavaScript, React, Node.js, PHP, and MySQL.",
        "Designed and developed both front-end and back-end interfaces, ensuring seamless integration and responsiveness.",
        "Customized WordPress themes and plugins to deliver client-specific solutions.",
        "Utilized frameworks like Express.js, Bootstrap, and Flutter to enhance UI/UX and performance.",
        "Deployed websites and applications on hosting platforms with domain, SSL, and database configuration.",
        "Communicated directly with clients to gather requirements, propose solutions, and deliver high-quality projects on time.",
        "Maintained code quality through version control (Git), testing, and performance optimization.",
        "Collaborated with cross-functional teams to ensure seamless integration of design and functionality.",
        "Implemented innovative solutions to enhance user experience and optimize performance.",
        "Successfully delivered projects on time and within budget, exceeding client expectations."
      ],
      logo: "🌐",
    },
    {
      id: 2,
      company: "Win Academy Dadu",
      role: "Instructor",
      period: "Jul 2025 - Present",
      description: [
        "Instructing students in Java, C++, Python, Web Development, and WordPress with a focus on practical, hands-on learning.",
        "Designed and implemented structured course modules aligned with industry standards.",
        "Guided students through real-world coding projects, portfolio building, and deployment practices.",
        "Assisted learners in understanding complex programming concepts through simplified explanations and interactive sessions.",
        "Provided mentorship for academic and career development in software and web technologies."
      ],
      logo: "🌐",
    },
    {
      id: 3,
      company: "Elevvo Pathways",
      role: "Natural Language Processing Intern",
      period: "Aug 2025 - Sep 2025",
      description: [
        "Collaborated on Natural Language Processing (NLP) projects.",
        "Applied programming expertise to solve complex language-based challenges."
      ],
      logo: "🌐",
    },
    {
      id: 4,
      company: "Unilever",
      role: "KPO Executive",
      period: "May 2022 - Nov 2023",
      description: [
        "Managed stock and inventory through the system, maintained records, and handled invoices and sales for Shahbaz Traders Unilever Distribution Dadu District, Sindh, Pakistan.",
        "Utilized Accenture NewsPage 8.0 distributor management system to streamline operations and improve efficiency.",
        "Implemented inventory tracking procedures that improved stock accuracy by 20%, ensuring timely replenishment and reducing stockouts.",
        "Coordinated with the sales team to analyze market trends and consumer preferences, contributing to tailored marketing strategies that increased product visibility and sales."
      ],
      logo: "🌐",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16 dark:bg-gray-900" id="skills">
      {/* Tech Stack Section with Marquee */}
      <div className="px-5 lg:px-28 mb-12 lg:mb-20">
        <motion.h2
          className="text-2xl lg:text-4xl text-center mb-4 text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Tech <span className="font-extrabold">Stack</span>
        </motion.h2>
        
        <motion.p
          className="text-[#71717A] dark:text-gray-400 text-center text-sm lg:text-base max-w-2xl mx-auto mb-8 lg:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to build intelligent systems and full-stack applications
        </motion.p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-8">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
          
          {/* Marquee Animation */}
          <div className="flex gap-6 lg:gap-8 animate-marquee w-max">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-lg p-4 lg:p-6 min-w-[120px] lg:min-w-[140px] flex flex-col items-center justify-center gap-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all cursor-pointer flex-shrink-0 text-black dark:text-white"
              >
                <div className="text-4xl lg:text-5xl">{skill.icon}</div>
                <p className="text-xs lg:text-sm font-semibold text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black dark:bg-gray-950 w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => {
            const isExpanded = expandedExp[exp.id];
            const displayItems = isExpanded ? exp.description : exp.description.slice(0, 2);
            const hasMore = exp.description.length > 2;

            return (
              <motion.div
                key={exp.id}
                className="bg-black dark:bg-gray-900 p-5 border border-[#D4D4D8] dark:border-gray-700 rounded-md hover:bg-[#27272A] dark:hover:bg-gray-800 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                  <div className="flex items-center gap-5">
                    <span className="text-3xl">{exp.logo}</span>
                    <h2 className="font-semibold text-white text-lg lg:text-xl">
                      {exp.role} at {exp.company}
                    </h2>
                  </div>
                  <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light list-disc list-inside space-y-2">
                  {displayItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {hasMore && (
                  <button
                    onClick={() => toggleExpanded(exp.id)}
                    className="mt-4 text-white font-semibold text-sm hover:underline focus:outline-none"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
