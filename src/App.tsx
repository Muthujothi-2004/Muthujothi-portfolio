import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Services from './components/Services'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Stats from './components/Stats'
import ContactCTA from './components/ContactCTA'

export default function App() {
  // Scroll reveal Intersection Observer setup for fade-in animations on scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Ticker />
        <Services />
        <Projects />
        <Resume />
        <Stats />
        <ContactCTA />
      </main>

      <footer className="bg-[#f8f8fa] border-t border-gray-200 py-[60px] pb-10 relative z-0">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[50px] items-start mb-10">
            {/* Footer Left */}
            <div className="flex flex-col gap-5">
              <span className="font-head text-2xl font-extrabold text-brand-dark tracking-tight">
                Muthujothi<span className="text-brand-accent1">.com</span>
              </span>
              <p className="font-body text-[0.9rem] leading-relaxed text-gray-500 max-w-[420px]">
                Motivated Frontend Developer with 1 year of experience building responsive web applications using Next.js, React.js, and TypeScript.
              </p>
            </div>

            {/* Footer Right */}
            <div className="flex flex-col sm:flex-row justify-between gap-[40px] sm:gap-10">
              {/* Links Column */}
              <div className="flex flex-col gap-3">
                <span className="font-head text-[0.85rem] font-bold tracking-wider text-brand-dark uppercase">Links</span>
                <a href="#hero" className="font-body text-[0.9rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Home</a>
                <a href="#expertise" className="font-body text-[0.9rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Expertise</a>
                <a href="#projects" className="font-body text-[0.9rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Projects</a>
                <a href="#resume" className="font-body text-[0.9rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Resume</a>
              </div>

              {/* Socials Column */}
              <div className="flex flex-col gap-3">
                <span className="font-head text-[0.85rem] font-bold tracking-wider text-brand-dark uppercase">Socials</span>
                <div className="flex gap-[15px]">
                  <a
                    href="https://github.com/Muthujothi-2004"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white transition-all duration-300 hover:text-white hover:bg-brand-accent1 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/Muthujothi"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white transition-all duration-300 hover:text-white hover:bg-brand-accent1 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  <a
                    href="mailto:muthujothi24680@gmail.com"
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 bg-white transition-all duration-300 hover:text-white hover:bg-brand-accent1 hover:border-transparent hover:-translate-y-0.5 shadow-sm"
                    aria-label="Email"
                  >
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" className="w-4 h-4 stroke-current">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-[30px] flex flex-col md:flex-row justify-between items-center gap-[15px] text-center md:text-left">
            <p className="font-body text-[0.85rem] text-gray-500">
              &copy; {new Date().getFullYear()} Muthujothi. All rights reserved.
            </p>
            <div className="flex gap-5">
              <a href="#hero" className="font-body text-[0.85rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Privacy Policy</a>
              <a href="#hero" className="font-body text-[0.85rem] text-gray-500 hover:text-brand-dark transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
