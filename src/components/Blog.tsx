"use client"

import { motion } from 'framer-motion'

const blogs = [
  {
    title: 'How I Built a Flight Booking System',
    excerpt: 'A deep dive into the architecture and challenges of building a scalable flight booking application.',
    date: '2024'
  },
  {
    title: 'CI/CD Pipeline using Jenkins & Docker',
    excerpt: 'Implementing automated deployment pipelines for Java applications.',
    date: '2024'
  },
  {
    title: 'Spring Boot Best Practices',
    excerpt: 'Lessons learned from developing production-ready Spring Boot applications.',
    date: '2024'
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark-glass p-6 rounded-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-blue-300 mb-2">{blog.date}</p>
              <p className="text-sm">{blog.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}