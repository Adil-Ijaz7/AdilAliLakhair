import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase, HiLightningBolt } from 'react-icons/hi';

const timelineData = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'AI Engineering Focus',
    organization: 'Self-Learning & Projects',
    icon: HiLightningBolt,
    description: 'Specializing in LLM fine-tuning, AI assistants, and cutting-edge machine learning projects.',
    color: 'bg-purple-500'
  },
  {
    id: 2,
    year: '2024 - Present',
    title: 'Full Stack Development',
    organization: 'Freelance Projects',
    icon: HiBriefcase,
    description: 'Built web applications using HTML , CSS, JS , WordPress, Laravel, React, Next.js, Node.js, and modern development practices.',
    color: 'bg-blue-500'
  },
  {
    id: 3,
    year: '2024 - Present',
    title: 'Computer Science Degree',
    organization: 'University',
    icon: HiAcademicCap,
    description: 'Deepening knowledge in Computer Hardware, Algorithms, Data Structures, AI, and Software Engineering with a security-first mindset.',
    color: 'bg-green-500'
  },
  {
    id: 4,
    year: '2019',
    title: 'Programming Journey Begins',
    organization: 'Self-Taught',
    icon: HiLightningBolt,
    description: 'Started with Python in 2019, building foundational programming skills and early projects.',
    color: 'bg-red-500'
  }
];

export default function Timeline() {
  return (
    <div className="px-5 lg:px-28 py-16 bg-white dark:bg-gray-800" id="timeline">
      <motion.h2 
        className="text-2xl lg:text-4xl text-center text-black dark:text-white mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Journey</span>
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex-col lg:gap-8`}
            >
              {/* Content */}
              <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left w-full`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">{item.year}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{item.organization}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center z-10 lg:my-0 my-4`}
              >
                <item.icon className="text-white text-3xl" />
              </motion.div>

              {/* Spacer */}
              <div className="lg:w-5/12 hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
