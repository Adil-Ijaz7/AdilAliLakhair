import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiUsers, HiAcademicCap } from 'react-icons/hi';

const stats = [
  {
    id: 1,
    icon: HiCode,
    value: 56,
    suffix: '+',
    label: 'Projects Completed'
  },
  {
    id: 2,
    icon: HiLightningBolt,
    value: 15,
    suffix: '+',
    label: 'Technologies Mastered'
  },
  {
    id: 3,
    icon: HiUsers,
    value: 30,
    suffix: '+',
    label: 'Happy Clients'
  },
  {
    id: 4,
    icon: HiAcademicCap,
    value: 6,
    suffix: '+',
    label: 'Years Experience'
  }
];

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsCounter() {
  return (
    <div className="px-5 lg:px-28 py-16 bg-black dark:bg-gray-950">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <stat.icon className="text-white text-5xl lg:text-6xl mx-auto" />
            </motion.div>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-2">
              <Counter end={stat.value} />
              {stat.suffix}
            </h3>
            <p className="text-gray-400 text-sm lg:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
