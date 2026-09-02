import { useState } from 'react'

interface ExperienceItem {
  role: string
  company: string
  period: string
  type: 'Full-time' | 'Internship'
  bullets: string[]
}

interface EducationItem {
  degree: string
  period: string
  school: string
}

interface SkillGroup {
  category: string
  skills: string[]
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Software Development Engineer',
    company: 'Shabd Company',
    period: 'Feb 2026 – Apr 2026',
    type: 'Full-time',
    bullets: [
      'Developed and maintained frontend modules using Next.js and TypeScript in a production environment.',
      'Integrated frontend components with backend REST APIs to fetch and display dynamic data.',
      'Implemented new features and resolved bugs, improving application reliability and user experience.',
      'Collaborated with cross-functional teams to deliver project milestones on schedule.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Shabd Company',
    period: 'May 2025 – Jan 2026',
    type: 'Internship',
    bullets: [
      'Built responsive web application interfaces using Next.js, TypeScript, React.js',
      'Developed and maintained UI components for company web projects in a collaborative development environment.',
      'Integrated third-party and internal APIs to support frontend feature development.',
      'Participated in real-time project development workflows using Git and GitHub for version control.',
      'Gained hands-on experience in the complete web application development lifecycle.',
    ],
  },
]

const educationData: EducationItem[] = [
  {
    degree: 'Software Development Training',
    period: '2024 – 2025',
    school: 'Freshworks Software Academy',
  },
  {
    degree: '12th Standard (Higher Secondary)',
    period: '2021 – 2022',
    school: 'Government Girls Higher Secondary School',
  },
  {
    degree: '10th Standard (Secondary School)',
    period: '2019 – 2020',
    school: 'Government High School, Asthinapuram',
  },
]

