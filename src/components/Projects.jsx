import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Mobius LLM Fine-tuning Engine",
    description: "A powerful custom engine for fine-tuning Large Language Models, optimized for research and experimentation. Built with Python, it provides streamlined workflows for model training, parameter optimization, and performance evaluation.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Mobius-LLM-Fine-tuning-Engine"
  },
  {
    id: 2,
    title: "DevPilot",
    description: "A sophisticated AI-powered coding assistant built with Java Swing. Leverages OpenRouter API for real-time code analysis, debugging, refactoring, and test generation with FlatLaf UI.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/DevPilot"
  },
  {
    id: 3,
    title: "Voxa Assistant",
    description: "A sleek, neon-themed AI voice assistant built with Python and PyQt6. Features animated waveform visualization, voice recognition, text-to-speech, and AI-powered responses via OpenRouter API.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Voxa_Assistant"
  },
  {
    id: 4,
    title: "Anubis GPT",
    description: "Java-based AI chatbot with advanced conversational capabilities and voice interaction. Integrates OpenRouter API for intelligent responses and features a modern, user-friendly interface.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Anubis_GPT"
  },
  {
    id: 5,
    title: "Aiora GPT",
    description: "Advanced GPT-based conversational interface and integration module built with JavaScript. Provides seamless AI-powered chat functionality with context-aware responses.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Aiora_Gpt"
  },
  {
    id: 6,
    title: "Book Recommendation App",
    description: "A modern Python desktop application for discovering and managing favorite books. Features a clean dark-themed GUI with CustomTkinter, aggregates data from Open Library and Google Books APIs, and stores favorites in MySQL.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Book_recommendation_app"
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A stunning, modern portfolio website built with Next.js and Tailwind CSS. Features parallax effects, smooth scrolling, cyberpunk theme, and responsive design showcasing projects and skills.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/MyPortfolio"
  },
  {
    id: 8,
    title: "Sonara Music Player",
    description: "A modern, responsive web-based Music Player with a sleek dark theme. Features drag & drop song support, auto-play, and dynamic audio controls built with HTML5, CSS3, and JavaScript.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/SonaraMusicPlayer"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
