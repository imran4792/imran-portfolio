"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ["Backend Developer", "Spring Boot Specialist", "DevOps Enthusiast"]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Pattan Mohammad Imran Khan
        </motion.h1>
        <motion.h2
          key={currentRole}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl mb-6 text-blue-300"
        >
          {roles[currentRole]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Building scalable, secure, and production-ready web applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform inline-block">
            View Projects
          </a>
          <a href="#resume" className="px-8 py-3 border border-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-black transition-colors inline-block">
            Download Resume
          </a>
          <a href="#contact" className="px-8 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-black transition-colors inline-block">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}