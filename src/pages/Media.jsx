import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import mediaHero from '../Media a.JPG';

const Media = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'discovery',
      label: 'Discovery Golf Experience',
      description: 'Select a programme to view media.',
      programmes: [
        {
          label: 'Discovery Programme 26th Jan 2026',
          path: '/media/discovery-programme-26-jan-2026',
        },
      ],
    },
    {
      id: 'clinics',
      label: 'AGAF Clinics',
      description: 'Programme schedule and participant highlights will be announced soon.',
      programmes: [],
    },
    {
      id: 'tournaments',
      label: 'Tournaments',
      description: 'Tournament details and event coverage are on the way.',
      programmes: [],
    },
    {
      id: 'workshops',
      label: 'Adaptive Coach Workshops',
      description: 'Workshop dates, locations, and registration information will be shared soon.',
      programmes: [],
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
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      {/* Hero Section with Image */}
      <motion.section variants={itemVariants} className="relative h-[28rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <img
          src={mediaHero}
          alt="Adaptive golfers at a media event"
          className="absolute inset-0 h-full w-full object-cover object-[50%_26%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-end text-white text-center px-4 pb-14 md:pb-20 lg:pb-24">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-quicksand font-medium leading-tight tracking-wide max-w-5xl">
            <span className="block">Different Journeys.</span>
            <span className="block">Shared Purpose.</span>
            <span className="block">One game without limits.</span>
          </h1>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue text-center mb-4">Experience Golf. Your Way.</h2>
          <p className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-green text-center mb-8">
            Redefining ability through adaptive golf.
          </p>

          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Explore moments that capture the spirit of inclusion from discovery clinics and coaching workshops to tournaments and community events.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              See the athletes, coaches, and communities who bring our mission to life.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Tabbed Gallery */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-2 justify-center flex-wrap">
            {tabs.map((tab, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-quicksand font-semibold transition-all whitespace-nowrap ${
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
              <h2 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-blue mb-2">
                {tabs[activeTab].label}
              </h2>
              <p className="text-gray-700 text-lg">
                {tabs[activeTab].description}
              </p>
            </div>

            {tabs[activeTab].programmes.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-8 px-2 md:px-10">
                {tabs[activeTab].programmes.map((programme, idx) => (
                  <motion.div
                    key={programme.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                  >
                    <Link
                      to={programme.path}
                      className="inline-flex items-center justify-center rounded-full bg-primary-blue px-7 py-3 text-base md:text-lg font-quicksand font-semibold text-white shadow-md hover:bg-primary-green transition-colors duration-300"
                    >
                      {programme.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto rounded-xl border border-primary-blue/20 bg-[#f2f1ea] p-8 text-center">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  New programmes will be added here shortly.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Media;
