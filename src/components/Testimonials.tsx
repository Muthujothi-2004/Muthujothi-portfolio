
interface TestimonialItem {
  text: string
  name: string
  role: string
  company: string
  initials: string
}

const testimonialsData: TestimonialItem[] = [
  {
    text: "Muthujothi is a talented frontend developer. He helped us migrate core user flows to React and Next.js, resulting in much cleaner architecture and faster page speed.",
    name: "John Smith",
    role: "Lead Engineer",
    company: "Shabd Company",
    initials: "JS",
  },
  {
    text: "Muthujothi's attention to detail is impressive. He integrated complex REST APIs and built reusable React components that aligned perfectly with our design systems.",
    name: "Rowhan Smith",
    role: "SDE Manager",
    company: "Shabd Company",
    initials: "RS",
  },
  {
    text: "Working with Muthujothi was a breeze. He is proactive, communicates details clearly, and delivers code on schedule. A great asset for any frontend team.",
    name: "Shawia Doe",
    role: "Product Manager",
    company: "Nexus Solutions",
    initials: "SD",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-brand-offset border-t border-b border-gray-200 py-[100px]" id="testimonials">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <h2 className="font-head text-3xl sm:text-[2.2rem] font-extrabold text-brand-dark text-center mb-[60px] tracking-tight uppercase">
          COLLEAGUE & MENTOR FEEDBACK
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] max-w-[500px] lg:max-w-full mx-auto">
          {testimonialsData.map((t, index) => (
            <div
              key={index}
              className="p-[1px] rounded-[16px] bg-gray-200 border border-gray-200 hover:border-brand-accent1 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] reveal"
            >
              <div className="bg-white p-[35px_30px] rounded-[15px] h-full flex flex-col justify-between">
                {/* Feedback text */}
                <p className="font-body text-[0.95rem] leading-relaxed text-gray-500 italic mb-6">
                  "{t.text}"
                </p>

                {/* User profile details */}
                <div className="flex items-center gap-[15px]">
                  <div className="w-11 h-11 rounded-full bg-brand-dark text-white flex items-center justify-center font-head text-[0.85rem] font-bold tracking-wider">
                    {t.initials}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-head text-[0.95rem] font-bold text-brand-dark">
                      {t.name}
                    </h4>
                    <p className="font-body text-[0.8rem] text-gray-500 mt-0.5">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
