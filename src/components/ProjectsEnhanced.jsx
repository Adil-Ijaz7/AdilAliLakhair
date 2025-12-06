import React, { useState } from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: "Mobius LLM Fine-tuning Engine",
    description: "A powerful custom engine for fine-tuning Large Language Models, optimized for research and experimentation. Built with Python, it provides streamlined workflows for model training, parameter optimization, and performance evaluation.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Mobius-LLM-Fine-tuning-Engine",
    category: "AI",
    tags: ["Python", "Machine Learning", "LLM"],
    detailedDescription: "Advanced LLM fine-tuning platform with custom training pipelines, hyperparameter optimization, and comprehensive model evaluation metrics."
  },
  {
    id: 2,
    title: "DevPilot",
    description: "A sophisticated AI-powered coding assistant built with Java Swing. Leverages OpenRouter API for real-time code analysis, debugging, refactoring, and test generation with FlatLaf UI.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/DevPilot",
    category: "AI",
    tags: ["Java", "AI Assistant", "OpenRouter"],
    detailedDescription: "Intelligent coding companion that provides real-time suggestions, code analysis, and automated testing capabilities."
  },
  {
    id: 3,
    title: "Voxa Assistant",
    description: "A sleek, neon-themed AI voice assistant built with Python and PyQt6. Features animated waveform visualization, voice recognition, text-to-speech, and AI-powered responses via OpenRouter API.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Voxa_Assistant",
    category: "AI",
    tags: ["Python", "Voice AI", "PyQt6"],
    detailedDescription: "Modern voice-activated AI assistant with stunning visual feedback and natural language processing capabilities."
  },
  {
    id: 4,
    title: "Aiora Voice Assistance",
    description: "AI-powered voice assistant with natural language processing capabilities. Features voice commands, speech recognition, and intelligent responses for seamless hands-free interaction.",
    image: "/assets/Aiora Assistant.jpeg",
    link: "https://github.com/Adil-Ijaz7/Aiora_Voice-Assistance",
    liveLink: "https://aiora-voice-assistant.vercel.app/",
    category: "AI",
    tags: ["Python", "Voice AI", "NLP"],
    detailedDescription: "Advanced voice assistant with natural language understanding, context awareness, and multi-function voice command support for productivity and automation."
  },
  {
    id: 5,
    title: "Anubis GPT",
    description: "Java-based AI chatbot with advanced conversational capabilities and voice interaction. Integrates OpenRouter API for intelligent responses and features a modern, user-friendly interface.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Anubis_GPT",
    category: "AI",
    tags: ["Java", "Chatbot", "NLP"],
    detailedDescription: "Conversational AI with context-aware responses, multi-turn dialogue support, and voice interaction features."
  },
  {
    id: 6,
    title: "Aiora GPT",
    description: "Advanced GPT-based conversational interface and integration module built with JavaScript. Provides seamless AI-powered chat functionality with context-aware responses.",
    image: "/assets/Aiora GPT.jpeg",
    link: "https://github.com/Adil-Ijaz7/Aiora_Gpt",
    liveLink: "https://aiora.vercel.app/",
    category: "Web",
    tags: ["JavaScript", "GPT", "API Integration"],
    detailedDescription: "Modular GPT integration library for building intelligent chat interfaces in web applications."
  },
  {
    id: 7,
    title: "Book Recommendation App",
    description: "A modern Python desktop application for discovering and managing favorite books. Features a clean dark-themed GUI with CustomTkinter, aggregates data from Open Library and Google Books APIs, and stores favorites in MySQL.",
    image: "/assets/project1.png",
    link: "https://github.com/Adil-Ijaz7/Book_recommendation_app",
    category: "Desktop",
    tags: ["Python", "MySQL", "API Integration"],
    detailedDescription: "Comprehensive book discovery platform with personalized recommendations and favorite management system."
  },
  {
    id: 8,
    title: "Portfolio Website",
    description: "A stunning, modern portfolio website built with Next.js and Tailwind CSS. Features parallax effects, smooth scrolling, cyberpunk theme, and responsive design showcasing projects and skills.",
    image: "/assets/portfolio.jpeg",
    link: "https://github.com/Adil-Ijaz7/MyPortfolio",
    liveLink: "https://adil-ijaz7.github.io/DevPortfoliov1/",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS", "React"],
    detailedDescription: "Professional portfolio site with modern animations, dark mode, and optimized performance."
  },
  {
    id: 9,
    title: "Sonara Music Player",
    description: "A modern, responsive web-based Music Player with a sleek dark theme. Features drag & drop song support, auto-play, and dynamic audio controls built with HTML5, CSS3, and JavaScript.",
    image: "/assets/Sonara.jpeg",
    link: "https://github.com/Adil-Ijaz7/SonaraMusicPlayer",
    liveLink: "https://code-alpha-music-player-ka0zipkfg-adil-alis-projects-1bd9f67e.vercel.app/",
    category: "Web",
    tags: ["HTML5", "CSS3", "JavaScript"],
    detailedDescription: "Feature-rich music player with playlist management, audio visualization, and intuitive controls."
  },
  {
    id: 10,
    title: "Perricone Home Services",
    description: "Professional WordPress website for a home services company. Features service listings, appointment booking, customer testimonials, and responsive design optimized for mobile and desktop.",
    image: "/assets/perriconehomeservices.jpeg",
    link: "https://perriconehomeservices.com/",
    liveLink: "https://perriconehomeservices.com/",
    category: "Web",
    tags: ["WordPress", "PHP", "Client Project"],
    detailedDescription: "Full-featured home services website with custom WordPress theme, SEO optimization, contact forms, and integrated booking system for seamless customer engagement."
  },
  {
    id: 11,
    title: "Precision Pro Clean",
    description: "Corporate WordPress website showcasing professional services. Includes portfolio gallery, client testimonials, service pages, and custom contact forms with modern, clean design.",
    image: "/assets/persicionproclean.jpeg",
    link: "https://precisionproc.com/",
    liveLink: "https://precisionproc.com/",
    category: "Web",
    tags: ["WordPress", "PHP", "Client Project"],
    detailedDescription: "Enterprise-level WordPress site with custom theme development, advanced page builder integration, and performance optimization for fast loading times."
  },
  {
    id: 12,
    title: "Beltrans Painting LLC",
    description: "WordPress website for a painting contractor business. Features project gallery, service details, quote request forms, and mobile-responsive design for optimal user experience.",
    image: "/assets/beltranspainting llc.jpeg",
    link: "https://beltranspaintingllc.com/",
    liveLink: "https://beltranspaintingllc.com/",
    category: "Web",
    tags: ["WordPress", "PHP", "Client Project"],
    detailedDescription: "Custom WordPress website with portfolio showcase, before/after image galleries, service area mapping, and lead generation forms optimized for conversion."
  },
  {
    id: 13,
    title: "Loja Casa da Cera",
    description: "E-commerce WordPress website for a Portuguese wax and cleaning products store. Features online store, product catalog, shopping cart, and multilingual support with WooCommerce integration.",
    image: "/assets/lojacasadecera.jpeg",
    link: "https://lojacasadacera.pt/",
    liveLink: "https://lojacasadacera.pt/",
    category: "Web",
    tags: ["WordPress", "WooCommerce", "Client Project"],
    detailedDescription: "Full-featured e-commerce platform with WooCommerce, secure payment gateway integration, inventory management, and Portuguese language optimization for local market."
  }
];

