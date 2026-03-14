import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { ROUTES } from '../config/navigation';
import { Link } from 'react-router-dom';

const HeroSlideshow = ({ slides, autoPlay = true, autoPlayInterval = 6000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Text Content - Centered Layout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-white text-center">
            {/* Top Text */}
            {slides[currentSlide].topText && (
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-auto"
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-montserrat font-bold leading-tight">
                  {slides[currentSlide].topText}
                </h1>
              </motion.div>
            )}

            {/* Bottom Text */}
            {slides[currentSlide].bottomText && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-auto"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold">
                  {slides[currentSlide].bottomText}
                </p>
              </motion.div>
            )}

            {/* Taglines - For other slides */}
            {slides[currentSlide].taglines && slides[currentSlide].taglines.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-4 mt-8"
              >
                {slides[currentSlide].taglines.map((tagline, idx) => (
                  <p key={idx} className="text-lg md:text-xl font-light max-w-2xl">
                    {tagline}
                  </p>
                ))}
              </motion.div>
            )}

            {/* Buttons - Only on first slide */}
            {currentSlide === 0 && slides[currentSlide].showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex gap-4 pt-12 flex-wrap justify-center mt-8"
              >
                <Link to={ROUTES.getInvolved}>
                  <Button variant="gold" size="lg">
                    Get Involved
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-blue">
                  Donate
                </Button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-primary-gold transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary-gold w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlideshow;
