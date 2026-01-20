import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsContactOpen(false)
      }
    }

    if (isContactOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isContactOpen])

  return (
    <>
      <header className={`main-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container navbar">
          <a className="brand" href="#home">
            {/* <img src={logo} alt="Boys Sporting Club logo" /> */}
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
            <button className="btn-primary" onClick={() => setIsContactOpen(true)}>
              Contact us
            </button>
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

      {isContactOpen && (
        <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Contact details"
          onClick={() => setIsContactOpen(false)}
        >
          <div className="contact-modal" onClick={(event) => event.stopPropagation()}>
            <div className="contact-modal-header">
              <h3>Contact Details</h3>
              <button
                type="button"
                className="contact-modal-close"
                aria-label="Close contact modal"
                onClick={() => setIsContactOpen(false)}
              >
                ×
              </button>
            </div>
            <div className="contact-modal-body">
              <div>
                <h4>Dada Boudi Hotel</h4>
                <p>1, Ghoshpara Rd, Barrackpore, West Bengal 700120</p>
                <p>Phone: 8100510647</p>
                <p>Email: dadaboudiofficial@gmail.com</p>
              </div>
              <div>
                <h4>Dada Boudi Restaurant</h4>
                <p>12, 10, SN Banerjee Rd, Barrackpore, West Bengal 700120</p>
                <p>Phone: 8017099986</p>
              </div>
              <div>
                <h4>Dada Boudi Sodepur</h4>
                <p>33, Barrackpore Trunk Rd, Sodepur, West Bengal 700117</p>
                <p>Phone: 9748528886</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
