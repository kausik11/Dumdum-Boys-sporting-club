$(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const $nav = $(".glass-nav")
  const $win = $(window)

  const onScroll = () => {
    $nav.toggleClass("scrolled", $win.scrollTop() > 40)
  }
  onScroll()
  $win.on("scroll", onScroll)

  let lenis = null
  if (!prefersReduced && window.Lenis) {
    lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  $("a[data-scroll]").on("click", function (event) {
    const target = $(this).attr("href")
    if (target && target.startsWith("#")) {
      event.preventDefault()
      const el = document.querySelector(target)
      if (!el) return
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 })
      } else {
        $("html, body").animate({ scrollTop: $(el).offset().top - 80 }, 600)
      }
    }
  })

  const sections = document.querySelectorAll("section[id], header[id]")
  const navLinks = document.querySelectorAll(".nav-link[data-link]")
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active"))
            const active = document.querySelector(`.nav-link[data-link='${entry.target.id}']`)
            if (active) active.classList.add("active")
          }
        })
      },
      { threshold: 0.55 }
    )
    sections.forEach((section) => observer.observe(section))
  }

  if (!prefersReduced && window.Rellax && window.innerWidth > 991) {
    new Rellax(".rellax", {
      speed: -2,
      center: true,
    })
  }

  if (window.AOS && !prefersReduced) {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    })
  }

  if (window.gsap && window.ScrollTrigger && !prefersReduced) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".hero-title", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    })
    gsap.from(".hero-subtitle", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    })

    gsap.utils.toArray(".parallax-float").forEach((el) => {
      gsap.to(el, {
        y: -40,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      })
    })

    if (window.innerWidth > 991) {
      ScrollTrigger.create({
        trigger: "#showcase",
        start: "top top+=120",
        end: "+=420",
        pin: ".showcase-copy",
        pinSpacing: true,
      })
    }
  }

  if (window.Swiper) {
    new Swiper(".brand-swiper", {
      slidesPerView: 2,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        640: { slidesPerView: 3 },
        992: { slidesPerView: 5 },
      },
    })

    new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
      breakpoints: {
        992: { slidesPerView: 2 },
      },
    })
  }

  if ($.fn.magnificPopup) {
    $(".portfolio-grid").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: { enabled: true },
      removalDelay: 300,
      mainClass: "mfp-fade",
    })
  }

  $("#billingToggle").on("change", function () {
    const isYearly = $(this).is(":checked")
    $(".price-value").each(function () {
      const $el = $(this)
      const nextValue = isYearly ? $el.data("yearly") : $el.data("monthly")
      $el.fadeOut(200, function () {
        $el.text(nextValue).fadeIn(200)
      })
    })
    $(".billing-label").text(isYearly ? "Yearly" : "Monthly")
  })

  $("#contactForm").on("submit", function (event) {
    event.preventDefault()
    const form = this
    const $form = $(form)
    const email = $form.find("input[type='email']").val().trim()
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!emailValid || !form.checkValidity()) {
      form.classList.add("was-validated")
      return
    }

    form.classList.remove("was-validated")
    form.reset()

    const toastEl = document.getElementById("contactToast")
    if (toastEl && window.bootstrap) {
      const toast = new bootstrap.Toast(toastEl)
      toast.show()
    }
  })

  if (!prefersReduced) {
    $(".magnetic").each(function () {
      const $btn = $(this)
      $btn.on("mousemove", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        $btn.find("span").css("transform", `translate(${x * 0.15}px, ${y * 0.15}px)`)
      })
      $btn.on("mouseleave", function () {
        $btn.find("span").css("transform", "translate(0, 0)")
      })
    })
  }

  if (window.lottie) {
    lottie.loadAnimation({
      container: document.getElementById("lottie-icon"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets10.lottiefiles.com/packages/lf20_qm8eqzse.json",
    })
  }
})