const categories = ["All", "AI", "Web", "Desktop"];

export default function ProjectsEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 8);

  return (
    <div className="bg-black dark:bg-gray-950 px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <motion.h2 
        className="text-2xl lg:text-4xl text-center text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Projects</span>
      </motion.h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        <AnimatePresence mode="wait">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="lg:w-[500px] w-full rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <img
                  className="w-full h-full hover:scale-110 transition-all duration-500 object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>

              <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                <motion.h2 
                  className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl"
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                >
                  {String(project.id).padStart(2, "0")}
                </motion.h2>
                <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

                <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </motion.button>
                  
                  {project.liveLink && (
                    <motion.a 
                      href={project.liveLink} 
                      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                      <TbExternalLink size={18} />
                    </motion.a>
                  )}
                  
                  <motion.a 
                    href={project.link} 
                    className="text-white flex items-center gap-2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    title="View on GitHub"
                  >
                    <TbExternalLink size={23} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {filteredProjects.length > 8 && (
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            {showAll ? "Show Less" : `Show More (${filteredProjects.length - 8} more)`}
          </motion.button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-black dark:text-white hover:scale-110 transition-transform"
              >
                <HiX size={32} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                {selectedProject.title}
              </h2>

              <div className="flex gap-2 mb-4 flex-wrap">
                {selectedProject.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {selectedProject.detailedDescription}
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                {selectedProject.liveLink && (
                  <motion.a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all"
                  >
                    Live Demo <TbExternalLink size={20} />
                  </motion.a>
                )}
                
                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  View on GitHub <TbExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
