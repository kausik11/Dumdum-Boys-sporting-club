import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import './App.css'
import Navbar from './components/Navbar'
import OnePageScroll from './components/OnePageScroll'
import heroImage2 from './assets/heroImage2.jpeg'
import heroVideo from './assets/heroVideo.mp4'
import fullpage1 from './assets/fullpage1.jpeg'
import fullpage2 from './assets/fullpage2.jpeg'
import fullpage3 from './assets/fullpage3.jpeg'
import heroImage1 from './assets/heroImage1.jpeg'
import ongoing1 from './assets/ongoing1.jpg'

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

const galleryImages = [
  {
    src: fullpage1,
    caption: 'শুভ্রতার আলোয় জ্ঞানের উৎসব',
  },
  {
    src: fullpage2,
    caption: 'মহাশ্বেতার শুদ্ধ রূপ',
  },
  {
    src: fullpage3,
    caption: 'আনন্দের রঙে সাজানো সন্ধ্যা',
  },
  {
    src: heroImage1,
    caption: 'ঐতিহ্যের ছোঁয়ায় নতুন সকাল',
  },
  {
    src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    caption: 'নব প্রভাতে শুভ সূচনা',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    caption: 'আলো-ছায়ায় উৎসবের ছোঁয়া',
  },
  {
    src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    caption: 'সুরের মূর্ছনায় সারস সাদা',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    caption: 'সন্ধ্যার আকাশে শান্তি',
  },
]

const videoSlides = [
  {
    title: '2026',
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1915028685766318%2F&show_text=false&width=380&t=0',
  },
  {
    title: '2025',
    src: 'https://www.facebook.com/plugins/video.php?height=448&href=https%3A%2F%2Fwww.facebook.com%2Fboyssportingclub%2Fvideos%2F998575524414707%2F&show_text=false&width=560&t=0',
  },
  {
    title: '2024',
    src: 'https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fboyssportingclub%2Fvideos%2F3530572460401863%2F&show_text=false&width=560&t=0',
  },
  {
    title: 'Facebook Reel 2',
    src: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1768675153966820%2F&show_text=false&width=267&t=0',
  },
]

function App() {
  const heroBannerRef = useRef(null)
  const ripplesInitializedRef = useRef(false)

  // automatic ripple
  const rippleIntervalRef = useRef(null)

  
  const marqueeRef = useRef(null)
  const galleryRef = useRef(null)
  const videoSliderRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const bestSliderRef = useRef(null)

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

         // 🌊 DEFAULT RIPPLE (ALWAYS RUNNING)
    rippleIntervalRef.current = setInterval(() => {
      try {
        const rect = heroBanner.getBoundingClientRect()
        const x = Math.random() * rect.width
        const y = rect.height * 0.6 + Math.random() * rect.height * 0.4
        $heroBanner.ripples('drop', x, y, 14, 0.03)
      } catch {
        // safe ignore
      }
    }, 2500) // calm divine rhythm
    
    }

    
    const handleTouch = (event) => {
      if (!ripplesInitializedRef.current) {
        return
      }
      const touch = event.touches[0]
      if (!touch) {
        return
      }
      const rect = heroBanner.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top
      try {
        window.jQuery(heroBanner).ripples('drop', x, y, 20, 0.04)
      } catch {
        // Ignore ripples drop errors on unsupported devices.
      }
    }

    // handle pointer
    const handlePointer = (event) => {
  if (!ripplesInitializedRef.current) return

  const rect = heroBanner.getBoundingClientRect()
  const x = event.clientX
    ? event.clientX - rect.left
    : event.touches?.[0]?.clientX - rect.left

  const y = event.clientY
    ? event.clientY - rect.top
    : event.touches?.[0]?.clientY - rect.top

  if (!x || !y) return

  try {
    window.jQuery(heroBanner).ripples('drop', x, y, 20, 0.04)
  } catch {}
}



    img.addEventListener('load', initRipples)
    if (img.complete) {
      initRipples()
    }

    heroBanner.addEventListener('touchstart', handleTouch, { passive: true })

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
      // heroBanner.removeEventListener('touchstart', handleTouch)
      heroBanner.addEventListener('pointerdown', handlePointer, { passive: true })
