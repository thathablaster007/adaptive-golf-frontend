import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { ROUTES } from '../config/navigation';
import whatIsAdaptiveGolfHero from '../What is adaptive golf.JPG';

const renderStepIconPaths = (icon) => {
  switch (icon) {
    case 'connect':
      return (
        <>
          <path d="M3 5h18v14H3z" />
          <path d="m3 7 9 6 9-6" />
        </>
      );
    case 'guide':
      return (
        <>
          <path d="M12 21s7-4.8 7-11a7 7 0 1 0-14 0c0 6.2 7 11 7 11Z" />
          <path d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </>
      );
    case 'learn':
      return (
        <>
          <path d="M3 8 12 4l9 4-9 4-9-4Z" />
          <path d="M7 10.5V14c0 1.8 2.3 3.2 5 3.2s5-1.4 5-3.2v-3.5" />
        </>
      );
    case 'progress':
      return (
        <>
          <path d="M12 3 8.5 9H15.5L12 3Z" />
          <path d="M7 11.5h10v2.2a5 5 0 0 1-10 0v-2.2Z" />
          <path d="M5 12h2v1.8a2.3 2.3 0 0 1-2.3 2.3H4.5" />
          <path d="M19 12h-2v1.8a2.3 2.3 0 0 0 2.3 2.3h.2" />
        </>
      );
    case 'grow':
      return (
        <>
          <path d="M12 20v-8" />
          <path d="M12 12c-2.6 0-4.8-2.1-4.8-4.8V5.2H9A3 3 0 0 1 12 8.2" />
          <path d="M12 12c2.6 0 4.8-2.1 4.8-4.8V5.2H15A3 3 0 0 0 12 8.2" />
        </>
      );
    default:
      return null;
  }
};

