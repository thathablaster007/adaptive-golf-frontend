import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ROUTES } from '../config/navigation';
import { Link } from 'react-router-dom';

const HeroSlideshow = ({ slides, autoPlay = true, autoPlayInterval = 6000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  const lastManualNavRef = useRef(0);
  const touchStartXRef = useRef(null);
  const touchStartYRef = useRef(null);
  const transitionDuration = 0.55;
  const desktopBreakpoint = 960;

  const stitchedPanelCount = viewportWidth >= desktopBreakpoint ? 3 : viewportWidth >= 640 ? 2 : 1;

  const renderedSlides = useMemo(() => {
    const expanded = [];

    slides.forEach((slide) => {
      if (!slide.images || slide.images.length === 0) {
        expanded.push({ ...slide, panelIndexes: null });
        return;
      }

      const desktopPanelCount = Number.isInteger(slide.desktopStitchedPanelCount)
        ? slide.desktopStitchedPanelCount
        : null;
      const panelCountForSlide = viewportWidth >= desktopBreakpoint && desktopPanelCount
        ? Math.max(1, Math.min(desktopPanelCount, slide.images.length))
        : Math.max(1, Math.min(stitchedPanelCount, slide.images.length));

      for (let start = 0; start < slide.images.length; start += panelCountForSlide) {
        const panelIndexes = Array.from(
          { length: Math.min(panelCountForSlide, slide.images.length - start) },
          (_, offset) => start + offset
        );
        expanded.push({ ...slide, panelIndexes });
      }
    });

    return expanded;
  }, [slides, stitchedPanelCount, viewportWidth]);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // Keep autoplay paused very briefly until first layout stabilizes.
    const timer = setTimeout(() => setIsReady(true), 120);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentSlide >= renderedSlides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, renderedSlides.length]);

  useEffect(() => {
    if (!autoPlay || !isReady || renderedSlides.length < 2) return;

    const interval = setInterval(() => {
      if (Date.now() - lastManualNavRef.current < 1400) return;
      if (isTransitioning) return;
      setCurrentSlide((prev) => (prev + 1) % renderedSlides.length);
      setIsTransitioning(true);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, renderedSlides.length, isReady, isTransitioning]);

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
    setCurrentSlide((prev) => (prev - 1 + renderedSlides.length) % renderedSlides.length);
    setIsTransitioning(true);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    lastManualNavRef.current = Date.now();
    setCurrentSlide((prev) => (prev + 1) % renderedSlides.length);
    setIsTransitioning(true);
  };

  const getPanelObjectPosition = (slide, panelIndex) => {
    if (viewportWidth <= 360 && slide.imagePositionsXs?.[panelIndex]) {
      return slide.imagePositionsXs[panelIndex];
    }
    if (viewportWidth <= 640 && slide.imagePositionsMobile?.[panelIndex]) {
      return slide.imagePositionsMobile[panelIndex];
    }
    if (viewportWidth <= 1024 && slide.imagePositionsTablet?.[panelIndex]) {
      return slide.imagePositionsTablet[panelIndex];
    }
    return slide.imagePositions?.[panelIndex] || 'center center';
  };

  const handleTouchStart = (event) => {
    if (viewportWidth >= desktopBreakpoint) return;
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (viewportWidth >= desktopBreakpoint || isTransitioning || renderedSlides.length < 2) return;
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    if (deltaX > 0) {
      goToPrevious();
      return;
    }

    goToNext();
  };

  const fadeTransition = { duration: transitionDuration, ease: [0.22, 1, 0.36, 1] };

  return (
    <div
      className="hero-slideshow-shell relative w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderedSlides.map((slide, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={fadeTransition}
          className="absolute inset-0 will-change-[opacity]"
          style={{ zIndex: index === currentSlide ? 2 : 1, pointerEvents: index === currentSlide ? 'auto' : 'none' }}
        >
          <div className="absolute inset-0">
            {slide.images && slide.panelIndexes ? (
              <div className="h-full w-full flex">
                {slide.panelIndexes.map((idx) => {
                  const panelWidthPercent = 100 / slide.panelIndexes.length;

                  return (
                  <div
                    key={`${index}-${idx}`}
                    className="hero-slide-panel relative h-full shrink-0"
                    style={{
                      flexBasis: `${panelWidthPercent}%`,
                      maxWidth: `${panelWidthPercent}%`,
                    }}
                  >
                    <img
                      src={slide.images[idx]}
                      alt={`Hero slide ${index + 1} panel ${idx + 1}`}
                      className="hero-slide-image h-full w-full object-cover"
                      style={{ objectPosition: getPanelObjectPosition(slide, idx) }}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 && idx === 0 ? 'high' : index === 0 ? 'auto' : 'low'}
                      decoding="async"
                      draggable="false"
                    />
                    {slide.imageCaptions?.[idx] && (
                      <span className="pointer-events-none absolute bottom-4 right-4 rounded-md bg-black/60 px-3 py-1.5 text-right text-xs font-semibold tracking-wide text-white shadow-md sm:bottom-6 sm:right-6 sm:text-sm">
                        {slide.imageCaptions[idx]}
                      </span>
                    )}
                  </div>
                  );
                })}
              </div>
            ) : (
              <img
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="hero-slide-image absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: slide.imagePosition || 'center center' }}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                decoding="async"
                draggable="false"
              />
            )}

            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-white text-center">
            {slide.topText && (
              <div className="mb-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-quicksand font-medium leading-tight tracking-wide">
                  {slide.topText}
                </h1>
              </div>
            )}

            {slide.floatingCaption && (() => {
              const hasPanelIndexes = Array.isArray(slide.panelIndexes);
              const targetImageIndex = Number.isInteger(slide.floatingCaptionTargetImageIndex)
                ? slide.floatingCaptionTargetImageIndex
                : null;

              if (hasPanelIndexes && targetImageIndex !== null && !slide.panelIndexes.includes(targetImageIndex)) {
                return null;
              }

              const panelCount = hasPanelIndexes ? slide.panelIndexes.length : 1;
              const panelWidthPercent = 100 / panelCount;
              const targetPanelOffset = hasPanelIndexes && targetImageIndex !== null
                ? Math.max(0, slide.panelIndexes.indexOf(targetImageIndex))
                : panelCount - 1;

              return (
                <div
                  className="pointer-events-none absolute bottom-28 sm:bottom-32 md:bottom-36"
                  style={{
                    left: `${targetPanelOffset * panelWidthPercent}%`,
                    width: `${panelWidthPercent}%`,
                  }}
                >
                  <div className="ml-auto mr-4 w-fit rounded-md bg-black/60 px-3 py-1.5 text-right text-xs font-semibold tracking-wide text-white shadow-md sm:mr-6 sm:text-sm md:mr-8">
                    {slide.floatingCaption}
                  </div>
                </div>
              );
            })()}

            {slide.bottomText && (
              <div className="mt-auto">
                <p className="text-3xl md:text-5xl lg:text-6xl font-quicksand font-medium tracking-wide">
                  {slide.bottomText}
                </p>
              </div>
            )}

            {slide.taglines && slide.taglines.length > 0 && (
              <div className="space-y-4 mt-8">
                {slide.taglines.map((tagline, idx) => (
                  <p key={idx} className="text-base md:text-lg font-light max-w-2xl">
                    {tagline}
                  </p>
                ))}
              </div>
            )}

            {index === 0 && slide.showButtons && (
              <div className="flex gap-4 pt-8 flex-wrap justify-center mt-6">
                <Link to={ROUTES.getInvolved}>
                  <Button variant="gold" size="lg">
                    Get Involved
                  </Button>
                </Link>
                <Link to={ROUTES.donate}>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-blue">
                    Donate
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </motion.div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors bg-black/20 rounded-full p-2 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors bg-black/20 rounded-full p-2 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {renderedSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? 'w-6 bg-[#4C9A63] border border-white'
                : 'w-2.5 bg-white/70 border border-black/30 hover:bg-white'
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
