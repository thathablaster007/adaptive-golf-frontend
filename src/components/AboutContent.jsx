import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutHero from '../about.JPG';

const purposePillars = [
  'Expand Access to the Game',
  'Empower Players Through Sport',
  'Create Pathways for Progress',
  'Enable Player Potential',
  'Develop Future Adaptive Golfers',
  'Support Growth Through Golf',
];

const timelineItems = [
  {
    year: '2008',
    description: 'Foundation established with a mission to make sport more inclusive and accessible.',
  },
  {
    year: '2010',
    description: 'Community-led support initiatives launched for aspiring athletes.',
  },
  {
    year: '2012',
    description: 'Adaptive athlete support programs expanded through partner collaboration.',
  },
  {
    year: '2013',
    description: 'Athlete education initiatives introduced to strengthen long-term development.',
  },
  {
    year: '2014',
    description: 'Major partnerships accelerated impact and broadened inclusion pathways.',
  },
  {
    year: '2015',
    description: 'Para-focused competition pathways launched to support equitable participation.',
  },
  {
    year: '2016',
    description: 'National advocates and mentors strengthened visibility for adaptive sport.',
  },
  {
    year: '2017',
    description: 'Knowledge partnerships extended to support emerging athletes and coaches.',
  },
  {
    year: '2018',
    description: 'International collaborations advanced standards, learning, and athlete support.',
  },
  {
    year: '2022',
    description: 'Program governance and strategy strengthened to scale long-term outcomes.',
  },
];

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

const AboutContent = ({ pageTitle }) => {
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

    preloadImages([aboutHero]);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      <motion.section variants={itemVariants} className="relative h-[26rem] md:h-[32rem] lg:h-[36rem] bg-gray-900 overflow-hidden">
        <img
          src={aboutHero}
          alt="Adaptive Golf Alliance community"
          className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-quicksand font-semibold tracking-wide text-white text-center">
            {pageTitle}
          </h1>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-primary-green font-semibold mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-6">Golf Without Barriers</h2>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              At Adaptive Golf Alliance, we are committed to making golf accessible for individuals with disabilities. Through inclusive coaching, supportive communities, and dedicated programs, we empower players to discover their potential and experience the joy of the game.
            </p>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Our vision is to create a future where ability is celebrated, opportunities are open to all, and the game of golf becomes a powerful platform for inclusion.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 text-center">
              Driving Inclusion Through Adaptive Golf
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-5 text-center">
              Sport has the power to transform lives, and adaptive golf is creating new possibilities for individuals with disabilities to experience that transformation.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-12 text-center">
              By combining adaptive coaching, community support, and accessible opportunities, we aim to ensure that the game of golf is open to everyone. Through these efforts, adaptive golf becomes a powerful platform for confidence, independence, and social inclusion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {purposePillars.map((pillar, index) => (
                <motion.div
                  key={pillar}
                  variants={itemVariants}
                  className="rounded-2xl border border-gray-200 bg-[#f8f8f4] p-6 shadow-sm"
                >
                  <p className="text-sm font-semibold text-primary-green mb-2">0{index + 1}</p>
                  <h3 className="text-xl font-quicksand font-bold text-primary-blue leading-snug">{pillar}</h3>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-2xl md:text-3xl font-quicksand font-bold text-primary-green">
              Access → Empowerment → Progress
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-quicksand font-bold text-primary-blue mb-4">Governing Board</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Governing Board steers AGAF with long-term vision, strategic leadership, and commitment to inclusive sport development.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-quicksand font-bold text-primary-blue mb-4">Board of Advisors</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our advisors contribute cross-domain expertise to strengthen accessibility, program quality, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-10 text-center">Timeline</h2>
          <div className="max-w-5xl mx-auto space-y-5">
            {timelineItems.map((item) => (
              <div key={item.year} className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-4 items-start rounded-xl border border-gray-200 p-5">
                <p className="text-4xl md:text-5xl font-quicksand font-bold text-primary-green leading-none">{item.year}</p>
                <p className="text-lg text-gray-800 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-10 text-center">AGAF Team</h2>

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

export default AboutContent;
