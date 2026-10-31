import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
const links = [
  ['home', 'Home'],
  ['about', 'About Me'],
  ['skills', 'Skills'],
  ['hobbies', 'Hobbies'],
  ['projects', 'Projects'],
  ['goals', 'Goals'],
  ['contact', 'Contact'],
]
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )
    document
      .querySelectorAll('section[id]')
      .forEach((section) => observer.observe(section))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      observer.disconnect()
      document.removeEventListener('keydown', onKey)
    }
  }, [])
  return (
    <header className="site-header">
      <div className="nav-inner section-wrap">
        <a className="brand" href="/#home" onClick={() => setOpen(false)}>
          BEYOND<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? 'is-open' : ''}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              className={`${active === id ? 'active' : ''} ${id === 'contact' ? 'nav-contact' : ''}`}
              href={`/#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              {id === 'contact' && <ArrowUpRight size={14} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
