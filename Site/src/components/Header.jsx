import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import companyLogo from '../assets/logos/company-logo.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (menuRef.current?.contains(event.target) || toggleRef.current?.contains(event.target)) {
        return
      }

      closeMenu()
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 900) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/">
          <img src={companyLogo} alt="Vighna Infra Projects" className="brand-logo" />
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          ref={toggleRef}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <svg
            className={menuOpen ? 'nav-toggle-icon nav-toggle-icon-open' : 'nav-toggle-icon'}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <line className="nav-toggle-line nav-toggle-line-top" x1="5" y1="7" x2="19" y2="7" />
            <line className="nav-toggle-line nav-toggle-line-mid" x1="5" y1="12" x2="19" y2="12" />
            <line className="nav-toggle-line nav-toggle-line-bot" x1="5" y1="17" x2="19" y2="17" />
          </svg>
        </button>

        <div
          ref={menuRef}
          className={menuOpen ? 'nav-panel nav-panel-open' : 'nav-panel'}
          aria-hidden={!menuOpen}
        >
          <nav id="primary-navigation" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    reloadDocument={item.to === '/gallery'}
                    className={({ isActive }) =>
                      isActive ? 'nav-link nav-link-active' : 'nav-link'
                    }
                    end={item.to === '/'}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>


        </div>
      </div>
    </header>
  )
}

export default Header
