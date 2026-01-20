import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="main-header">
      <div className="container navbar">
        <a className="brand" href="#home">
          {/* <img
            src="https://www.dadaboudihotel.in/static/media/dadaboudi-logo.333dd17ffe57d59eb586.png"
            alt="Dada Boudi Hotel"
          /> */}
          <span>Boys Sporting Club</span>
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
          <a href="#locations" onClick={() => setMenuOpen(false)}>
            Location
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className="nav-actions">
          {/* <button className="btn-primary">Order Now</button> */}
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
