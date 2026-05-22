import React, { useState } from 'react'
import { createPortal } from 'react-dom'

interface FormData {
  name: string
  email: string
  message: string
}

export default function ContactCTA() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
      setModalOpen(false)
    }, 2000)
  }

  return (
    <section className="bg-brand-dark py-[120px] overflow-hidden border-b border-brand-darkoffset relative" id="contact">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center gap-[40px] lg:gap-[60px]">
        <div className="text-center lg:text-left">
          <h2 className="font-head text-4xl sm:text-[3.6rem] font-extrabold leading-[1.15] text-white tracking-tighter reveal">
            Interested In Working Together?<br />
            Let's Connect
          </h2>
        </div>

        <div className="flex justify-center reveal">
          {/* Giant circle button */}
          <button
            className="w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] rounded-full bg-white text-brand-dark font-head font-bold text-base sm:text-lg flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-108 hover:bg-brand-accent1 hover:text-white hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)] relative overflow-hidden group cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <span className="relative z-10">Get In Touch</span>
          </button>
        </div>
      </div>

      {/* Sticky/Floating Bottom Contact Form */}
      {modalOpen && createPortal(
        <>
          {/* Backdrop (Invisible overlay to close when clicking outside the panel) */}
          <div
            className="fixed inset-0 z-[199] bg-black/10 backdrop-blur-[2px]"
            onClick={() => setModalOpen(false)}
          />
          {/* Floating Form Panel at Bottom Center (X-Centred) */}
          <div
            className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] max-w-[500px] bg-white p-6 sm:p-8 rounded-[20px] shadow-2xl border border-gray-150 z-[200] animate-[slideUpFloating_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-brand-dark transition-transform hover:rotate-90 duration-300"
              onClick={() => setModalOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <h3 className="font-head text-[1.8rem] font-extrabold text-brand-dark tracking-tight mb-2">
              Send me a message
            </h3>
            <p className="font-body text-[0.9rem] text-gray-500 leading-normal mb-8">
              Fill out the details below, or reach me directly at{' '}
              <a href="mailto:muthujothi24680@gmail.com" className="font-semibold text-brand-accent1 hover:underline inline-block">
                muthujothi24680@gmail.com
              </a>
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-[50px] h-[50px] rounded-full bg-[#22c55e] text-white text-3xl font-bold flex items-center justify-center mb-5 shadow-[0_4px_15px_rgba(34,197,94,0.2)]">
                  ✓
                </div>
                <p className="font-head text-[1.2rem] font-bold text-brand-dark">
                  Thank you! Your message has been sent.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-head text-xs font-bold tracking-wider text-brand-dark uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-[0.95rem] text-brand-dark bg-brand-offset focus:outline-none focus:border-brand-accent1 focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-head text-xs font-bold tracking-wider text-brand-dark uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-[0.95rem] text-brand-dark bg-brand-offset focus:outline-none focus:border-brand-accent1 focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-head text-xs font-bold tracking-wider text-brand-dark uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="How can I help your team? Send me a message..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-[0.95rem] text-brand-dark bg-brand-offset focus:outline-none focus:border-brand-accent1 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2.5 inline-flex items-center justify-center px-8 py-3.5 bg-brand-dark text-white font-head font-semibold rounded-full shadow-[0_4px_15px_rgba(10,10,13,0.15)] transition-transform duration-300 hover:scale-105 hover:bg-brand-accent1"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </>,
        document.body
      )}
    </section>
  )
}
