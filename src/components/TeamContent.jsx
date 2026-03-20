import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TeamContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-10 text-center">AGAF Team</h2>
          <p className="text-center text-lg md:text-xl text-primary-green font-quicksand font-semibold -mt-6 mb-10">
            Together we make a difference
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-green mb-4">Eligibility Assessment Team</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Adaptive Golf Alliance implements a structured eligibility and classification system to ensure fair and equitable participation for golfers with disabilities. Our trained assessors evaluate functional ability in alignment with international standards, supporting integrity, inclusion, and competitive balance across all events.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-green mb-4">AGAF&apos;s Core Coaching Team</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Our certified adaptive golf coaches specialize in individualized instruction, ensuring every golfer receives tailored support to develop skill, confidence, and competitive readiness.
              </p>
            </div>
          </div>

          <p className="text-center text-sm md:text-base text-gray-600 mt-8">
            Team member profile images will be updated as they are shared.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TeamContent;
