import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageGrid from '../components/ImageGrid';
import SectionHeader from '../components/SectionHeader';

const Media = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'discovery',
      label: 'Discovery Golf Experience',
      description: 'DISCOVERY PROGRAMME 2026',
      images: [
        'https://source.unsplash.com/featured/?golf,beginner,learning,joyful',
        'https://source.unsplash.com/featured/?golf,community,inclusive,celebration',
        'https://source.unsplash.com/featured/?golf,coaching,instruction,support',
        'https://source.unsplash.com/featured/?golf,outdoor,green,nature',
      ],
    },
    {
      id: 'clinics',
      label: 'AGAF Clinics',
      description: 'Professional instruction and skill development',
      images: [
        'https://source.unsplash.com/featured/?golf,training,technique,coaching',
        'https://source.unsplash.com/featured/?golf,group,team,learning',
        'https://source.unsplash.com/featured/?golf,improvement,skill,practice',
        'https://source.unsplash.com/featured/?golf,professional,instruction',
      ],
    },
    {
      id: 'tournaments',
      label: 'Tournaments',
      description: 'Competitive play and championship events',
      images: [
        'https://source.unsplash.com/featured/?golf,competition,tournament,event',
        'https://source.unsplash.com/featured/?golf,champion,victory,winning',
        'https://source.unsplash.com/featured/?golf,athlete,performance,focused',
        'https://source.unsplash.com/featured/?golf,trophy,achievement,success',
      ],
    },
    {
      id: 'workshops',
      label: 'Adaptive Coach Workshops',
      description: 'Training and certification for coaches',
      images: [
        'https://source.unsplash.com/featured/?golf,coach,instructor,training',
        'https://source.unsplash.com/featured/?golf,mentor,guidance,coaching',
        'https://source.unsplash.com/featured/?golf,professional,program,certification',
        'https://source.unsplash.com/featured/?golf,expert,skill,development',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero Section with Image */}
      <motion.section variants={itemVariants} className="relative h-96 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1526676317261-38c975e301e3?w=1920&h=600&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-h1 font-montserrat font-bold mb-4">
            Different Journeys.Shared Purpose. One game without limits.
          </h1>
          <p className="text-xl max-w-3xl">
            Experience Golf. Your Way. Redefining ability through adaptive golf.
          </p>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Explore moments that capture the spirit of inclusion — from discovery clinics and coaching workshops to tournaments and community events.
            See the athletes, coaches, and communities who bring our mission to life.
          </p>
        </div>
      </motion.section>

      {/* Tabbed Gallery */}
      <motion.section variants={itemVariants} className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2 justify-center flex-wrap">
            {tabs.map((tab, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-montserrat font-bold transition-all whitespace-nowrap ${
                  activeTab === idx
                    ? 'bg-primary-blue text-white shadow-lg'
                    : 'bg-white text-gray-800 border border-gray-300 hover:border-primary-blue hover:text-primary-blue'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Tab Description and Image Grid */}
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-2">
                {tabs[activeTab].label}
              </h2>
              <p className="text-gray-600">
                {tabs[activeTab].description}
              </p>
            </div>
            <ImageGrid images={tabs[activeTab].images} columns={4} />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Media;
