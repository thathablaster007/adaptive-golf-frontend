import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ROUTES } from '../config/navigation';
import { Link } from 'react-router-dom';

const HeroSlideshow = ({ slides, autoPlay = true, autoPlayInterval = 6000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const lastManualNavRef = useRef(0);
  const transitionDuration = 1.0;

  useEffect(() => {
    const raf = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const getSlideImages = (slide) => (slide.images && slide.images.length ? slide.images : [slide.image]).filter(Boolean);

    const preloadImages = async (imageList) => {
      const loaders = imageList.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            if (img.decode) {
              img.decode().then(resolve).catch(resolve);
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      );
      await Promise.all(loaders);
    };

    const init = async () => {
      const firstSlideImages = getSlideImages(slides[0] || {});
      const remainingImages = slides
        .slice(1)
        .flatMap((slide) => getSlideImages(slide));

      // Unblock first render as soon as the first slide is ready.
      await preloadImages(firstSlideImages);
      if (isMounted) setIsReady(true);

      // Continue warming the cache for smoother subsequent transitions.
      preloadImages(Array.from(new Set(remainingImages)));
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [slides]);

  useEffect(() => {
    if (!autoPlay || !isReady || slides.length < 2) return;

    const interval = setInterval(() => {
      if (Date.now() - lastManualNavRef.current < 1400) return;
      if (isTransitioning) return;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(true);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length, isReady, isTransitioning]);

  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => setIsTransitioning(false), transitionDuration * 1000 + 80);
    return () => clearTimeout(timer);
  }, [isTransitioning]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    lastManualNavRef.current = Date.now();
    setCurrentSlide(index);
    setIsTransitioning(true);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    lastManualNavRef.current = Date.now();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsTransitioning(true);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    lastManualNavRef.current = Date.now();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsTransitioning(true);
  };

  const fadeTransition = { duration: transitionDuration, ease: [0.22, 1, 0.36, 1] };

  return (
    <div className="relative w-full h-[110vh] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: hasMounted && index === currentSlide ? 1 : 0 }}
          transition={fadeTransition}
          className="absolute inset-0 will-change-[opacity]"
          style={{ zIndex: index === currentSlide ? 2 : 1, pointerEvents: index === currentSlide ? 'auto' : 'none' }}
        >
          <div className="absolute inset-0">
            {slide.images && slide.images.length === 3 ? (
              <div className="h-full w-full flex">
                {slide.images.map((imageSrc, idx) => (
                  <img
                    key={`${index}-${idx}`}
                    src={imageSrc}
                    alt={`Hero slide ${index + 1} panel ${idx + 1}`}
                    className="h-full w-1/3 object-cover"
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />
                ))}
              </div>
            ) : (
              <img
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
                draggable="false"
              />
            )}

            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center">
            {slide.topText && (
              <div className="mb-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-quicksand font-medium leading-tight tracking-wide">
                  {slide.topText}
                </h1>
              </div>
            )}

            {slide.bottomText && (
              <div className="mt-auto">
                <p className="text-5xl md:text-6xl lg:text-7xl font-quicksand font-medium tracking-wide">
                  {slide.bottomText}
                </p>
              </div>
            )}

            {slide.taglines && slide.taglines.length > 0 && (
              <div className="space-y-4 mt-8">
                {slide.taglines.map((tagline, idx) => (
                  <p key={idx} className="text-lg md:text-xl font-light max-w-2xl">
                    {tagline}
                  </p>
                ))}
              </div>
            )}

            {index === 0 && slide.showButtons && (
              <div className="flex gap-4 pt-12 flex-wrap justify-center mt-8">
                <Link to={ROUTES.getInvolved}>
                  <Button variant="gold" size="lg">
                    Get Involved
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-blue">
                  Donate
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors bg-black/20 rounded-full p-2 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors bg-black/20 rounded-full p-2 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'w-7 bg-[#4C9A63] border border-white'
                : 'w-3 bg-white/70 border border-black/30 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: index === currentSlide ? 1.05 : 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