heroBanner.addEventListener('touchstart', handlePointer, { passive: true })

    }
  }, [])

  useEffect(() => {
    const root = marqueeRef.current
    const $ = window.jQuery
    if (!root || !$) {
      return
    }

    const $track = $(root).find('.carousel-marquee-track')
    const speed = 60
    let rafId = null
    let lastTime = null
    let offsetX = 0

    const buildTrack = () => {
      const original = $track.data('original') || $track.html()
      $track.data('original', original)
      $track.html(original)
      const containerWidth = root.clientWidth || 1

      while ($track[0].scrollWidth < containerWidth * 2) {
        $track.append(original)
      }

      offsetX = 0
      $track.css('transform', 'translate3d(0, 0, 0)')
    }

    const tick = (time) => {
      if (!lastTime) {
        lastTime = time
      }
      const delta = (time - lastTime) / 1000
      lastTime = time
      offsetX -= speed * delta
      const loopWidth = $track[0].scrollWidth / 2
      if (Math.abs(offsetX) >= loopWidth) {
        offsetX = 0
      }
      $track.css('transform', `translate3d(${offsetX}px, 0, 0)`)
      rafId = window.requestAnimationFrame(tick)
    }

    buildTrack()
    rafId = window.requestAnimationFrame(tick)
    $(window).on('resize.carouselMarquee', buildTrack)

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      $(window).off('resize.carouselMarquee')
    }
  }, [])

  useEffect(() => {
    const root = galleryRef.current
    const $ = window.jQuery
    if (!root || !$) {
      return
    }

    const $root = $(root)
    const $overlay = $root.find('.gallery-overlay')
    const $overlayImg = $root.find('.gallery-overlay img')
    const $overlayCaption = $root.find('.gallery-overlay p')

    const openOverlay = (src, caption) => {
      $overlayImg.attr('src', src)
      $overlayCaption.text(caption || '')
      $overlay.addClass('is-open')
    }

    const closeOverlay = () => {
      $overlay.removeClass('is-open')
    }

    $root.on('click.gallery', '.gallery-card', (event) => {
      const $card = $(event.currentTarget)
      openOverlay($card.data('src'), $card.data('caption'))
    })

    $root.on('click.gallery', '.gallery-overlay, .gallery-close', (event) => {
      if ($(event.target).closest('.gallery-frame').length) {
        return
      }
      closeOverlay()
    })

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeOverlay()
      }
    }

    $(window).on('keydown.gallery', handleKeyDown)

    return () => {
      $root.off('.gallery')
      $(window).off('keydown.gallery', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    const root = videoSliderRef.current
    const $ = window.jQuery
    if (!root || !$) {
      return
    }

    const $root = $(root)
    const $track = $root.find('.video-slider-track')
    const $slides = $track.find('.video-slide')
    const $dots = $root.find('.video-dot')
    const total = $slides.length
    let index = 0
    let isLocked = false

    const setActive = (nextIndex) => {
      index = nextIndex
      $track.css('transform', `translate3d(-${index * 100}%, 0, 0)`)
      $dots.removeClass('is-active').eq(index).addClass('is-active')
    }

    const goTo = (nextIndex) => {
      if (isLocked) {
        return
      }
      const bounded = (nextIndex + total) % total
      isLocked = true
      setActive(bounded)
      window.setTimeout(() => {
        isLocked = false
      }, 500)
    }

    $root.on('click.video', '.video-next', () => goTo(index + 1))
    $root.on('click.video', '.video-prev', () => goTo(index - 1))
    $root.on('click.video', '.video-dot', (event) => {
      const target = Number($(event.currentTarget).attr('data-index'))
      if (!Number.isNaN(target)) {
        goTo(target)
      }
    })

    setActive(0)

    return () => {
      $root.off('.video')
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) {
      return
    }

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    })

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (!link) {
        return
      }
      const href = link.getAttribute('href')
      if (!href || href === '#') {
        return
      }
      const target = container.querySelector(href)
      if (!target) {
        return
      }
      event.preventDefault()
      scroll.scrollTo(target)
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      scroll.destroy()
    }
  }, [])

  useEffect(() => {
    const root = bestSliderRef.current
    const $ = window.jQuery
    if (!root || !$) {
      return
    }

    const $root = $(root)
    const $track = $root.find('.best-sellers-track')
    const $slides = $track.find('.best-card')
    if (!$slides.length) {
      return
    }

    let index = 0
    let intervalId = null
    const total = $slides.length
    let visibleCount = 3

    const getVisibleCount = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        return 1
      }
      if (window.matchMedia('(max-width: 1024px)').matches) {
        return 2
      }
      return 3
    }

    const updateVisibleCount = () => {
      visibleCount = getVisibleCount()
      $track.css('transform', `translate3d(-${index * (100 / visibleCount)}%, 0, 0)`)
    }

    const advance = () => {
      const maxIndex = Math.max(total - visibleCount, 0)
      index = index >= maxIndex ? 0 : index + 1
      $track.css('transform', `translate3d(-${index * (100 / visibleCount)}%, 0, 0)`)
    }

    updateVisibleCount()
    intervalId = window.setInterval(advance, 2800)

    $root.on('mouseenter.bestSlider', () => {
      if (intervalId) {
        window.clearInterval(intervalId)
        intervalId = null
      }
    })

    $root.on('mouseleave.bestSlider', () => {
      if (!intervalId) {
        intervalId = window.setInterval(advance, 2800)
      }
    })

    $(window).on('resize.bestSlider', updateVisibleCount)

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId)
      }
      $root.off('.bestSlider')
      $(window).off('resize.bestSlider')
    }
  }, [])

  return (
    <div>
      <Navbar />
      <div data-scroll-container ref={scrollContainerRef}>
      <main data-scroll-section>
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

           <section className="section pujo-theme">
          <div className="container">
            <h2 className="section-title">Saraswati Pujo 2026 · A Theme Inspired by Knowledge</h2>
            <p className="section-subtitle">
              নতুন ভাবনার ছোঁয়ায় উৎসবের সাজ
            </p>
            <div className="pujo-theme-card">
              <img src={ongoing1} alt="This year pujo theme" loading="lazy" />
              <div className="pujo-theme-overlay">
                {/* <span>Ongoing Theme Showcase</span> */}
              </div>
            </div>
          </div>
        </section>




        {/* horizontal image slider */}
        
     <OnePageScroll />
        
        
        <section className="hero hero-video">
          <video
            className="hero-video-media"
            autoPlay
            muted
            loop
            playsInline
            // poster="https://www.dadaboudihotel.in/static/media/hero-slider-1.aa859997652e3d535699.jpg"
          >
            <source
              src={heroVideo}
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

         


       {/* carusal marque */}
       <section className="carousel-marquee" ref={marqueeRef} aria-label="Scrolling marquee">
          <div className="carousel-marquee-track">
            <span className="carousel-marquee-item">
              এবারের নিবেদন-জ্ঞান, পবিত্রতা ও শুভ্রতার প্রতীক মা সরস্বতীর রূপ—মহাশ্বেতা।
            </span>
          </div>
        </section>
       
        <section id="menu" className="section light">
          <div className="container">
            <h2 className="section-title">Best Moments</h2>
            <p className="section-subtitle">
              The Boys sporting club of Dumdum
            </p>
            <div className="best-sellers-slider" ref={bestSliderRef}>
              <div className="best-sellers-track">
                {bestSellers.map((item) => (
                  <div className="best-card" key={item.name}>
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <h4>{item.name}</h4>
                  </div>
                ))}
              </div>
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

        <section id="video-gallery" className="section light">
          <div className="container" ref={videoSliderRef}>
            <h2 className="section-title">Video Gallery</h2>
            <p className="section-subtitle">
              ফেসবুক ভিডিওতে উৎসবের স্মৃতি
            </p>
            <div className="video-slider">
              <button className="video-nav video-prev" type="button" aria-label="Previous video">
                ‹
              </button>
              <div className="video-slider-window">
                <div className="video-slider-track">
                  {videoSlides.map((video) => (
                    <div className="video-slide" key={video.src}>
                      <div className="video-frame">
                        <iframe
                          title={video.title}
                          src={video.src}
                          width="560"
                          height="448"
                          style={{ border: 'none', overflow: 'hidden' }}
                          scrolling="no"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <span className="video-caption">{video.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="video-nav video-next" type="button" aria-label="Next video">
                ›
              </button>
            </div>
            <div className="video-dots" role="tablist" aria-label="Video slides">
              {videoSlides.map((video, idx) => (
                <button
                  key={video.src}
                  type="button"
                  className={`video-dot${idx === 0 ? ' is-active' : ''}`}
                  data-index={idx}
                  aria-label={`Go to video ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section light">
          <div className="container" ref={galleryRef}>
            <h2 className="section-title">Image Gallery</h2>
            <p className="section-subtitle">
            শুভ্রতার আলোয় জ্ঞানের উৎসবের এক ঝলক
            </p>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <button
                  key={image.src}
                  type="button"
                  className="gallery-card"
                  data-src={image.src}
                  data-caption={image.caption}
                >
                  <img src={image.src} alt={image.caption} loading="lazy" />
                  <span>{image.caption}</span>
                </button>
              ))}
            </div>
            <div className="gallery-overlay" aria-hidden="true">
              <div className="gallery-frame">
                <button className="gallery-close" type="button" aria-label="Close gallery">
                  ×
                </button>
                <img src={galleryImages[0].src} alt="Gallery preview" />
                <p>{galleryImages[0].caption}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer" data-scroll-section>
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

      <div className="bottom-tab" data-scroll-section>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#story">Story</a>
        <a href="#locations">Location</a>
      </div>
      </div>
    </div>
  )
}

export default App
