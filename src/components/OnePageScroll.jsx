import { useEffect, useRef } from 'react'
import './OnePageScroll.css'

import fullpage1 from '../assets/fullpage1.jpeg'
import fullpage2 from '../assets/fullpage2.jpeg'
import fullpage3 from '../assets/fullpage3.jpeg'
import heroImage1 from '../assets/heroImage1.jpeg'

const slides = [
  {
  id: 'intro',
  title: 'আমাদের পথচলার শুরু',
 subtitle: 'দমদম বয়েজ স্পোর্টিং ক্লাবের ঐতিহ্য ও সংস্কৃতির ধারাবাহিকতা',
  description:
    'এইখান থেকেই শুরু আমাদের পথচলা—ঐতিহ্যকে সঙ্গে নিয়ে, নতুন প্রজন্মের ভাবনায় এগিয়ে চলা এক পূজা কমিটির গল্প।',
  cta: 'Next chapter',
  image: fullpage1,
},
  {
    id: 'motion',
   title: 'ছন্দ ও গতির গল্প',
  subtitle: 'আলো, গতি ও আবেগের মেলবন্ধন',
  description:
    'ভাবনায় শিল্প, নকশায় শুদ্ধতা। সরস্বতী পূজার মণ্ডপ সজ্জায় ব্যবহার করা হয়েছে ঐতিহ্যবাহী নকশা ও আধুনিকশিল্পভাবনার সংমিশ্রণ, যা দর্শনার্থীদের নিয়ে যায় এক শান্ত ও পবিত্র অনুভূতির জগতে।',
    cta: 'Keep going',
    image: fullpage2,
  },
  {
    id: 'focus',
    title: 'আলোর কেন্দ্রে আমাদের গল্প',
  subtitle: 'স্পষ্ট ভাবনা, দৃঢ় বার্তা',
  description:
    'মা সরস্বতীর আরাধনাকে কেন্দ্র করে নির্মিত আমাদের মণ্ডপ—যেখানে আলো, রং ও অলংকরণের প্রতিটি উপাদান ভক্তি, জ্ঞান ও সংস্কৃতির বার্তা বহন করে।',
    cta: 'Final scene',
    image: fullpage3,
  },
  {
    id: 'final',
   title: 'আশীর্বাদের পরিপূর্ণতা',
  subtitle: 'পূজা, প্রসাদ ও বিদায়',
  description:
    'সরলতায় সৌন্দর্য—আলো ও পরিমিত নকশায় সাজানো সরস্বতী পূজার মণ্ডপ, যা শান্তি, জ্ঞান ও সৃষ্টিশীলতার অনুভূতি জাগিয়ে তোলে।',
    cta: 'Back to top',
    image: heroImage1,
  },
]

