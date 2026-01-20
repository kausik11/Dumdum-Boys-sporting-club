import { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import heroImage2 from './assets/heroImage2.jpeg'

const bestSellers = [
  {
    name: 'aaaaaaa',
    image: 'https://www.dadaboudihotel.in/static/media/best1.f6c0c5c4ca53146e2af8.jpg',
  },
  {
    name: 'bbbbb',
    image: 'https://www.dadaboudihotel.in/static/media/best2.5142b8148f46ea91ecc4.jpg',
  },
  {
    name: 'ccccc',
    image: 'https://www.dadaboudihotel.in/static/media/best3.803871da10919f1173c3.jpg',
  },
  {
    name: 'ddddd',
    image: 'https://www.dadaboudihotel.in/static/media/best4.357b176e26b5c5f40009.jpg',
  },
]

const awards = [
  {
    title: 'Heritage Taste Award',
    year: '2023',
    description: 'Recognized for preserving Barrackpore culinary legacy.',
  },
  {
    title: 'Best Biryani in Bengal',
    year: '2022',
    description: 'Celebrated for our signature aromatic recipe.',
  },
  {
    title: 'Hospitality Excellence',
    year: '2021',
    description: 'Honoring our warm, family-first service.',
  },
]

const locations = [
  {
    name: 'Dada Boudi Hotel',
    address: '1, Ghoshpara Rd, Barrackpore, West Bengal 700120',
    phone: '8100510647',
    image: 'https://www.dadaboudihotel.in/static/media/dadaboudi-front.627e4fca20ec0a5334a3.jpg',
  },
  {
    name: 'Dada Boudi Restaurant',
    address: '12, 10, SN Banerjee Rd, Barrackpore, West Bengal 700120',
    phone: '8017099986',
    image: 'https://www.dadaboudihotel.in/static/media/dadaboudi-restaurant.6228d74e60010b751fac.jpg',
  },
  {
    name: 'Dada Boudi Sodepur',
    address: '33, Barrackpore Trunk Rd, Sodepur, West Bengal 700117',
    phone: '9748528886',
    image: 'https://www.dadaboudihotel.in/static/media/dadaboudi-soadpur.9aa4298572190cf9a65e.jpg',
  },
]

function App() {
  const heroBannerRef = useRef(null)
  const ripplesInitializedRef = useRef(false)

  useEffect(() => {
    const heroBanner = heroBannerRef.current
    if (!heroBanner || !window.jQuery || !window.jQuery.fn.ripples) {
      return
    }

    const img = new Image()
    img.src = heroImage2

    const initRipples = () => {
      if (ripplesInitializedRef.current) {
        return
      }
      const $heroBanner = window.jQuery(heroBanner)
      $heroBanner.ripples({
        resolution: 768,
        dropRadius: 18,
        perturbance: 0.02,
      })
      ripplesInitializedRef.current = true
    }

    img.addEventListener('load', initRipples)
    if (img.complete) {
      initRipples()
    }

    return () => {
      try {
        if (ripplesInitializedRef.current) {
          window.jQuery(heroBanner).ripples('destroy')
          ripplesInitializedRef.current = false
        }
      } catch {
        // Ignore cleanup errors if plugin fails to init.
      }
      img.removeEventListener('load', initRipples)
    }
  }, [])

  return (
    <div>
      <Navbar />

      <main>
        {/* hero banner image section */}
        <section id="home" 
          className="hero-banner"
          ref={heroBannerRef}
          style={{ backgroundImage: `url(${heroImage2})` }}
          role="img"
          aria-label="Hero banner"
        >
          <p className="hero-banner-title">"||সরস্বতী মহাভাগে বিদ্যে কমললোচনে। বিশ্বরূপে বিশালাক্ষি বিদ্যাং দেহি নমোঽস্তু তে॥"</p>
        </section>

{/* horizontal image slider */}
      
        <section className="hero hero-video">
          <video
            className="hero-video-media"
            autoPlay
            muted
            loop
            playsInline
            poster="https://www.dadaboudihotel.in/static/media/hero-slider-1.aa859997652e3d535699.jpg"
          >
            <source
              src="https://www.w3schools.com/howto/rain.mp4"
              type="video/mp4"
            />
          </video>
          <div className="hero-video-overlay"></div>
          <div className="container hero-inner hero-video-content">
            <div>
              <div className="hero-tag">
                Barrackpore's Iconic Biryani · ব্যারাকপুরের ঐতিহ্যবাহী বিরিয়ানি
              </div>
              <h1>Heritage flavors, served with family warmth.</h1>
              <p>
                Dada Boudi Hotel is the legendary biryani destination of
                Barrackpore. Experience rich spices, slow-cooked aromas, and a
                legacy that spans generations.
                <br />
                স্বাদের ঐতিহ্য, আতিথেয়তার উষ্ণতা।
              </p>
              <button className="btn-primary">Explore the Menu</button>
            </div>
          </div>
        </section>

        <section id="menu" className="section light">
          <div className="container">
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">
              Signature dishes that define the Dada Boudi story and keep the
              city coming back.
            </p>
            <div className="best-sellers">
              {bestSellers.map((item) => (
                <div className="best-card" key={item.name}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="story">
          <div className="container">
            <div className="story-panel">
              <h2 className="section-title">Our Story</h2>
              <p>
                What began as a humble kitchen in Barrackpore has grown into a
                beloved culinary landmark. Every plate is a tribute to Dada
                Boudi's original recipes, handcrafted with patience and pride.
              </p>
              <button className="btn-primary">Read More</button>
            </div>
          </div>
        </section>

        <section id="awards" className="section">
          <div className="container">
            <h2 className="section-title">Awards & Recognitions</h2>
            <p className="section-subtitle">
              Celebrated for flavor, hospitality, and the cultural legacy of
              Dada Boudi Hotel.
            </p>
            <div className="awards-grid">
              {awards.map((award) => (
                <div className="award-card" key={award.title}>
                  <span>{award.year}</span>
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="section light">
          <div className="container">
            <h2 className="section-title">All Locations</h2>
            <p className="section-subtitle">
              Visit us across Barrackpore and Sodepur for the same authentic
              experience.
            </p>
            <div className="locations">
              {locations.map((location) => (
                <div className="location-card" key={location.name}>
                  <img src={location.image} alt={location.name} loading="lazy" />
                  <div className="content">
                    <h3>{location.name}</h3>
                    <p>{location.address}</p>
                    <p>
                      <strong>Contact:</strong>{' '}
                      <a href={`tel:${location.phone}`}>{location.phone}</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Dada Boudi Hotel</h4>
            <p>Legendary biryani from the heart of Barrackpore.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>Menu</li>
              <li>Our Story</li>
              <li>Catering</li>
              <li>Location</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Phone: 8100510647</li>
              <li>Email: dadaboudiofficial@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Fb
              </a>
              <a href="#" aria-label="Instagram">
                Ig
              </a>
              <a href="#" aria-label="YouTube">
                Yt
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottom-tab">
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#story">Story</a>
        <a href="#locations">Location</a>
      </div>
    </div>
  )
}

export default App
