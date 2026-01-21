import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css";
import Navbar from "./components/Navbar";
import OnePageScroll from "./components/OnePageScroll";
import heroImage2 from "./assets/heroImage2.jpeg";
import heroVideo from "./assets/heroVideo.mp4";
import fullpage1 from "./assets/fullpage1.jpeg";
import fullpage2 from "./assets/fullpage2.jpeg";
import fullpage3 from "./assets/fullpage3.jpeg";
import heroImage1 from "./assets/heroImage1.jpeg";
import ongoing1 from "./assets/ongoing1.jpg";
import galleryImage1 from "./assets/gallery/1.jpeg";
import galleryImage2 from "./assets/gallery/3 (1).jpeg";
import galleryImage3 from "./assets/gallery/3 (10).jpeg";
import galleryImage4 from "./assets/gallery/3 (11).jpeg";
import galleryImage5 from "./assets/gallery/3 (12).jpeg";
import galleryImage6 from "./assets/gallery/3 (13).jpeg";
import galleryImage7 from "./assets/gallery/3 (14).jpeg";
import galleryImage8 from "./assets/gallery/3 (15).jpeg";
import galleryImage9 from "./assets/gallery/3 (16).jpeg";
import galleryImage10 from "./assets/gallery/3 (17).jpeg";
import galleryImage11 from "./assets/gallery/3 (18).jpeg";
import galleryImage12 from "./assets/gallery/3 (19).jpeg";
import galleryImage13 from "./assets/gallery/3 (2).jpeg";
import galleryImage14 from "./assets/gallery/3 (20).jpeg";
import galleryImage15 from "./assets/gallery/3 (21).jpeg";
import galleryImage16 from "./assets/gallery/3 (22).jpeg";
import galleryImage17 from "./assets/gallery/3 (23).jpeg";
import galleryImage18 from "./assets/gallery/3 (24).jpeg";
import galleryImage19 from "./assets/gallery/3 (25).jpeg";
import galleryImage20 from "./assets/gallery/3 (26).jpeg";
import galleryImage21 from "./assets/gallery/3 (27).jpeg";
import galleryImage22 from "./assets/gallery/3 (28).jpeg";
import galleryImage23 from "./assets/gallery/3 (29).jpeg";
import galleryImage24 from "./assets/gallery/3 (3).jpeg";
import galleryImage25 from "./assets/gallery/3 (30).jpeg";
import galleryImage26 from "./assets/gallery/3 (31).jpeg";
import galleryImage27 from "./assets/gallery/3 (32).jpeg";
import galleryImage28 from "./assets/gallery/3 (33).jpeg";
import galleryImage29 from "./assets/gallery/3 (34).jpeg";
import galleryImage30 from "./assets/gallery/3 (4).jpeg";
import galleryImage31 from "./assets/gallery/3 (5).jpeg";
import galleryImage32 from "./assets/gallery/3 (6).jpeg";
import galleryImage33 from "./assets/gallery/3 (7).jpeg";
import galleryImage34 from "./assets/gallery/3 (8).jpeg";
import galleryImage35 from "./assets/gallery/3 (9).jpeg";
import galleryImage36 from "./assets/gallery/3(35).jpeg";
import galleryImage37 from "./assets/gallery/3(36).jpeg";
import galleryImage38 from "./assets/gallery/3(38).jpeg";
import galleryImage39 from "./assets/gallery/3(39).jpeg";
import galleryImage40 from "./assets/gallery/3(40).jpeg";
import galleryImage41 from "./assets/gallery/3(41).jpeg";
import galleryImage42 from "./assets/gallery/3(42).jpeg";
import galleryImage43 from "./assets/gallery/3(43).jpeg";
import galleryImage44 from "./assets/gallery/3(44).jpeg";
import galleryImage45 from "./assets/gallery/3(45).jpeg";
import galleryImage46 from "./assets/gallery/3(46).jpeg";
import galleryImage47 from "./assets/gallery/3(47).jpeg";
import galleryImage48 from "./assets/gallery/3(48).jpeg";
import galleryImage49 from "./assets/gallery/3(49).jpeg";
import galleryImage50 from "./assets/gallery/3(50).jpeg";
import galleryImage51 from "./assets/gallery/3(51).jpeg";
import galleryImage52 from "./assets/gallery/3(52).jpeg";
import galleryImage53 from "./assets/gallery/3(53).jpeg";

