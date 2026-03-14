import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { ROUTES } from '../config/navigation';

const WhatIsAdaptiveGolf = () => {
  const [activeStep, setActiveStep] = useState(0);

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
      number: 1,
      title: 'Connect',
      description: 'Reach out. Share your interest. Let us help you take the first step.',
    },
    {
      number: 2,
      title: 'Assess & Guide',
      description: 'Understand your pathway. Receive clear guidance. We help you navigate eligibility, classification, and next steps.',
    },
    {
      number: 3,
      title: 'Learn & Play',
      description: 'Build skills. Gain confidence. Experience adaptive coaching in a supportive environment.',
    },
    {
      number: 4,
      title: 'Participate & Progress',
      description: 'Step into opportunity. Challenge yourself. Engage in structured events and competitive play.',
    },
    {
      number: 5,
      title: 'Grow with the Game',
      description: 'Develop independence. Belong to a community. Continue progressing — on and beyond the course.',
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
    >
      {/* Hero Section with Image */}
      <motion.section variants={itemVariants} className="relative h-96 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-end justify-center pb-8">
          <h2 className="text-2xl md:text-4xl font-montserrat font-bold text-white text-center">
            Discovering Possibility Through Adaptive Golf
          </h2>
        </div>
      </motion.section>

      {/* What is Adaptive Golf Section */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <h1 className="text-h2 font-montserrat text-primary-blue font-bold mb-6">
              What Is Adaptive Golf?
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Adaptive Golf is golf designed for inclusion. Like many adaptive sports, it allows individuals with physical, sensory, or cognitive challenges to learn and play the game through modified instruction, equipment, and formats — based on each person's abilities. At Adaptive Golf Alliance Foundation, we believe adaptive golf is not simply about learning a sport; it is about creating access, building confidence, and unlocking potential. By adapting the game — not the individual — we ensure that everyone has the opportunity to participate, improve, and thrive through the game of golf.
            </p>

            <p className="text-lg font-montserrat font-bold text-primary-green mb-8">
              Adaptive Golf does more than teach a swing — it strengthens the whole person.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Impact Section */}
      <motion.section variants={itemVariants} className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="The Impact of Adaptive Golf"
            subtitle="How adaptive golf transforms lives and opens new possibilities"
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
                <h3 className="text-base font-montserrat font-bold text-primary-blue mb-3">
                  {impact.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-primary-blue">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Large Numbered Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-montserrat font-bold text-2xl transition-all ${
                    activeStep === idx
                      ? 'bg-cta-gold text-white shadow-lg scale-110'
                      : 'bg-primary-blue text-white border-2 border-primary-blue/40'
                  }`}>
                    {step.number}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 py-2">
                    <h3 className="text-2xl font-montserrat font-bold mb-2 leading-tight text-primary-blue">
                      {step.title}
                    </h3>
                    {activeStep === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-700 leading-relaxed text-base"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Circular Diagram - Right Side */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <div className="relative w-96 h-96">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                >
                  {/* Background Circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />

                  {/* Outer Circle - Dashed - More Visible */}
                  <circle
                    cx="100"
                    cy="100"
                    r="85"
                    fill="none"
                    stroke="#003B6F"
                    strokeWidth="2.5"
                    strokeDasharray="5,5"
                    opacity="0.3"
                  />

                  {/* Inner Circle - Dashed */}
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="#003B6F"
                    strokeWidth="1.5"
                    strokeDasharray="3,3"
                    opacity="0.2"
                  />

                  {/* Step Points - Larger and More Visible */}
                  {pathwaySteps.map((step, idx) => {
                    const angle = (idx / 5) * 360 - 90;
                    const x = 100 + 72 * Math.cos((angle * Math.PI) / 180);
                    const y = 100 + 72 * Math.sin((angle * Math.PI) / 180);

                    return (
                      <g key={idx}>
                        {/* Outer Ring for Active State */}
                        {activeStep === idx && (
                          <circle
                            cx={x}
                            cy={y}
                            r="12"
                            fill="none"
                            stroke="#F2B532"
                            strokeWidth="2"
                            opacity="0.5"
                          />
                        )}
                        {/* Main Circle */}
                        <circle
                          cx={x}
                          cy={y}
                          r={activeStep === idx ? 10 : 8}
                          fill={activeStep === idx ? '#F2B532' : '#003B6F'}
                          className="transition-all"
                        />
                        {/* Step Number Inside Circle */}
                        <text
                          x={x}
                          y={y + 3}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="font-montserrat font-bold text-xs"
                          fill="white"
                        >
                          {step.number}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center Circle with Icon Background */}
                  <circle cx="100" cy="100" r="28" fill="#003B6F" opacity="0.95" />
                  <circle cx="100" cy="100" r="25" fill="#A2CB58" opacity="0.85" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏌️</div>
                    <p className="text-xs font-montserrat font-bold text-white leading-tight">
                      Adaptive<br />Golf
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="section-padding bg-bg-light">
        <div className="container-custom text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-h2 font-montserrat text-primary-blue font-bold mb-6">
              Ready to Begin Your Pathway?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Take the first step toward an inclusive, empowering golf experience.
            </p>
            <Link to={ROUTES.connect}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="gold" size="lg">
                  Begin Your Pathway
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default WhatIsAdaptiveGolf;