function OnePageScroll() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const $ = window.jQuery
    if (!root || !$) {
      return
    }

    const $root = $(root)
    const $container = $root.find('.ops-container')
    const $sections = $container.find('.ops-section')
    const $dots = $root.find('.ops-dot')
    const transitionMs = 900
    let currentIndex = 0
    let isLocked = false

    const applyParallax = () => {
      $sections.each((sectionIndex, section) => {
        const offset = (sectionIndex - currentIndex) * 100
        $(section)
          .find('[data-depth]')
          .each((_, layer) => {
            const depth = Number(layer.getAttribute('data-depth')) || 0.2
            layer.style.transform = `translate3d(0, ${offset * depth}vh, 0)`
          })
      })
    }

    const isRootActive = () => {
      const rect = root.getBoundingClientRect()
      return (
        rect.top <= window.innerHeight * 0.25 &&
        rect.bottom >= window.innerHeight * 0.75
      )
    }

    const setActive = (index) => {
      currentIndex = index
      $container.css('transform', `translate3d(0, -${index * 100}vh, 0)`)
      $sections.removeClass('is-active').eq(index).addClass('is-active')
      $dots.removeClass('is-active').eq(index).addClass('is-active')
      $root.attr('data-active-index', String(index))
      applyParallax()
    }

    const goTo = (index) => {
      if (isLocked || index < 0 || index >= $sections.length) {
        return
      }
      isLocked = true
      setActive(index)
      window.setTimeout(() => {
        isLocked = false
      }, transitionMs)
    }

    const handleWheel = (event) => {
      const delta = event.originalEvent.deltaY
      if (
        (delta > 0 && currentIndex >= $sections.length - 1) ||
        (delta < 0 && currentIndex <= 0)
      ) {
        return
      }
      event.preventDefault()
      goTo(currentIndex + (delta > 0 ? 1 : -1))
    }

    const handleWindowWheel = (event) => {
      if (!isRootActive()) {
        return
      }
      const delta = event.deltaY || 0
      const atFirst = currentIndex <= 0
      const atLast = currentIndex >= $sections.length - 1

      event.preventDefault()
    }

    let touchStartY = 0
    const touchThreshold = 40

    const handleTouchStart = (event) => {
      if (!isRootActive()) {
        return
      }
      const touch = event.touches?.[0]
      if (!touch) {
        return
      }
      touchStartY = touch.clientY
    }

    const handleTouchMove = (event) => {
      if (!isRootActive()) {
        return
      }
      const touch = event.touches?.[0]
      if (!touch) {
        return
      }

      const delta = touch.clientY - touchStartY
      const atFirst = currentIndex <= 0
      const atLast = currentIndex >= $sections.length - 1

      if (Math.abs(delta) < touchThreshold) {
        event.preventDefault()
        return
      }

      if (delta < 0 && !atLast) {
        event.preventDefault()
        goTo(currentIndex + 1)
        touchStartY = touch.clientY
      } else if (delta > 0 && !atFirst) {
        event.preventDefault()
        goTo(currentIndex - 1)
        touchStartY = touch.clientY
      } else {
        event.preventDefault()
      }
    }

    const handleKeyDown = (event) => {
      if (!isRootActive()) {
        return
      }
      if (event.key === 'Home') {
        event.preventDefault()
        goTo(0)
        return
      }
      if (event.key === 'End') {
        event.preventDefault()
        goTo($sections.length - 1)
        return
      }
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        if (currentIndex < $sections.length - 1) {
          event.preventDefault()
          goTo(currentIndex + 1)
        }
        return
      }
      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        if (currentIndex > 0) {
          event.preventDefault()
          goTo(currentIndex - 1)
        }
      }
    }

    const handleJump = (event) => {
      event.preventDefault()
      const target = Number($(event.currentTarget).attr('data-ops-target'))
      if (!Number.isNaN(target)) {
        goTo(target)
      }
    }

    $root.on('wheel.ops', handleWheel)
    $root.on('click.ops', '.ops-dot', handleJump)
    $root.on('click.ops', '.ops-cta', handleJump)
    $(window).on('keydown.ops', handleKeyDown)
    window.addEventListener('wheel', handleWindowWheel, { passive: false })
    root.addEventListener('touchstart', handleTouchStart, { passive: true })
    root.addEventListener('touchmove', handleTouchMove, { passive: false })

    setActive(0)

    return () => {
      $root.off('.ops')
      $(window).off('.ops')
      window.removeEventListener('wheel', handleWindowWheel)
      root.removeEventListener('touchstart', handleTouchStart)
      root.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <section
      className="ops-root"
      ref={rootRef}
      aria-label="One page parallax scroll demo"
    >
      <div className="ops-ui">
        {/* <div className="ops-title">One Page Parallax</div> */}
        <div className="ops-nav">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`ops-dot${index === 0 ? ' is-active' : ''}`}
              data-ops-target={index}
              type="button"
            >
              <span>{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="ops-container">
        {slides.map((slide, index) => (
          <section
            key={slide.id}
            className={`ops-section ops-section--${index + 1}${
              index === 0 ? ' is-active' : ''
            }`}
            data-index={index}
          >
            <div
              className="ops-layer ops-layer--bg"
              data-depth="0.12"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <div className="ops-layer ops-layer--glow" data-depth="0.24" />
            <div className="ops-content">
              <span className="ops-kicker">{slide.subtitle}</span>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button
                className="ops-cta"
                type="button"
                data-ops-target={index === slides.length - 1 ? 0 : index + 1}
              >
                {slide.cta}
              </button>
              <img
                className="ops-mobile-image"
                src={slide.image}
                alt={slide.title}
                loading="lazy"
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default OnePageScroll
