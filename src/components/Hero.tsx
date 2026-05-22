import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="bg-white min-h-[90vh] flex items-center relative py-[140px] md:py-[100px] overflow-hidden" id="hero">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[50px] lg:gap-[60px] items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:items-start">
          <h1 className="font-head text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.15] text-brand-dark tracking-tighter reveal">
            Hello, I'm{' '}
            <span className="text-brand-accent1 inline-block">
              Muthujothi,
            </span>
            <br />
            frontend developer
            <br />
            based in India.
          </h1>
          <p className="font-body text-base sm:text-lg text-gray-500 leading-relaxed my-8 max-w-[540px] mx-auto lg:mx-0 reveal">
            Motivated Frontend Developer with 1 year of hands-on experience building responsive web applications
            using Next.js, React.js, TypeScript, and JavaScript, with a focus on seamless API integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full sm:w-auto reveal">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-dark text-white font-head font-semibold rounded-full shadow-[0_4px_15px_rgba(10,10,13,0.15)] transition-transform duration-300 hover:scale-105 hover:bg-brand-accent1"
            >
              GET IN TOUCH
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-dark text-brand-dark font-head font-semibold rounded-full bg-transparent transition-all duration-300 hover:bg-brand-dark hover:text-white"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center reveal">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] animate-float">
            {/* SVG avatar frame with gradient stroke */}
            <svg
              viewBox="0 0 400 400"
              className="w-full h-auto drop-shadow-[0_15px_30px_rgba(168,85,247,0.05)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="avatarClip">
                  <path d="M200,25 C235,15 275,35 305,65 C335,95 385,135 375,175 C365,215 375,255 345,285 C315,315 285,355 245,365 C205,375 165,365 135,345 C105,325 65,315 45,275 C25,235 15,195 25,155 C35,115 65,85 95,55 C125,25 165,35 200,25 Z" />
                </clipPath>
              </defs>

              {/* Animated decorative stroke */}
              <path
                d="M200,25 C235,15 275,35 305,65 C335,95 385,135 375,175 C365,215 375,255 345,285 C315,315 285,355 245,365 C205,375 165,365 135,345 C105,325 65,315 45,275 C25,235 15,195 25,155 C35,115 65,85 95,55 C125,25 165,35 200,25 Z"
                fill="none"
                stroke="#a855f7"
                strokeWidth="5"
                className="stroke-[5]"
                style={{
                  strokeDasharray: '1000',
                  strokeDashoffset: '0',
                }}
              />

              {/* Clipped profile picture */}
              <g clipPath="url(#avatarClip)">
                <image
                  href="/images/avatar.png"
                  x="20"
                  y="20"
                  width="360"
                  height="360"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
