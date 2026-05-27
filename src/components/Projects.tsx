
interface ProjectItem {
  category: string
  name: string
  desc: string
  image: string
  link: string
  metric: string
}

const projects: ProjectItem[] = [
  {
    category: 'MUSIC APPLICATION',
    name: 'Rhythmix',
    desc: "Developed during training at Freshworks Software Academy. A feature-rich music app with a Mood Swing feature that curates playlists based on the user's current mood. Built for seamless audio playback.",
    image: '/images/project1.png',
    link: 'rhythmix-psi.vercel.app',
    metric: 'React / HTML5 Audio',
  },
  {
    category: 'EXPENSE TRACKER',
    name: 'Trackify',
    desc: 'Developed during training at Freshworks Software Academy. A React.js-based expense tracker that lets users add, categorize, and monitor personal finances with real-time calculated dashboards.',
    image: '/images/project2.png',
    link: 'https://trackify-pi-jade.vercel.app/',
    metric: 'React State Hooks',
  },
  {
    category: 'PERSONAL WEBSITE',
    name: 'Muthujothi Portfolio',
    desc: 'Developed during training at Freshworks Software Academy. A personal portfolio website showcasing projects, skills, and professional background. Designed for clean layouts and fast performance.',
    image: '/images/project3.png',
    link: 'https://muthujothi2004.github.io',
    metric: 'Tailwind CSS / Vite',
  },
]

export default function Projects() {
  return (
    <section className="bg-white py-[100px]" id="projects">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <h2 className="font-head text-4xl sm:text-[2.8rem] font-extrabold text-brand-dark text-center mb-[70px] tracking-tight">
          Academy & Personal Projects
        </h2>

        <div className="flex flex-col w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] lg:grid-cols-3 gap-10 items-center py-[45px] border-t border-gray-200 last:border-b last:border-gray-200"
            >
              {/* Col 1: Info */}
              <div className="flex flex-col justify-center">
                <span className="font-head text-lg sm:text-[1.3rem] font-extrabold text-brand-dark tracking-tight uppercase">
                  {project.category}
                </span>
                <p className="font-body text-[0.95rem] leading-relaxed text-gray-500 mt-3 max-w-[320px] md:max-w-full lg:max-w-[320px]">
                  {project.desc}
                </p>
              </div>

              {/* Col 2: Image Wrapper */}
              <div className="flex justify-center md:justify-end lg:justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full max-w-[280px]"
                >
                  <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden border border-gray-200 shadow-sm group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-brand-dark/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-brand-accent1 flex items-center justify-center text-white shadow-[0_4px_15px_rgba(168,85,247,0.25)] transform scale-80 group-hover:scale-100 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="w-[18px] h-[18px]"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Col 3: Metric */}
              <div className="flex md:col-span-2 lg:col-span-1 justify-start lg:justify-end items-center -mt-2 md:-mt-5 lg:mt-0">
                <span className="font-head text-[1.8rem] font-bold text-brand-dark md:text-gray-500 lg:text-brand-dark">
                  {project.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
