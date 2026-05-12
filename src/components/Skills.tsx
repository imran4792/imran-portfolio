"use client"

import { motion } from 'framer-motion'

const skills = {
  backend: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate / JPA'],
  frontend: ['HTML', 'CSS', 'Thymeleaf'],
  database: ['MySQL', 'Oracle SQL', 'MongoDB'],
  devops: ['Docker', 'Jenkins (CI/CD)', 'Azure', 'Git'],
  concepts: ['OOP', 'SDLC', 'Debugging', 'Testing']
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark-glass p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 capitalize text-blue-300">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span>{skill}</span>
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}