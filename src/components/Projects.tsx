"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Project {
  title: string
  problem: string
  solution: string
  techStack: string[]
  features: string[]
  devops: string[]
  github: string
  demo: string
}

const projects: Project[] = [
  {
    title: 'Flight Booking Application',
    problem: 'Need for a comprehensive flight booking system with secure user management and efficient booking workflow.',
    solution: 'Developed a full-stack application using Spring Boot for backend and Thymeleaf for frontend, implementing secure authentication and optimized database queries.',
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'MySQL', 'Hibernate'],
    features: [
      'Secure authentication using Spring Security',
      'Role-based access control',
      'Flight search and booking workflow',
      'REST API architecture',
      'Database schema design (User, Flight, Booking, Passenger)',
      'End-to-end booking flow implementation',
      'Validation and exception handling',
      'Query optimization for performance'
    ],
    devops: [
      'Docker containerization',
      'Jenkins CI/CD pipeline',
      'Automated build & deployment'
    ],
    github: '#',
    demo: 'https://flightbook.mooo.com/'
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="dark-glass p-8 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-3xl font-semibold mb-4 text-blue-300">{project.title}</h3>
              <p className="text-lg mb-4"><strong>Problem:</strong> {project.problem}</p>
              <p className="text-lg mb-4"><strong>Solution:</strong> {project.solution}</p>
              <div className="mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </div>
              <div className="mb-4">
                <strong>Key Features:</strong>
                <ul className="list-disc list-inside ml-4">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
              <div className="mb-4">
                <strong>DevOps Highlights:</strong>
                <ul className="list-disc list-inside ml-4">
                  {project.devops.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="dark-glass p-8 rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-semibold mb-4">{selectedProject.title}</h3>
              <p className="mb-4"><strong>Problem:</strong> {selectedProject.problem}</p>
              <p className="mb-4"><strong>Solution:</strong> {selectedProject.solution}</p>
              <p className="mb-4"><strong>Tech Stack:</strong> {selectedProject.techStack.join(', ')}</p>
              <div className="flex gap-4">
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
                  GitHub Repo
                </a>
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="px-4 py-2 bg-green-500 rounded hover:bg-green-600">
                  Live Demo
                </a>
              </div>
              <button onClick={() => setSelectedProject(null)} className="mt-4 px-4 py-2 bg-red-500 rounded">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}