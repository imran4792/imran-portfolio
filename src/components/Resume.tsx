export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Resume</h2>
        <p className="text-lg mb-8">Download my resume to learn more about my experience and skills.</p>
        <a href="/resume.pdf" download className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform inline-block">
          Download Resume
        </a>
      </div>
    </section>
  )
}