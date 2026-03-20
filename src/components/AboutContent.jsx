import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import aboutHero from '../about.JPG';
import { ROUTES } from '../config/navigation';

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

const AboutContent = () => {
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
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto rounded-2xl border border-primary-blue/15 bg-white p-7 md:p-10 shadow-sm">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-8">Not about us.</h1>
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-8">About what has been waiting to begin.</h1>
            <div className="space-y-5 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>In a country of millions, where strength wears many forms, there exists a quiet gap - not of ability, but of access.</p>
              <p>Adaptive Golf Alliance stepped into that gap. Not as an organisation alone, but as a response.</p>
              <p>A response to the belief that the game of golf - with all its discipline, grace, and solitude - belongs to everyone.</p>
            </div>

            <div className="my-8 border-l-4 border-gray-300 pl-5 md:pl-6">
              <p className="text-xl md:text-2xl font-quicksand font-semibold text-primary-blue leading-relaxed">
                This is not just golf. This is entry. This is belonging. This is possibility.
              </p>
            </div>

            <div className="space-y-5 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>Across the world, adaptive golf has already found its rhythm - structured, recognised, thriving.</p>
              <p>In India, that rhythm is now taking shape.</p>
              <p>Through discovery initiatives, first swings have turned into returning players.</p>
              <div className="my-6 border-l-4 border-gray-300 pl-5 md:pl-6">
                <p className="text-xl md:text-2xl font-quicksand font-semibold text-primary-green leading-relaxed">A community is forming - it is growing.</p>
              </div>
              <p>What we do is simple. What it enables is not.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto rounded-2xl border border-primary-green/20 bg-[#f7f9ef] p-7 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-primary-blue/15 bg-white p-5 text-center">
                <p className="text-2xl font-quicksand font-bold text-primary-blue mb-2">We introduce.</p>
              </div>
              <div className="rounded-xl border border-primary-blue/15 bg-white p-5 text-center">
                <p className="text-2xl font-quicksand font-bold text-primary-blue mb-2">We support.</p>
              </div>
              <div className="rounded-xl border border-primary-blue/15 bg-white p-5 text-center">
                <p className="text-2xl font-quicksand font-bold text-primary-blue mb-2">We stay.</p>
              </div>
            </div>

            <div className="space-y-5 text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>We work with courses, with coaches, and institutions to create access where it did not exist.</p>
              <p>We identify and support talent - not just to participate, but to compete, to represent, to rise.</p>
              <p>We build pathways - from first contact... to international fairways.</p>
              <p>And already, something has shifted.</p>
              <p>
                From just a handful of recognised players in India, to a growing presence that is now being seen,
                not just nationally - but globally.
              </p>
              <p>What is taking shape here is beginning to be recognised beyond it.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-[#eef4ea]">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="rounded-3xl bg-white p-8 border border-[#d4dfcc] shadow-sm font-quicksand">
              <p className="font-quicksand text-xs md:text-sm uppercase tracking-[0.2em] text-[#4e6c42] font-semibold mb-3">Those who carry this forward</p>
              <h2 className="font-quicksand text-3xl md:text-4xl font-bold text-primary-green mb-6">Not a team. A balance of journeys.</h2>
              <div className="space-y-3 font-quicksand text-lg md:text-xl text-[#2b3d27] leading-relaxed">
                <p className="font-quicksand">A shooter who knows stillness and precision.</p>
                <p className="font-quicksand">A voice for inclusion shaped by lived resilience.</p>
                <p className="font-quicksand">A builder of spaces where golf becomes accessible.</p>
                <p className="font-quicksand">A leader who has shaped the game at a national level.</p>
                <p className="font-quicksand">Stewards of the rules, who understand the game deeply.</p>
                <p className="font-quicksand">And those who have chosen to step into this - not as experts alone, but as believers.</p>
                <p className="font-quicksand">Together - bringing depth, perspective and belief.</p>
                <p className="font-quicksand">Not to lead from the front, but to walk alongside.</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#d4dfcc] bg-white">
              <img
                src={aboutHero}
                alt="Adaptive Golf Alliance leadership and community"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="max-w-5xl mx-auto mt-10 rounded-2xl border border-primary-green/20 bg-[#f7f9ef] p-7 md:p-10 text-center shadow-sm">
            <p className="font-quicksand text-xl md:text-2xl font-semibold text-primary-blue leading-relaxed mb-3">This is not a finished story.</p>
            <p className="font-quicksand text-lg md:text-xl font-semibold text-primary-green leading-relaxed mb-3">It is a movement - growing, expanding, finding its ground.</p>
            <p className="font-quicksand text-lg text-primary-blue leading-relaxed mb-6">And if you are here, reading this - you are already part of it.</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={ROUTES.getInvolved}>
                <Button variant="gold" size="lg">
                  Get Involved
                </Button>
              </Link>
              <Link to={ROUTES.donate}>
                <Button variant="gold" size="lg">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default AboutContent;