import bestMoment1 from "./assets/Best_moments/1.jpeg";
import bestMoment2 from "./assets/Best_moments/2.jpeg";
import bestMoment3 from "./assets/Best_moments/3.jpeg";
import bestMoment4 from "./assets/Best_moments/4.jpeg";
import bestMoment5 from "./assets/Best_moments/5.jpeg";
import bestMoment6 from "./assets/Best_moments/6.jpeg";
import bestMoment7 from "./assets/Best_moments/7.jpeg";
import bestMoment8 from "./assets/Best_moments/8.jpeg";
import bestMoment9 from "./assets/Best_moments/9.jpeg";
import bestMoment10 from "./assets/Best_moments/10.jpeg";
import bestMoment11 from "./assets/Best_moments/11.jpeg";
import bestMoment12 from "./assets/Best_moments/12.jpeg";

const bestSellers = [
  {
    name: "Youth Spirit",
    image: bestMoment12,
  },
  {
    name: "Community United",
    image: bestMoment1,
  },
  {
    name: "Club Unity",
    image: bestMoment2,
  },
  {
    name: "One Shared Vision",
    image: bestMoment3,
  },
  {
    name: "Tradition and Togetherness",
    image: bestMoment4,
  },
  {
    name: "Cultural Harmony",
    image: bestMoment5,
  },
  {
    name: "Festival Lights",
    image: bestMoment6,
  },
  {
    name: "Community Joy",
    image: bestMoment7,
  },
  {
    name: "Youth Spirit",
    image: bestMoment8,
  },
  {
    name: "Blessed Moments",
    image: bestMoment9,
  },
  {
    name: "Saraswati Puja",
    image: bestMoment10,
  },
  {
    name: "Sacred Smiles",
    image: bestMoment11,
  },
];

// const awards = [
//   {
//     title: "Heritage Taste Award",
//     year: "2023",
//     description: "Recognized for preserving Barrackpore culinary legacy.",
//   },
//   {
//     title: "Best Biryani in Bengal",
//     year: "2022",
//     description: "Celebrated for our signature aromatic recipe.",
//   },
//   {
//     title: "Hospitality Excellence",
//     year: "2021",
//     description: "Honoring our warm, family-first service.",
//   },
// ];

// const locations = [
//   {
//     name: "Dada Boudi Hotel",
//     address: "1, Ghoshpara Rd, Barrackpore, West Bengal 700120",
//     phone: "8100510647",
//     image:
//       "https://www.dadaboudihotel.in/static/media/dadaboudi-front.627e4fca20ec0a5334a3.jpg",
//   },
//   {
//     name: "Dada Boudi Restaurant",
//     address: "12, 10, SN Banerjee Rd, Barrackpore, West Bengal 700120",
//     phone: "8017099986",
//     image:
//       "https://www.dadaboudihotel.in/static/media/dadaboudi-restaurant.6228d74e60010b751fac.jpg",
//   },
//   {
//     name: "Dada Boudi Sodepur",
//     address: "33, Barrackpore Trunk Rd, Sodepur, West Bengal 700117",
//     phone: "9748528886",
//     image:
//       "https://www.dadaboudihotel.in/static/media/dadaboudi-soadpur.9aa4298572190cf9a65e.jpg",
//   },
// ];

