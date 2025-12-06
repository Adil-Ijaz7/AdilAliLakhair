import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 py-12 lg:py-16 flex justify-between gap-10 lg:gap-16 flex-col lg:flex-row dark:bg-gray-900" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0 text-black dark:text-white">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] dark:text-gray-400 text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a **Full-Stack Developer and AI Researcher** dedicated to building the next generation of intelligent software systems. Operating at the intersection of robust web engineering and advanced machine learning, I design solutions that bridge theoretical AI with practical, scalable deployment. My work spans from building responsive web applications to developing sophisticated AI models that solve real-world problems.
        </p>

        <p className="text-[#71717A] dark:text-gray-400 text-sm/6 lg:text-base mt-3 lg:mt-5">
          As a Developer and IT Instructor at **Win Academy Dadu**, I master the engineering lifecycle by building full-stack applications using modern technologies like React, Node.js, and Python while teaching core computational concepts in Java, C++, and Python. Simultaneously, I advance my expertise in AI and **Natural Language Processing (NLP)**, building on my experience at **Elevvo Pathways**, where I collaborated on cutting-edge language processing projects and applied machine learning techniques to solve complex challenges.
        </p>

        <p className="text-[#71717A] dark:text-gray-400 text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently pursuing a Bachelor's in Computer Science at **Sukkur IBA University**, I am also **Certified in Ethical Hacking** by Cisco. I apply this security-first mindset to both my web architectures and AI models, ensuring innovation never comes at the cost of reliability. My comprehensive skill set includes frameworks like Next.js, TensorFlow, and PyTorch, complemented by expertise in Docker, AWS, and database management. This technical foundation allows me to deliver end-to-end solutions that are not only intelligent and innovative but also secure, scalable, and production-ready.
        </p>
      </motion.div>
    </div>
  );
}
