
interface StatItem {
  label: string
  value: string
}

const statsData: StatItem[] = [
  {
    label: 'EXPERIENCE',
    value: '1 Year',
  },
  {
    label: 'FEATURED PROJECTS',
    value: '3+ Built',
  },
  {
    label: 'TECH STACK',
    value: 'React / Next.js',
  },
]

export default function Stats() {
  return (
    <section className="bg-brand-dark py-[60px] border-t border-b border-brand-darkoffset">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[30px] md:gap-[40px]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center pl-0 md:pl-5 border-l-0 md:border-l border-brand-darkoffset first:border-l-0 first:pl-0 pb-5 md:pb-0 border-b md:border-b-0 border-brand-darkoffset last:border-b-0 last:pb-0 reveal"
          >
            <span className="font-head text-[0.8rem] font-bold tracking-widest text-brand-accent2 uppercase">
              {stat.label}
            </span>
            <h3 className="font-head text-4xl sm:text-[2.8rem] font-extrabold text-white mt-2 leading-none tracking-tight">
              {stat.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