const galleryImages = [
   {
    src: galleryImage22,
    caption: "Gallery moment 22",
  },
  
  {
    src: galleryImage28,
    caption: "Gallery moment 38",
  },
  
  {
    src: galleryImage2,
    caption: "Gallery moment 2",
  },
  {
    src: galleryImage3,
    caption: "Gallery moment 3",
  },
  {
    src: galleryImage39,
    caption: "Gallery moment 48",
  },
  
  {
    src: galleryImage23,
    caption: "Gallery moment 23",
  },
  
  {
    src: galleryImage6,
    caption: "Gallery moment 6",
  },
   {
    src: galleryImage40,
    caption: "Gallery moment 40",
  },
  
  {
    src: galleryImage8,
    caption: "Gallery moment 8",
  },
  {
    src: galleryImage9,
    caption: "Gallery moment 9",
  },
  {
    src: galleryImage10,
    caption: "Gallery moment 10",
  },
  {
    src: galleryImage11,
    caption: "Gallery moment 11",
  },
  {
    src: galleryImage12,
    caption: "Gallery moment 12",
  },
  {
    src: galleryImage13,
    caption: "Gallery moment 13",
  },
  {
    src: galleryImage14,
    caption: "Gallery moment 14",
  },
  {
    src: galleryImage15,
    caption: "Gallery moment 15",
  },
  {
    src: galleryImage16,
    caption: "Gallery moment 16",
  },
   {
    src: galleryImage38,
    caption: "Gallery moment 38",
  },
  
  {
    src: galleryImage17,
    caption: "Gallery moment 17",
  },
  {
    src: galleryImage18,
    caption: "Gallery moment 18",
  },
  {
    src: galleryImage47,
    caption: "Gallery moment 48",
  },
  {
    src: galleryImage19,
    caption: "Gallery moment 19",
  },
  {
    src: galleryImage20,
    caption: "Gallery moment 20",
  },
  {
    src: galleryImage21,
    caption: "Gallery moment 21",
  },
  {
    src: galleryImage5,
    caption: "Gallery moment 5",
  },
  {
    src: galleryImage1,
    caption: "Gallery moment 1",
  },
 
  
  {
    src: galleryImage24,
    caption: "Gallery moment 24",
  },
  {
    src: galleryImage25,
    caption: "Gallery moment 25",
  },
  {
    src: galleryImage26,
    caption: "Gallery moment 26",
  },
  {
    src: galleryImage27,
    caption: "Gallery moment 27",
  },
  {
    src: galleryImage28,
    caption: "Gallery moment 28",
  },
  {
    src: galleryImage29,
    caption: "Gallery moment 29",
  },
  {
    src: galleryImage30,
    caption: "Gallery moment 30",
  },
  {
    src: galleryImage31,
    caption: "Gallery moment 31",
  },
  {
    src: galleryImage32,
    caption: "Gallery moment 32",
  },
  {
    src: galleryImage33,
    caption: "Gallery moment 33",
  },
  {
    src: galleryImage34,
    caption: "Gallery moment 34",
  },
  {
    src: galleryImage4,
    caption: "Gallery moment 4",
  },
  {
    src: galleryImage35,
    caption: "Gallery moment 35",
  },
  {
    src: galleryImage36,
    caption: "Gallery moment 36",
  },
  {
    src: galleryImage37,
    caption: "Gallery moment 37",
  },
  
  {
    src: galleryImage39,
    caption: "Gallery moment 39",
  },
  {
    src: galleryImage40,
    caption: "Gallery moment 40",
  },
  {
    src: galleryImage41,
    caption: "Gallery moment 41",
  },
  {
    src: galleryImage42,
    caption: "Gallery moment 42",
  },
  {
    src: galleryImage43,
    caption: "Gallery moment 43",
  },
  {
    src: galleryImage44,
    caption: "Gallery moment 44",
  },
  {
    src: galleryImage45,
    caption: "Gallery moment 45",
  },
  {
    src: galleryImage46,
    caption: "Gallery moment 46",
  },
  {
    src: galleryImage47,
    caption: "Gallery moment 47",
  },
  
  {
    src: galleryImage49,
    caption: "Gallery moment 49",
  },
  {
    src: galleryImage50,
    caption: "Gallery moment 50",
  },
  {
    src: galleryImage51,
    caption: "Gallery moment 51",
  },
  {
    src: galleryImage52,
    caption: "Gallery moment 52",
  },
  {
    src: galleryImage53,
    caption: "Gallery moment 53",
  },
];

