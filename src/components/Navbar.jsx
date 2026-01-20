import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`main-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar">
        <a className="brand" href="#home">
          <img src={logo} alt="Boys Sporting Club logo" />
          <span className="brand-title">
            দমদম বয়েজ
            <br />
            স্পোর্টিং ক্লাব
          </span>

        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>
          <a href="#story" onClick={() => setMenuOpen(false)}>
            Our Story
          </a>
          <a href="#awards" onClick={() => setMenuOpen(false)}>
            Awards
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
           Gallery
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="nav-actions">
          <button className="btn-primary">Contact us</button>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