const skillsData: SkillGroup[] = [
  {
    category: 'Frontend Stack',
    skills: ['Next.js', 'React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend & APIs',
    skills: ['REST API Integration', 'MySQL'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS (Basics)', 'Ubuntu Server Deployment', 'Cloudinary'],
  },
  {
    category: 'Tools & Workflows',
    skills: ['Git', 'GitHub', 'VS Code', 'Responsive Web Design'],
  },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience')

  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="bg-brand-offset py-[100px] border-t border-b border-gray-200 relative" id="resume">
      <div className="w-[90%] max-w-[1200px] mx-auto print:max-w-full print:w-full print:mx-0 print:p-0">

        {/* Section Header (Hidden in Print) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-[60px] gap-6 print:hidden">
          <div className="text-center md:text-left">
            <span className="font-head text-[0.85rem] font-bold tracking-wider text-brand-accent1 uppercase">
              Career History
            </span>
            <h2 className="font-head text-4xl sm:text-[2.8rem] font-extrabold text-brand-dark tracking-tight mt-2">
              My Resume & Journey
            </h2>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-dark text-white font-head font-bold text-sm rounded-full transition-all duration-300 hover:bg-brand-accent1 hover:scale-105 shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-4.5 h-4.5"
            >
              <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            PRINT / SAVE PDF
          </button>
        </div>

        {/* --- WEB-ONLY INTERACTIVE LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[40px] lg:gap-[60px] items-start print:hidden">

          {/* Tabs Navigation */}
          <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 border-b border-gray-200 lg:border-b-0 pb-3 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 lg:flex-initial text-left px-5 py-4 font-head font-bold text-[0.95rem] tracking-tight rounded-xl transition-all whitespace-nowrap ${activeTab === 'experience'
                ? 'bg-white border-l-[3px] border-brand-accent2 text-brand-dark shadow-sm'
                : 'text-gray-400 hover:text-brand-dark hover:bg-white/50'
                }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 lg:flex-initial text-left px-5 py-4 font-head font-bold text-[0.95rem] tracking-tight rounded-xl transition-all whitespace-nowrap ${activeTab === 'education'
                ? 'bg-white border-l-[3px] border-brand-accent2 text-brand-dark shadow-sm'
                : 'text-gray-400 hover:text-brand-dark hover:bg-white/50'
                }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 lg:flex-initial text-left px-5 py-4 font-head font-bold text-[0.95rem] tracking-tight rounded-xl transition-all whitespace-nowrap ${activeTab === 'skills'
                ? 'bg-white border-l-[3px] border-brand-accent2 text-brand-dark shadow-sm'
                : 'text-gray-400 hover:text-brand-dark hover:bg-white/50'
                }`}
            >
              Tech Skills & Languages
            </button>
          </div>

          {/* Active Tab Content Panel */}
          <div className="bg-white p-8 sm:p-10 rounded-[20px] border border-gray-100 shadow-sm min-h-[400px]">

            {/* Experience Panel */}
            {activeTab === 'experience' && (
              <div className="flex flex-col gap-10">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-150 last:pb-0 pb-4">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-9px] top-[5px] w-4 h-4 rounded-full border-[3px] border-brand-accent2 bg-white" />

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-brand-accent2/10 text-brand-accent2 text-xs font-bold font-head rounded-full mb-1">
                          {exp.type}
                        </span>
                        <h3 className="font-head text-xl font-extrabold text-brand-dark tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="font-body text-[0.95rem] font-bold text-gray-500">
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-head text-sm font-extrabold text-gray-400 bg-brand-offset px-3 py-1.5 rounded-lg border border-gray-100">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="font-body text-[0.9rem] leading-relaxed text-gray-500 flex items-start gap-2.5">
                          <span className="text-brand-accent1 mt-1 text-xs">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education Panel */}
            {activeTab === 'education' && (
              <div className="flex flex-col gap-10">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-gray-150 last:pb-0 pb-4">
                    {/* Timeline Dot */}
                    <div className="absolute left-[-9px] top-[5px] w-4 h-4 rounded-full border-[3px] border-brand-accent1 bg-white" />

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                      <div>
                        <h3 className="font-head text-xl font-extrabold text-brand-dark tracking-tight">
                          {edu.degree}
                        </h3>
                        <p className="font-body text-[0.95rem] text-gray-500">
                          {edu.school}
                        </p>
                      </div>
                      <span className="font-head text-sm font-extrabold text-gray-400 bg-brand-offset px-3 py-1.5 rounded-lg border border-gray-100 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Panel */}
            {activeTab === 'skills' && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillsData.map((group, idx) => (
                    <div key={idx} className="p-5 rounded-xl border border-gray-100 bg-brand-offset">
                      <h4 className="font-head text-sm font-bold tracking-wider text-brand-accent2 uppercase mb-3">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-brand-dark font-body text-[0.85rem] font-medium rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-[30px]">
                  <div>
                    <h4 className="font-head text-sm font-bold tracking-wider text-brand-accent1 uppercase mb-2">
                      Languages
                    </h4>
                    <div className="flex gap-4">
                      <div>
                        <span className="font-body text-[0.9rem] font-bold text-brand-dark">Tamil</span>
                        <span className="text-gray-400 text-xs ml-1.5">(Native / Advanced)</span>
                      </div>
                      <div>
                        <span className="font-body text-[0.9rem] font-bold text-brand-dark">English</span>
                        <span className="text-gray-400 text-xs ml-1.5">(Intermediate)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* --- PRINT-ONLY/PDF STANDARD RESUME SHEET --- */}
        {/* This layout is strictly styled for standard letter/A4 printing using the `@media print` directives in index.css. It is hidden on the web interface. */}
        <div className="hidden print:block print:bg-white print:text-black font-serif text-[11pt] leading-[1.3] print:p-0">

          {/* Resume Header */}
          <div className="text-center border-b-[1.5px] border-black pb-3 mb-4">
            <h1 className="font-head text-3xl font-extrabold tracking-tight text-black mb-1 uppercase">
              Muthujothi
            </h1>
            <p className="font-body text-[9.5pt] text-black/80 tracking-wide font-medium">
              Chennai, Tamil Nadu &nbsp;|&nbsp; +91 9600253462 &nbsp;|&nbsp; muthujothi24680@gmail.com
            </p>
            <p className="font-body text-[9pt] text-black/70 mt-1">
              GitHub: github.com/Muthujothi-2004 &nbsp;|&nbsp; LinkedIn: linkedin.com/in/Muthujothi
            </p>
          </div>

          {/* Summary Section */}
          <div className="mb-4">
            <h2 className="font-head text-[11pt] font-extrabold tracking-wider border-b border-black/30 pb-0.5 mb-2 uppercase text-black">
              Professional Summary
            </h2>
            <p className="font-body text-[9.5pt] leading-normal text-black/90">
              Motivated and detail-oriented Frontend Developer with hands-on experience building responsive, scalable web applications using Next.js, React.js, TypeScript, and JavaScript. Proven track record of integrating REST APIs, implementing frontend features, and delivering user-friendly interfaces. Familiar with AWS and Ubuntu deployment basics. Strong problem-solving skills with the ability to collaborate effectively in fast-paced, real-time project environments.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-4">
            <h2 className="font-head text-[11pt] font-extrabold tracking-wider border-b border-black/30 pb-0.5 mb-2 uppercase text-black">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-1 text-[9.5pt] font-body">
              <div>
                <strong>Frontend:</strong> Next.js, React.js, HTML5, CSS3, JavaScript (ES6+), TypeScript
              </div>
              <div>
                <strong>Backend & Database:</strong> REST API Integration, MySQL
              </div>
              <div>
                <strong>Cloud & Tools:</strong> AWS (Basics), Ubuntu Server Deployment, Cloudinary, Git, GitHub
              </div>
              <div>
                <strong>Languages:</strong> Tamil (Advanced), English (Intermediate)
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-4">
            <h2 className="font-head text-[11pt] font-extrabold tracking-wider border-b border-black/30 pb-0.5 mb-2 uppercase text-black">
              Professional Experience
            </h2>

            <div className="mb-3">
              <div className="flex justify-between items-baseline font-body font-bold text-[10pt] text-black">
                <span>Software Development Engineer &ndash; Shabd Company</span>
                <span className="font-normal text-[9pt]">Feb 2025 &ndash; Apr 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-1 text-[9pt] leading-relaxed text-black/90 font-body">
                <li>Developed and maintained frontend modules using Next.js and TypeScript in a production environment.</li>
                <li>Integrated frontend components with backend REST APIs to fetch and display dynamic data.</li>
                <li>Implemented new features and resolved bugs, improving application reliability and user experience.</li>
                <li>Collaborated with cross-functional teams to deliver project milestones on schedule.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-body font-bold text-[10pt] text-black">
                <span>Web Developer Intern &ndash; Shabd Company</span>
                <span className="font-normal text-[9pt]">May 2024 &ndash; Jan 2025</span>
              </div>
              <ul className="list-disc pl-5 mt-1 text-[9pt] leading-relaxed text-black/90 font-body">
                <li>Built responsive web pages using HTML, CSS, JavaScript, and React.js.</li>
                <li>Integrated third-party and internal APIs to support frontend feature development.</li>
                <li>Participated in real-time project development workflows using version control (Git/GitHub).</li>
                <li>Gained hands-on experience in the full web application development lifecycle.</li>
              </ul>
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-4">
            <h2 className="font-head text-[11pt] font-extrabold tracking-wider border-b border-black/30 pb-0.5 mb-2 uppercase text-black">
              Projects
            </h2>

            <div className="mb-2">
              <div className="flex justify-between items-baseline font-body font-bold text-[10pt] text-black">
                <span>Rhythmix &ndash; Music Application</span>
                <a href="https://rhythmix-music.netlify.app" className="font-normal text-[9pt] text-black underline">rhythmix-music.netlify.app</a>
              </div>
              <p className="font-body text-[9pt] text-black/90 mt-0.5">
                Developed during training at Freshworks Software Academy. A feature-rich music application with a Mood Swing feature that curates playlists based on user mood.
              </p>
            </div>

            <div className="mb-2">
              <div className="flex justify-between items-baseline font-body font-bold text-[10pt] text-black">
                <span>Trackify &ndash; Expense Tracker</span>
                <a href="https://github.com/Muthujothi-2004/Expense_Tracker" className="font-normal text-[9pt] text-black underline">github.com/Muthujothi-2004/Expense_Tracker</a>
              </div>
              <p className="font-body text-[9pt] text-black/90 mt-0.5">
                Developed during training at Freshworks Software Academy. A React.js-based expense tracker application enabling users to add, categorize, and monitor personal finances.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-body font-bold text-[10pt] text-black">
                <span>Portfolio Website</span>
                <a href="https://muthujothi2004.github.io" className="font-normal text-[9pt] text-black underline">muthujothi2004.github.io</a>
              </div>
              <p className="font-body text-[9pt] text-black/90 mt-0.5">
                Developed during training at Freshworks Software Academy. A personal portfolio website showcasing projects, skills, and professional background.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="font-head text-[11pt] font-extrabold tracking-wider border-b border-black/30 pb-0.5 mb-2 uppercase text-black">
              Education & Training
            </h2>
            <div className="flex justify-between items-baseline font-body font-bold text-[9.5pt] mb-1.5 text-black">
              <span>Software Development Training &ndash; Freshworks Software Academy</span>
              <span className="font-normal text-[9pt]">2022 &ndash; 2024</span>
            </div>
            <div className="flex justify-between items-baseline font-body font-bold text-[9.5pt] mb-1.5 text-black">
              <span>Higher Secondary Education (12th Standard) &ndash; Gov. Girls Higher Sec. School</span>
              <span className="font-normal text-[9pt]">2021 &ndash; 2022</span>
            </div>
            <div className="flex justify-between items-baseline font-body font-bold text-[9.5pt] text-black">
              <span>Secondary School Education (10th Standard) &ndash; Gov. High School, Asthinapuram</span>
              <span className="font-normal text-[9pt]">2019 &ndash; 2020</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
