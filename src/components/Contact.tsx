"use client"

import { ChangeEvent, FormEvent, useState } from 'react'

interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
    alert('Message sent!')
  }

  const handleChange = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="mb-4">Email: mohammadimrankhan970@gmail.com</p>
            <p className="mb-4">Phone: +91 9704650226</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/imrankhanpattan/" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="dark-glass p-6 rounded-xl">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={handleChange('name')}
                className="w-full p-2 bg-gray-800 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                className="w-full p-2 bg-gray-800 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea
                value={form.message}
                onChange={handleChange('message')}
                className="w-full p-2 bg-gray-800 rounded h-32"
                required
              />
            </div>
            <button type="submit" className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}