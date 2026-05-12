export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="dark-glass p-8 rounded-xl">
          <p className="text-lg leading-relaxed mb-6">
            As an entry-level developer with hands-on experience, I specialize in building scalable applications using Spring Boot and REST APIs. My backend-first mindset focuses on clean code, performance optimization, and secure architecture.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I have real deployment experience, not just local projects, with expertise in CI/CD pipelines, Docker, and cloud deployment. My problem-solving approach ensures robust and efficient solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Backend Focus</h3>
              <p>Spring Boot, REST APIs, Hibernate/JPA</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">DevOps Ready</h3>
              <p>Docker, Jenkins, Azure, Git</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}