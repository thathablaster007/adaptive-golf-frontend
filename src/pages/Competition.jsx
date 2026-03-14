import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';

const Competition = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 'tournaments',
      title: 'Tournaments',
      content: 'AGAF hosts local, regional, and national tournaments throughout the year. These events create platforms for adaptive golfers to compete, connect, and showcase their talent.',
      highlights: ['Local Community Events', 'Regional Championships', 'National Finals', 'International Competitions'],
    },
    {
      id: 'passes',
      title: 'Types of Passes',
      content: 'Different tournaments offer various categories of entry. Passes range from casual play to competitive classification, ensuring every golfer can find their level.',
      highlights: ['Casual Participant Pass', 'Competitive Classification Pass', 'Professional Tournament Pass', 'Junior Competitor Pass'],
    },
    {
      id: 'classes',
      title: 'Sport Classes',
      content: 'Adaptive golf uses an internationally recognized classification system to ensure fair and inclusive competition across all ability levels.',
      highlights: ['Physical Impairments', 'Visual Impairments', 'Intellectual Disabilities', 'Neurological Conditions'],
    },
    {
      id: 'rankings',
      title: 'World Rankings',
      content: 'Track your progress on the AGAF World Rankings dashboard. Compete for points, achieve milestones, and earn recognition as you advance through the sport.',
      highlights: ['Real-time Standings', 'Point System', 'Achievement Badges', 'Legacy Recognition'],
    },
    {
      id: 'rules',
      title: 'Local Rules',
      content: 'AGAF tournaments follow the Rules of Golf with inclusive adaptations. Each event has specific rules designed to provide fair and accessible competition.',
      highlights: ['Standard Golf Rules', 'Adaptive Accommodations', 'Equipment Allowances', 'Course Modifications'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero */}
      <motion.section variants={itemVariants} className="bg-gradient-to-br from-primary-blue to-accent-lime text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-montserrat font-bold mb-6">Competition</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/90">
            Competition is a natural progression in the adaptive golf journey, creating stages where talent, determination, and ability can shine.
          </p>
        </div>
      </motion.section>

      {/* Content Sections */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Competition Pathways" subtitle="Explore tournaments, classifications, rankings, and rules" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                {sections.map((section, idx) => (
                  <motion.button
                    key={idx}
                    variants={itemVariants}
                    onClick={() => setActiveSection(idx)}
                    className={`w-full p-4 rounded-lg text-left font-montserrat font-bold transition-all ${
                      activeSection === idx
                        ? 'bg-primary-blue text-white shadow-lg'
                        : 'bg-bg-light text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-4">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-bg-light p-8 rounded-lg"
              >
                <h2 className="text-h3 font-montserrat text-primary-blue font-bold mb-4">{sections[activeSection].title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{sections[activeSection].content}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sections[activeSection].highlights.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <span className="w-2 h-2 bg-cta-gold rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Competition;