const parallaxSlides = [
  {
    image: fullpage1,
    title: "The Beginning of Our Shared Journey",
    text: "আমাদের পথচলার শুরু",
  },
  {
    image: bestMoment2,
    title: "Ideas with Clarity and Purpose",
    text: "স্পষ্ট ভাবনা, দৃঢ় বার্তা",
  },
  {
    image: bestMoment7,
    title: "Where Light, Motion, and Emotion Meet",
    text: "আলো, গতি ও আবেগের মেলবন্ধন",
  },
  {
    image: heroImage1,
    title: "Graceful Beauty in Thoughtful Simplicity",
    text: "সরলতায় সৌন্দর্য—আলো ও পরিমিত নকশায় সাজানো সরস্বতী পূজার মণ্ডপ",
  },
];


const videoSlides = [
  {
    title: "2026",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1915028685766318%2F&show_text=false&width=380&t=0",
  },
  {
    title: "2025",
    src: "https://www.facebook.com/plugins/video.php?height=448&href=https%3A%2F%2Fwww.facebook.com%2Fboyssportingclub%2Fvideos%2F998575524414707%2F&show_text=false&width=560&t=0",
  },
  {
    title: "2024",
    src: "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2Fboyssportingclub%2Fvideos%2F3530572460401863%2F&show_text=false&width=560&t=0",
  },
  {
    title: "Facebook Reel 2",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1768675153966820%2F&show_text=false&width=267&t=0",
  },
];

const getInitialGalleryCount = () => {
  if (typeof window === "undefined") {
    return 8;
  }
  return window.matchMedia("(max-width: 768px)").matches ? 4 : 8;
};

