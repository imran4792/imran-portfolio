"use client"

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Full Stack Java Internship',
    description: 'Built backend services using Spring Boot, designed REST APIs, improved performance through debugging, worked across SDLC.',
    period: 'Recent'
  },
  {
    title: 'Learning & Growth',
    description: 'DevOps practices, cloud deployment, backend optimization.',
    period: 'Ongoing'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience & Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <div className="dark-glass p-6 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-sm text-blue-300 mb-2">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}