const StepIcon = ({ icon, className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {renderStepIconPaths(icon)}
  </svg>
);

const WhatIsAdaptiveGolf = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
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

    preloadImages([whatIsAdaptiveGolfHero]);
  }, []);

  const impacts = [
    { title: 'Designed for Focus and Success', description: 'With a stationary ball and a structured pace, players are given the time, clarity, and space to concentrate, adjust, and succeed at their own rhythm.' },
    { title: 'Inclusive by Design', description: 'Instruction, equipment, and formats can be adapted to suit physical, sensory, and cognitive needs — ensuring access for all.' },
    { title: 'Builds Balance & Coordination', description: 'Strengthens hand–eye coordination, body awareness, and controlled movement.' },
    { title: 'Encourages Decision-Making', description: 'Develops focus, patience, and strategic thinking in a calm, supportive environment.' },
    { title: 'Improves Strength & Mobility', description: 'Enhances endurance, flexibility, and muscle strength through guided, repetitive movement.' },
    { title: 'Promotes Confidence & Independence', description: 'Each successful swing builds belief, self-trust, and personal accomplishment.' },
    { title: 'Supports Emotional Well-Being', description: 'Reduces stress, increases joy, and fosters a sense of belonging.' },
    { title: 'Creates Social Connection', description: 'Encourages meaningful interaction with peers, coaches, families, and community.' },
    { title: 'A Pathway Forward', description: 'From introduction to structured training — progressing toward recreational or competitive play.' },
  ];

  const pathwaySteps = [
    {
      icon: 'connect',
      title: 'Connect',
      description: 'Reach out. Share your interest. Let us help you take the first step.',
      centerDescription: 'Reach out. Share your interest.',
    },
    {
      icon: 'guide',
      title: 'Assess & Guide',
      description: 'Understand your pathway. Receive clear guidance. We help you navigate eligibility, classification, and next steps.',
      centerDescription: 'Understand your pathway. Receive clear guidance.',
    },
    {
      icon: 'learn',
      title: 'Learn & Play',
      description: 'Build skills. Gain confidence. Experience adaptive coaching in a supportive environment.',
      centerDescription: 'Build skills. Gain confidence.',
    },
    {
      icon: 'progress',
      title: 'Participate & Progress',
      description: 'Step into opportunity. Challenge yourself. Engage in structured events and competitive play.',
      centerDescription: 'Step into opportunity. Challenge yourself.',
    },
    {
      icon: 'grow',
      title: 'Grow with the Game',
      description: 'Develop independence. Belong to a community. Continue progressing — on and beyond the course.',
      centerDescription: 'Develop independence. Belong to a community.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="font-quicksand"
    >
      {/* Hero Section with Image */}
      <motion.section variants={itemVariants} className="relative h-[22rem] sm:h-[26rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <img
          src={whatIsAdaptiveGolfHero}
          alt="Adaptive golf participants in action"
          className="absolute inset-0 h-full w-full object-cover object-[50%_16%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-quicksand font-medium leading-tight tracking-wide text-white text-center">
            Discovering Possibility Through Adaptive Golf
          </h2>
        </div>
      </motion.section>

      {/* What is Adaptive Golf Section */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-quicksand text-primary-blue font-bold mb-7">
              What Is Adaptive Golf?
            </h1>

            <p className="text-xl text-gray-800 leading-relaxed mb-7">
              Adaptive Golf is golf designed for inclusion. Like many adaptive sports, it allows individuals with physical, sensory, or cognitive challenges to learn and play the game through modified instruction, equipment, and formats — based on each person's abilities.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed mb-7">
              At Adaptive Golf Alliance Foundation, we believe adaptive golf is not simply about learning a sport; it is about creating access, building confidence, and unlocking potential. By adapting the game — not the individual — we ensure that everyone has the opportunity to participate, improve, and thrive through the game of golf.
            </p>
            <p className="text-2xl font-quicksand font-bold text-primary-green mb-8 leading-relaxed">
              Adaptive Golf is more than a swing — it's where access, strength, dignity and belonging come together.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Impact Section */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="The Impact of Adaptive Golf"
            subtitle="How adaptive golf transforms lives and opens new possibilities"
            titleClassName="font-quicksand text-4xl md:text-5xl"
            subtitleClassName="font-quicksand text-xl text-gray-800"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {impacts.map((impact, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg border-l-4 border-primary-green hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-quicksand font-bold text-primary-blue mb-3 leading-snug">
                  {impact.title}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-4 text-primary-blue">Our Approach</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto md:whitespace-nowrap">
              A structured progression designed by AGAF to guide every athlete forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps List - Left Side */}
            <motion.div variants={containerVariants} className="space-y-6">
              {pathwaySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-6 items-start cursor-pointer transform transition-all hover:translate-x-2"
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Large Icon Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-quicksand font-bold text-2xl transition-all ${activeStep === idx
                      ? 'bg-cta-gold text-white shadow-lg scale-110'
                      : 'bg-primary-blue text-white border-2 border-primary-blue/40'
                    }`}>
                    <StepIcon icon={step.icon} className="w-7 h-7" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 py-2">
                    <h3 className={`text-3xl font-quicksand font-bold mb-2 leading-tight transition-colors ${activeStep === idx ? 'text-primary-green' : 'text-primary-blue'
                      }`}>
                      {step.title}
                    </h3>
                    {activeStep === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-800 leading-relaxed text-lg"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-2 pl-[5.5rem]">
                <Link to={ROUTES.connect}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="gold" size="lg">
                      Begin Your Pathway
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Circular Diagram - Right Side */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center px-2 md:px-4"
            >
              <div className="relative w-full max-w-[22rem] md:max-w-[28rem] lg:max-w-[31rem] aspect-square mx-auto">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Background Circle - Non-dotted outer boundary */}
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                    opacity="0.9"
                  />

                  {/* Outer Dotted Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#003B6F"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    opacity="0.4"
                  />

                  {/* Inner Dotted Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="#003B6F"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                    opacity="0.3"
                  />

                  {/* Animated step points */}
                  {pathwaySteps.map((step, idx) => {
                    const angle = ((idx - activeStep) / 5) * 360 - 90;
                    const x = 100 + 72.5 * Math.cos((angle * Math.PI) / 180);
                    const y = 100 + 72.5 * Math.sin((angle * Math.PI) / 180);
                    const isActive = activeStep === idx;
                    const iconScale = isActive ? 0.55 : 0.5;
                    const iconOffset = 12 * iconScale;

                    return (
                      <motion.g
                        key={idx}
                        className="cursor-pointer"
                        onMouseEnter={() => setActiveStep(idx)}
                        initial={false}
                        animate={{ x, y }}
                        transition={{ type: 'tween', duration: 0.5, ease: 'easeInOut' }}
                      >
                        {isActive && (
                          <motion.circle
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.15, opacity: 0.5 }}
                            cx="0"
                            cy="0"
                            r="8.5"
                            fill="none"
                            stroke="#F2B532"
                            strokeWidth="1.5"
                          />
                        )}

                        <circle
                          cx="0"
                          cy="0"
                          r={isActive ? 9 : 7}
                          fill={isActive ? '#F2B532' : '#003B6F'}
                          className="transition-colors duration-300"
                        />

                        <g
                          stroke="white"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          transform={`translate(${-iconOffset} ${-iconOffset}) scale(${iconScale})`}
                        >
                          {renderStepIconPaths(step.icon)}
                        </g>
                      </motion.g>
                    );
                  })}
                </svg>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <motion.p
                    key={`center-desc-${activeStep}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="max-w-[13rem] md:max-w-[15rem] text-center text-sm md:text-base lg:text-lg leading-relaxed font-quicksand font-semibold text-primary-blue"
                  >
                    {pathwaySteps[activeStep]?.centerDescription}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default WhatIsAdaptiveGolf;
