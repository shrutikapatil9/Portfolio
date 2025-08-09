/* jshint ignore:start */
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import React from "react";

import ProjectCard from "./ProjectCard";


export default function Portfolio() {
   

  return (
      <>
    
   
   <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8">
    <Link to="projects" smooth={true} duration={600}>Projects</Link>


  
      {/* Header */}
      <header className="text-center mb-12">
       <motion.h1
  className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
  Shrutika Patil
 

</h1>

</motion.h1>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          Aspiring Full Stack Developer
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/shrutikapatil9" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/shrutika-patil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:shrutika09.patil@gmail.com">Email</a>
        </div>
      </header>

        {/* About */}

        <motion.section
          id="about"
          className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2 dark:text-white">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
            I’m an aspiring full stack developer with hands-on experience in building responsive
            applications using React, Node.js, and MongoDB. I love solving problems and building
            real-world software solutions with clean design and functionality.
          </p>
        </motion.section>





        {/* Projects */}
        <motion.section
          id="about"
          className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6"
          initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
        >
  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
    Projects
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
    <ProjectCard
      title="E-commerce Shopping Site"
      description="React + Sass based shopping site with catalog, wishlist, and cart functionality."
      stack={["React", "Sass", "Responsive"]}
      github="https://github.com/shrutikapatil9/shopping-site"
      live="https://your-live-link.com"
      image="https://your-image-link.png"
    />

    <ProjectCard
      title="Responsive Landing Page"
      description="Built with HTML, CSS, and Bootstrap. Mobile-friendly layout for marketing."
      stack={["HTML", "CSS", "Bootstrap"]}
      github="https://github.com/shrutikapatil9/landing-page"
      live="https://your-demo-link.com"
    />
  </div>
</motion.section>


        

   
         {/* Journey Section */}
      <motion.section
  id="journey"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6"
>
  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
    📚 My Journey
  </h2>

  <motion.ul
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
    className="space-y-4 text-gray-700 dark:text-gray-300"
  >
    {[
      "🚀 Jul 2025 — Published personal portfolio (this site!)",
      "🎯 Jun 2025 — Built E-commerce app using React + Sass",
      "🏆 May 2025 — Completed DSA bootcamp + solved 300+ problems",
      "📜 Mar 2025 — Earned MongoDB + Node.js certification",
    ].map((item, i) => (
      <motion.li
        key={i}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {item}
      </motion.li>
    ))}
  </motion.ul>
</motion.section>
<div className="flex gap-3 mt-4">
  <img src="/badge1.png" alt="MongoDB Certified" className="h-10" />
  <img src="/badge2.png" alt="DSA Bootcamp" className="h-10" />
</div>
<section id="blog">
  <h2>My Articles</h2>
  <div className="grid gap-4">
    <div className="bg-white p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">Intro to React Hooks</h3>
      <p className="text-gray-600">Short description...</p>
    </div>
  </div>
</section>



 

        {/* Resume */}
        <motion.section
          id="resume"
          className="text-center mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/Shrutika_Patil_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow">
              Download Resume
            </button>
          </a>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mb-10 border-b border-gray-300 dark:border-gray-700 pb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 dark:text-white text-center">Contact Me</h2>
          <form
            action="https://formspree.io/f/mqalbwoe"
            method="POST"
            className="grid gap-4 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
            >
              Send Message
            </button>
          </form>
        </motion.section>
</section>

      </>

    
  );
}

