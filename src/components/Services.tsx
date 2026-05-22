import { useState } from 'react'

interface ServiceItem {
  id: number
  title: string
  desc: string
}

const servicesData: ServiceItem[] = [
  {
    id: 0,
    title: 'FRONTEND DEVELOPMENT',
    desc: 'Crafting responsive, high-performance web interfaces using modern HTML5, CSS3, JavaScript, and TypeScript. Focused on semantic markup, speed optimization, and cross-browser accessibility.',
  },
  {
    id: 1,
    title: 'REACT & NEXT.JS APPS',
    desc: 'Building scalable single-page and server-side rendered applications. Implementing React state hooks, React Server Components, and optimized rendering architectures.',
  },
  {
    id: 2,
    title: 'STATE & COMPONENT ARCHITECTURE',
    desc: 'Designing robust, reusable React components with clean state encapsulation, responsive styling systems, and micro-interactions for a premium feel.',
  },
  {
    id: 3,
    title: 'API & DEPLOYMENT WORKFLOWS',
    desc: 'Integrating complex REST APIs to fetch and manage dynamic database records, working with Git/GitHub for version control, and configuring basic AWS/Ubuntu deployments.',
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-brand-offset border-t border-b border-gray-200 py-[100px] relative" id="expertise">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[50px] lg:gap-20 items-start">
        {/* Left Column (Sticky) */}
        <div className="lg:sticky lg:top-[130px]">
          <h2 className="font-head text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-brand-dark mb-6 reveal">
            My Technical<br />
            <span className="text-brand-accent1 inline-block">Expertise</span>
          </h2>
          <p className="font-body text-[1.05rem] text-gray-500 leading-relaxed mb-8 reveal">
            I specialize in building fast, responsive, and high-performance user interfaces. My skill set is focused on translating designs into clean, maintainable frontend architectures.
          </p>
          <div className="flex reveal">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-dark text-white font-head font-semibold rounded-full shadow-[0_4px_15px_rgba(10,10,13,0.1)] transition-transform duration-300 hover:scale-105 hover:bg-brand-accent1"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Right Column (Accordion List) */}
        <div className="w-full reveal">
          <div className="flex flex-col w-full">
            {servicesData.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={service.id}
                  className="border-t border-gray-200 py-7.5 sm:py-8 cursor-pointer group transition-colors duration-300 last:border-b last:border-gray-200"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-head text-xl sm:text-2xl font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? 'text-brand-accent1'
                          : 'text-brand-dark group-hover:text-black'
                      }`}
                    >
                      {service.title}
                    </h3>

                    <div className="w-[50px] h-[50px] flex items-center justify-center">
                      {isActive && (
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-brand-accent1 flex items-center justify-center text-white shadow-[0_4px_15px_rgba(168,85,247,0.2)] animate-[scaleIn_0.3s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? 'max-h-[150px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="font-body text-base text-gray-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