function App() {
  const heroBannerRef = useRef(null);
  const ripplesInitializedRef = useRef(false);

  // automatic ripple
  const rippleIntervalRef = useRef(null);

  const marqueeRef = useRef(null);
  const galleryRef = useRef(null);
  const videoSliderRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const bestSliderRef = useRef(null);
  const [galleryStep, setGalleryStep] = useState(getInitialGalleryCount);
  const [galleryVisibleCount, setGalleryVisibleCount] = useState(
    getInitialGalleryCount
  );
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaChange = (event) => {
      const nextStep = event.matches ? 4 : 8;
      setGalleryStep(nextStep);
      setGalleryVisibleCount((current) => {
        if (hasLoadedMore) {
          return Math.min(galleryImages.length, Math.max(current, nextStep));
        }
        return nextStep;
      });
    };

    handleMediaChange(mediaQuery);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, [hasLoadedMore]);

  const visibleGalleryImages = galleryImages.slice(0, galleryVisibleCount);
  const hasMoreGalleryImages = galleryVisibleCount < galleryImages.length;

  const handleLoadMoreGallery = () => {
    setGalleryVisibleCount((current) =>
      Math.min(galleryImages.length, current + galleryStep)
    );
    setHasLoadedMore(true);
  };

  const handleCollapseGallery = () => {
    setGalleryVisibleCount(galleryStep);
    setHasLoadedMore(false);
  };

  useEffect(() => {
    const heroBanner = heroBannerRef.current;
    if (!heroBanner || !window.jQuery || !window.jQuery.fn.ripples) {
      return;
    }

    const img = new Image();
    img.src = heroImage2;

    const initRipples = () => {
      if (ripplesInitializedRef.current) {
        return;
      }
      const $heroBanner = window.jQuery(heroBanner);
      $heroBanner.ripples({
        resolution: 768,
        dropRadius: 18,
        perturbance: 0.02,
      });
      ripplesInitializedRef.current = true;

      // 🌊 DEFAULT RIPPLE (ALWAYS RUNNING)
      rippleIntervalRef.current = setInterval(() => {
        try {
          const rect = heroBanner.getBoundingClientRect();
          const x = Math.random() * rect.width;
          const y = rect.height * 0.6 + Math.random() * rect.height * 0.4;
          $heroBanner.ripples("drop", x, y, 14, 0.03);
        } catch {
          // safe ignore
        }
      }, 2500); // calm divine rhythm
    };

    const handleTouch = (event) => {
      if (!ripplesInitializedRef.current) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const rect = heroBanner.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      try {
        window.jQuery(heroBanner).ripples("drop", x, y, 20, 0.04);
      } catch {
        // Ignore ripples drop errors on unsupported devices.
      }
    };

    // handle pointer
    const handlePointer = (event) => {
      if (!ripplesInitializedRef.current) return;

      const rect = heroBanner.getBoundingClientRect();
      const x = event.clientX
        ? event.clientX - rect.left
        : event.touches?.[0]?.clientX - rect.left;

      const y = event.clientY
        ? event.clientY - rect.top
        : event.touches?.[0]?.clientY - rect.top;

      if (!x || !y) return;

      try {
        window.jQuery(heroBanner).ripples("drop", x, y, 20, 0.04);
      } catch {}
    };

    img.addEventListener("load", initRipples);
    if (img.complete) {
      initRipples();
    }

    heroBanner.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      try {
        if (ripplesInitializedRef.current) {
          window.jQuery(heroBanner).ripples("destroy");
          ripplesInitializedRef.current = false;
        }
      } catch {
        // Ignore cleanup errors if plugin fails to init.
      }
      img.removeEventListener("load", initRipples);
      // heroBanner.removeEventListener('touchstart', handleTouch)
      heroBanner.addEventListener("pointerdown", handlePointer, {
        passive: true,
      });
      heroBanner.addEventListener("touchstart", handlePointer, {
        passive: true,
      });
    };
  }, []);

  useEffect(() => {
    const root = marqueeRef.current;
    const $ = window.jQuery;
    if (!root || !$) {
      return;
    }

    const $track = $(root).find(".carousel-marquee-track");
    const speed = 60;
    let rafId = null;
    let lastTime = null;
    let offsetX = 0;

    const buildTrack = () => {
      const original = $track.data("original") || $track.html();
      $track.data("original", original);
      $track.html(original);
      const containerWidth = root.clientWidth || 1;

      while ($track[0].scrollWidth < containerWidth * 2) {
        $track.append(original);
      }

      offsetX = 0;
      $track.css("transform", "translate3d(0, 0, 0)");
    };

    const tick = (time) => {
      if (!lastTime) {
        lastTime = time;
      }
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      offsetX -= speed * delta;
      const loopWidth = $track[0].scrollWidth / 2;
      if (Math.abs(offsetX) >= loopWidth) {
        offsetX = 0;
      }
      $track.css("transform", `translate3d(${offsetX}px, 0, 0)`);
      rafId = window.requestAnimationFrame(tick);
    };

    buildTrack();
    rafId = window.requestAnimationFrame(tick);
    $(window).on("resize.carouselMarquee", buildTrack);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      $(window).off("resize.carouselMarquee");
    };
  }, []);

  useEffect(() => {
    const $ = window.jQuery;
    const hasJarallax = typeof window.jarallax === "function";
    const hasJqueryJarallax = !!($ && $.fn && $.fn.jarallax);
    if (!hasJarallax && !hasJqueryJarallax) {
      return;
    }

    const elements = document.querySelectorAll(".jarallax");
    if (!elements.length) {
      return;
    }

    const options = {
      speed: 0.35,
      imgSize: "contain",
      imgPosition: "center center",
    };

    if (hasJqueryJarallax) {
      $(elements).jarallax(options);
    } else if (hasJarallax) {
      window.jarallax(elements, options);
    }

    return () => {
      if (hasJqueryJarallax) {
        $(elements).jarallax("destroy");
      } else if (hasJarallax) {
        window.jarallax(elements, "destroy");
      }
    };
  }, []);

  useEffect(() => {
    const root = galleryRef.current;
    const $ = window.jQuery;
    if (!root || !$) {
      return;
    }

    const $root = $(root);
    const $overlay = $root.find(".gallery-overlay");
    const $overlayImg = $root.find(".gallery-overlay img");
    const $overlayCaption = $root.find(".gallery-overlay p");

    const openOverlay = (src, caption) => {
      $overlayImg.attr("src", src);
      $overlayCaption.text(caption || "");
      $overlay.addClass("is-open");
    };

    const closeOverlay = () => {
      $overlay.removeClass("is-open");
    };

    $root.on("click.gallery", ".gallery-card", (event) => {
      const $card = $(event.currentTarget);
      openOverlay($card.data("src"), $card.data("caption"));
    });

    $root.on("click.gallery", ".gallery-overlay, .gallery-close", (event) => {
      if (
        $(event.target).closest(".gallery-frame").length &&
        !$(event.target).closest(".gallery-close").length
      ) {
        return;
      }
      closeOverlay();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeOverlay();
      }
    };

    $(window).on("keydown.gallery", handleKeyDown);

    return () => {
      $root.off(".gallery");
      $(window).off("keydown.gallery", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const root = videoSliderRef.current;
    const $ = window.jQuery;
    if (!root || !$) {
      return;
    }

    const $root = $(root);
    const $track = $root.find(".video-slider-track");
    const $slides = $track.find(".video-slide");
    const $dots = $root.find(".video-dot");
    const total = $slides.length;
    let index = 0;
    let isLocked = false;

    const setActive = (nextIndex) => {
      index = nextIndex;
      $track.css("transform", `translate3d(-${index * 100}%, 0, 0)`);
      $dots.removeClass("is-active").eq(index).addClass("is-active");
    };

    const goTo = (nextIndex) => {
      if (isLocked) {
        return;
      }
      const bounded = (nextIndex + total) % total;
      isLocked = true;
      setActive(bounded);
      window.setTimeout(() => {
        isLocked = false;
      }, 500);
    };

    $root.on("click.video", ".video-next", () => goTo(index + 1));
    $root.on("click.video", ".video-prev", () => goTo(index - 1));
    $root.on("click.video", ".video-dot", (event) => {
      const target = Number($(event.currentTarget).attr("data-index"));
      if (!Number.isNaN(target)) {
        goTo(target);
      }
    });

    setActive(0);

    return () => {
      $root.off(".video");
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) {
        return;
      }
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }
      const target = container.querySelector(href);
      if (!target) {
        return;
      }
      event.preventDefault();
      scroll.scrollTo(target);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const root = bestSliderRef.current;
    const $ = window.jQuery;
    if (!root || !$) {
      return;
    }

    const $root = $(root);
    const $track = $root.find(".best-sellers-track");
    const $slides = $track.find(".best-card");
    if (!$slides.length) {
      return;
    }

    let index = 0;
    let intervalId = null;
    const total = $slides.length;
    let visibleCount = 3;

    const getVisibleCount = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return 1;
      }
      if (window.matchMedia("(max-width: 1024px)").matches) {
        return 2;
      }
      return 3;
    };

    const updateVisibleCount = () => {
      visibleCount = getVisibleCount();
      $track.css(
        "transform",
        `translate3d(-${index * (100 / visibleCount)}%, 0, 0)`,
      );
    };

    const advance = () => {
      const maxIndex = Math.max(total - visibleCount, 0);
      index = index >= maxIndex ? 0 : index + 1;
      $track.css(
        "transform",
        `translate3d(-${index * (100 / visibleCount)}%, 0, 0)`,
      );
    };

    updateVisibleCount();
    intervalId = window.setInterval(advance, 2800);

    $root.on("mouseenter.bestSlider", () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    });

    $root.on("mouseleave.bestSlider", () => {
      if (!intervalId) {
        intervalId = window.setInterval(advance, 2800);
      }
    });

    $(window).on("resize.bestSlider", updateVisibleCount);

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
      }
      $root.off(".bestSlider");
      $(window).off("resize.bestSlider");
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div data-scroll-container ref={scrollContainerRef}>
        <main data-scroll-section>
          {/* hero banner image section */}
          <section
            id="home"
            className="hero-banner"
            ref={heroBannerRef}
            style={{ backgroundImage: `url(${heroImage2})` }}
            role="img"
            aria-label="Hero banner"
          >
            <p className="hero-banner-title">
              "||সরস্বতী মহাভাগে বিদ্যে কমললোচনে। বিশ্বরূপে বিশালাক্ষি বিদ্যাং
              দেহি নমোঽস্তু তে॥"
            </p>
          </section>

          <section className="section pujo-theme">
            <div className="container">
              <h2 className="section-title">
                Saraswati Pujo 2026 · A Theme Inspired by Knowledge
              </h2>
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

          

          <section className="hero hero-video">
            <video
              className="hero-video-media"
              autoPlay
              muted
              loop
              playsInline
              // poster="https://www.dadaboudihotel.in/static/media/hero-slider-1.aa859997652e3d535699.jpg"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>
            <div className="container hero-inner hero-video-content">
              <div>
                <div className="hero-tag">দমদম এর ঐতিহ্যবাহী সরস্বতী পূজা</div>
                {/* <h1>Gracefully sculpted in devotion, celebrating knowledge, creativity, and culture.</h1> */}
                <p>
                  দমদম বয়েজ স্পোর্টিং ক্লাব প্রতি বছর খুব যত্ন আর ভালোবাসা
                  দিয়ে সরস্বতী পূজার আয়োজন করে। এই পূজায় শুধু পুজো করাই নয়,
                  ছাত্রছাত্রী, যুবক-যুবতী আর এলাকার মানুষ সবাই একসাথে এসে আনন্দ
                  করে। পড়াশোনা, সংস্কৃতি আর মানুষের মধ্যে ভালো সম্পর্ক—এই
                  বিষয়গুলোকে মাথায় রেখেই আমাদের এই পূজার আয়োজন।
                  <br />
                  জ্ঞানের ঐতিহ্য, উৎসবের আনন্দ।
                </p>
              </div>
            </div>
          </section>

          {/* carusal marque */}
          <section
            className="carousel-marquee"
            ref={marqueeRef}
            aria-label="Scrolling marquee"
          >
            <div className="carousel-marquee-track">
              <span className="carousel-marquee-item">
                🌸এবারের নিবেদন-জ্ঞান, পবিত্রতা ও শুভ্রতার প্রতীক মা সরস্বতীর
                রূপ—মহাশ্বেতা।🌸
              </span>
            </div>
          </section>

          {/* paralax view with text */}
          <section id="awards" className="parallax-section" aria-label="Parallax highlights">
            <div className="container">
              <h2 className="section-title">Festival Highlights</h2>
              <p className="section-subtitle">
                Moments of devotion, unity, and celebration in every frame.
              </p>
              <div className="parallax-grid">
                {parallaxSlides.map((slide) => (
                  <article className="jarallax parallax-card" key={slide.title}>
                    <img
                      className="jarallax-img"
                      src={slide.image}
                      alt={slide.title}
                      loading="lazy"
                    />
                    <div className="parallax-content">
                      <h3>{slide.title}</h3>
                      <p>{slide.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="menu" className="section light">
            <div className="container">
              <h2 className="section-title">Best Moments</h2>
              <p className="section-subtitle">
                বয়েজ স্পোর্টিং ক্লাবের সেরা মুহূর্তগুলো মানেই আনন্দ, পরিশ্রম আর একসাথে থাকার গল্প। খেলাধুলা থেকে শুরু করে পূজা, সাংস্কৃতিক অনুষ্ঠান আর নানা সামাজিক কাজে—প্রতিটি মুহূর্তে ফুটে ওঠে সদস্যদের একতা, বন্ধুত্ব আর ভালোবাসা
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
                  Dumdum Boys Sporting Club was founded with a simple idea—to
                  bring people together through sports, culture, and shared
                  responsibility. What started as a small group of local youths
                  has grown over the years into a well-known community club,
                  deeply connected to the people of Dumdum. 
                  <br/>
                  <br />
                  Beyond sports, the club has always believed in the importance of culture and
                  togetherness. One of the most cherished traditions of Dumdum
                  Boys Sporting Club is the annual Saraswati Puja, organized
                  every year with care, dedication, and love. The puja is not
                  just a religious event—it is a time when students, young
                  people, and families from the neighborhood come together to
                  celebrate learning, creativity, and unity. 
                  <br/>
                  <br/>
                  Every year, members
                  of the club work hand in hand to create a simple yet
                  meaningful celebration. The focus is always on togetherness,
                  respect for education, and creating a welcoming space where
                  everyone feels included. 
                  
                  <br/><br/>Dumdum Boys Sporting Club continues
                  to grow with the support of the community, carrying forward
                  its values of teamwork, discipline, and cultural harmony—while
                  staying rooted in the spirit of Dumdum.
                </p>
                {/* <button className="btn-primary">Read More</button> */}
              </div>
            </div>
          </section>

          {/* awards section */}
          {/* <section id="awards" className="section">
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
        </section> */}

          <section id="video-gallery" className="section light">
            <div className="container" ref={videoSliderRef}>
              <h2 className="section-title">Video Gallery</h2>
              <p className="section-subtitle">ফেসবুক ভিডিওতে উৎসবের স্মৃতি</p>
              <div className="video-slider">
                <button
                  className="video-nav video-prev"
                  type="button"
                  aria-label="Previous video"
                >
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
                            style={{ border: "none", overflow: "hidden" }}
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
                <button
                  className="video-nav video-next"
                  type="button"
                  aria-label="Next video"
                >
                  ›
                </button>
              </div>
              <div
                className="video-dots"
                role="tablist"
                aria-label="Video slides"
              >
                {videoSlides.map((video, idx) => (
                  <button
                    key={video.src}
                    type="button"
                    className={`video-dot${idx === 0 ? " is-active" : ""}`}
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
                {visibleGalleryImages.map((image) => (
                  <button
                    key={image.src}
                    type="button"
                    className="gallery-card"
                    data-src={image.src}
                    data-caption={image.caption}
                  >
                    <img src={image.src} alt={image.caption} loading="lazy" />
                    {/* <span>{image.caption}</span> */}
                  </button>
                ))}
              </div>
              {galleryImages.length === 0 ? (
                <div className="gallery-actions">
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={handleCollapseGallery}
                  >
                    Collapse
                  </button>
                </div>
              ) : hasMoreGalleryImages ? (
                <div className="gallery-actions">
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={handleLoadMoreGallery}
                  >
                    Load more
                  </button>
                </div>
              ) : (
                hasLoadedMore && (
                  <div className="gallery-actions">
                    <button
                      className="btn-primary"
                      type="button"
                      onClick={handleCollapseGallery}
                    >
                      Collapse
                    </button>
                  </div>
                )
              )}
              <div className="gallery-overlay" aria-hidden="true">
                <div className="gallery-frame">
                  <button
                    className="gallery-close"
                    type="button"
                    aria-label="Close gallery"
                  >
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
              <h4>Dumdum Boys Sporting Club</h4>
              <p>
                A proud community club dedicated to sports, culture, and
                tradition—celebrating festivals, unity, and the spirit of
                Dumdum.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Milestones</li>
                <li>Moments</li>
                <li>story</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>Phone: 9874074477</li>
                <li>Email: dumdumboyssportingclub@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/boyssportingclub"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF aria-hidden="true" focusable="false" />
                </a>
                <a
                  href="https://www.instagram.com/dumdumboyssportingclub_2026/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram aria-hidden="true" focusable="false" />
                </a>
                <a
                  href="mailto:dumdumboyssportingclub@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope aria-hidden="true" focusable="false" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer-credit">
            © 2026 Dumdum Boys Sporting Club. All rights reserved. Contact:{" "}
            <a href="mailto:dumdumboyssportingclub@gmail.com">
              dumdumboyssportingclub@gmail.com
            </a>
            . Proudly maintained by ❤️{" "}
            <a
              href="https://www.linkedin.com/in/kausik-saha-fsd"
              target="_blank"
              rel="noreferrer"
            >
              Kausik
            </a>
          </p>
        </footer>

        <div className="bottom-tab" data-scroll-section>
          <a href="#home">Home</a>
          <a href="#awards">Milestones</a>
          <a href="#story">story</a>
          <a href="#menu">Moments</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default App;
