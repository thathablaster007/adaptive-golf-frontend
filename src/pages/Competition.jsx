import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import competitionHero from '../Competition 1.JPG';

const Competition = () => {
  const [activeSection, setActiveSection] = useState('competition');

  const sections = [
    {
      id: 'competition',
      title: 'Competition',
      paragraphs: [
        'Competition is a natural progression in the AGAF Development Pathway for players who are ready to test their skills and grow through structured play.',
        'As athletes develop through clinics and training programmes, AGAF provides opportunities to participate in organised events and national tournaments designed specifically for adaptive golfers. These competitions encourage excellence, build experience, and create clear pathways toward higher levels of play.',
        'From friendly competitive formats to nationally recognised tournaments, AGAF is committed to creating stages where talent, determination, and ability can shine.',
      ],
    },
    {
      id: 'tournaments',
      title: 'Tournaments',
      description:
        'AGAF provides tournament opportunities in a format aligned with international adaptive golf pathways. This section will be updated with official competition dates and registration details.',
      note: 'Content coming soon: tournament dates and entry details will be published here.',
      primaryLink: {
        label: 'View EDGA Events Calendar',
        href: 'https://edgagolf.com/online/events/index.php?from=web24',
      },
    },
    {
      id: 'rules',
      title: 'Local Rules',
      description:
        'The following Local Rules and Terms of Competition, together with any additions or amendments published by EDGA at the golf course, will apply to all competitions run by AGAF. For the full text of any Local Rule referenced below, please refer to the Official Guide to the Rules of Golf effective January 2023 and the Clarifications updated quarterly by The R&A.',
      readLink: {
        label: 'Read EDGA 2026 Hard Card',
        href: 'https://www.edgagolf.com/web24/wp-content/uploads/EDGA-2026-Hard-Card_1.pdf',
      },
    },
  ];

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

    preloadImages([competitionHero]);
  }, []);

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

  const currentSection = sections.find((section) => section.id === activeSection) || sections[0];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      {/* Hero */}
      <motion.section variants={itemVariants} className="relative h-[22rem] sm:h-[26rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <img
          src={competitionHero}
          alt="Adaptive golf competition"
          className="absolute inset-0 h-full w-full object-cover object-[50%_24%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-quicksand font-medium tracking-wide text-white text-center">
            Competition
          </h1>
        </div>
      </motion.section>

      {/* Subsections */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="pr-6 lg:pr-8">
                {sections.map((section) => (
                  <motion.button
                    key={section.id}
                    variants={itemVariants}
                    onClick={() => setActiveSection(section.id)}
                    className={`appearance-none bg-transparent shadow-none rounded-none ring-0 outline-none focus:outline-none focus-visible:outline-none w-full px-3 py-4 text-left text-xl md:text-2xl font-quicksand transition-colors border-0 border-b border-gray-200 ${
                      activeSection === section.id
                        ? 'text-primary-blue font-semibold border-b-primary-green'
                        : 'text-gray-700 hover:text-primary-blue'
                    }`}
                  >
                    {section.title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pl-0 lg:pl-2"
              >
                <h3 className="text-3xl md:text-4xl font-quicksand font-semibold text-primary-blue mb-6">{currentSection.title}</h3>

                {currentSection.paragraphs && currentSection.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-lg md:text-xl text-gray-800 leading-relaxed mb-5">
                    {paragraph}
                  </p>
                ))}

                {currentSection.description && (
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">{currentSection.description}</p>
                )}

                {currentSection.note && (
                  <p className="text-base md:text-lg text-primary-blue font-semibold mb-6">{currentSection.note}</p>
                )}

                {currentSection.primaryLink && (
                  <a
                    href={currentSection.primaryLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl bg-primary-blue px-6 py-3 text-white text-base md:text-lg font-quicksand font-semibold hover:bg-primary-green transition-colors"
                  >
                    {currentSection.primaryLink.label}
                  </a>
                )}

                {currentSection.readLink && (
                  <a
                    href={currentSection.readLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-xl bg-primary-blue px-6 py-3 text-white text-base md:text-lg font-quicksand font-semibold hover:bg-primary-green transition-colors"
                  >
                    {currentSection.readLink.label}
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Competition;
