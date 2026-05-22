import { useState, useEffect } from 'react'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 flex items-center transition-all duration-300 ${
          mobileMenuOpen
            ? 'h-[75px] bg-transparent border-b-transparent shadow-none'
            : scrolled
              ? 'h-[75px] bg-white/95 border-b border-gray-200 shadow-sm'
              : 'h-[90px] bg-white/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className={`font-head text-2xl font-extrabold text-brand-dark tracking-tight transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            Muthujothi<span className="text-brand-accent1">.com</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-body text-[0.95rem] font-medium text-gray-500 hover:text-brand-dark relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-accent1 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action & Mobile toggle */}
          <div className="flex items-center gap-5">
            {/* Custom Solid Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 font-head font-bold text-xs tracking-wider rounded-full text-white bg-brand-dark hover:bg-brand-accent1 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              GET IN TOUCH
            </a>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col justify-between w-6 h-4.5 md:hidden z-50 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`h-[2px] w-full bg-brand-dark rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-brand-dark rounded-full transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`h-[2px] w-full bg-brand-dark rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Menu Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[1px] md:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 ${
          mobileMenuOpen ? 'right-0' : '-right-full'
        } w-[80%] max-w-[320px] h-screen bg-white shadow-2xl flex flex-col p-[120px_40px] gap-8 transition-all duration-300 md:hidden z-40`}
      >
        <ul className="flex flex-col gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-xl font-medium text-gray-500 hover:text-brand-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu CTA at the bottom */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center px-6 py-3 font-head font-bold text-xs tracking-wider rounded-full text-white bg-brand-dark hover:bg-brand-accent1 transition-all duration-300"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </>
  )
}
