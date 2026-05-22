
const items: string[] = [
  'Web Design',
  'App Design',
  'Dashboard',
  'Strategy',
  'Next.js',
  'React.js',
  'Frontend Dev',
  'API Integration',
]

export default function Ticker() {
  const marqueeItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden relative z-10 -mt-[30px] mb-5 bg-transparent">
      <div className="bg-brand-dark py-3.5 sm:py-5 -rotate-[1.5deg] scale-[1.02] flex whitespace-nowrap shadow-[0_10px_30px_rgba(10,10,13,0.15)]">
        <div className="flex items-center animate-marquee w-max">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center font-head font-bold text-lg sm:text-2xl text-white uppercase tracking-wider">
              <span>{item}</span>
              <span className="mx-4 sm:mx-[30px] text-white/60 text-base sm:text-xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
