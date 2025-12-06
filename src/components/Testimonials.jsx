import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Lead at StartupXYZ",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=000&color=fff",
    content: "Working with Adil was an absolute pleasure. His expertise in AI and clean code practices brought our project to the next level.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=000&color=fff",
    content: "Exceptional problem-solving skills and attention to detail. Adil delivered beyond our expectations with innovative solutions.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Senior Developer",
    image: "https://ui-avatars.com/api/?name=Emma+Rodriguez&background=000&color=fff",
    content: "Adil's proficiency in multiple programming languages and AI frameworks is remarkable. A true professional and team player.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="px-5 lg:px-28 py-16 bg-gray-50 dark:bg-gray-900" id="testimonials">
      <motion.h2 
        className="text-2xl lg:text-4xl text-center text-black dark:text-white mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What <span className="font-extrabold">People Say</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg text-black dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <HiStar key={i} className="text-yellow-400" size={20} />
              ))}
            </div>

            <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
