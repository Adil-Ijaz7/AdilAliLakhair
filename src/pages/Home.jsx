import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20 mb-16 lg:mb-24 dark:bg-gray-900" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-black dark:text-white">
              Hello, <TypeAnimation
                sequence={[
                  'I am Adil Ali Lakhair',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-black dark:text-white">
              <span className="font-extrabold">Aspiring AI</span>{" "}
              <span
                className="text-white dark:text-gray-900 font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-black dark:text-white">
              Based In <span className="font-extrabold">Pakistan.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] dark:text-gray-400 text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Full-Stack Developer transitioning into AI Research and Engineering. Passionate about building intelligent systems that bridge theoretical AI with practical, deployed solutions. Teaching, coding, and exploring the next generation of AI-powered applications.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { Icon: BsGithub, href: "https://github.com/Adil-Ijaz7" },
              { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/aadilijaz/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/adil.ijaz7/" },
              { Icon: IoLogoTwitter, href: "https://twitter.com/adil_ijaz7" },
              { Icon: IoMdMail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=adilijaz227@gmail.com" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-2 lg:p-3 rounded border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
