import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import HeroSlideshow from '../components/HeroSlideshow';
import { ROUTES } from '../config/navigation';
import title1 from '../Title 1.JPG';
import title2a from '../Title 2a.JPG';
import title2b from '../Title 2b.JPG';
import title2c from '../Title 2c.JPG';
import title2d from '../Title 2d.JPG';
import title3a from '../Title 3a.JPG';
import title3b from '../Title 3b.JPG';
import title3c from '../Title 3c.JPG';

const Homepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Hero slideshow data
  const heroSlides = [
    {
      images: [title2d, title1, title2a],
      topText: 'Experience Golf',
      bottomText: 'Your Way',
      taglines: [],
      showButtons: false,
    },
    {
      images: [title2a, title2b, title2c],
      topText: 'Every swing defines limits',
      bottomText: 'and defines possibility',
      taglines: [],
      showButtons: false,
    },
    {
      images: [title3a, title3b, title3c],
      topText: 'Inclusion Begins',
      bottomText: 'with a Voice',
      taglines: [],
      showButtons: false,
    },
  ];

  const pathways = [
    {
      id: 'try-golf',
      title: 'Try Golf',
      description: 'Step into the game. Discover what\'s possible.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop',
      cta: 'Explore',
      path: ROUTES.tryGolf,
      accent: 'lime',
    },
    {
      id: 'competition',
      title: 'Competition',
      description: 'From Training to Tournament.',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=300&fit=crop',
      cta: 'Learn More',
      path: ROUTES.competition,
      accent: 'lime',
    },
    {
      id: 'media',
      title: 'Media',
      description: 'Stories. Moments. Impact in Motion.',
      image: 'https://images.unsplash.com/photo-1526676317261-38c975e301e3?w=500&h=300&fit=crop',
      cta: 'View Gallery',
      path: ROUTES.media,
      accent: 'lime',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Slideshow Section */}
      <HeroSlideshow 
        slides={heroSlides} 
        autoPlay={true} 
        autoPlayInterval={9000}
      />

      {/* About AGAF Section */}
      <motion.section variants={itemVariants} className="py-20 bg-white">
        <div className="container-custom">
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-5xl font-montserrat text-primary-blue font-bold mb-3">
              Adaptive Golf Alliance Foundation
            </h2>
            <p className="text-base font-montserrat text-cta-gold font-semibold">
              Building pathways. Creating access. Enabling excellence
            </p>
          </motion.div>

          {/* Text Content Above Video */}
          <motion.div variants={itemVariants} className="mb-14 px-8">
            <p className="text-sm text-gray-800 leading-relaxed text-center">
              Adaptive Golf Alliance Foundation is a registered non-profit organization committed to expanding access to golf for individuals with disabilities. We believe golf is more than a game — it builds confidence, independence, skill, and a strong sense of community. Through partnerships with coaches, volunteers, schools, and golf facilities, AGAF creates meaningful opportunities for participation at every level — from first swings to competitive play.
            </p>
          </motion.div>

          {/* Video and Three Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 items-start">
            {/* Video Section - Takes 3 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IOSTp781MVA"
                  title="USAGA Adaptive Golf"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Three Pillars Section - Takes 4 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-4 pl-4">
              <h3 className="text-lg font-montserrat text-primary-blue font-bold mb-8">
                Our mission comes to life through a three-stage pathway:
              </h3>

              <div className="space-y-8">
                {/* Sample */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-base font-montserrat text-primary-blue font-bold mb-2">
                    Sample
                  </h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    We introduce individuals to golf in a supportive, accessible environment where they can learn foundational skills, build confidence, and discover their potential.
                  </p>
                </motion.div>

                {/* Practice */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-base font-montserrat text-primary-blue font-bold mb-2">
                    Practice
                  </h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    We expand access to inclusive clinics and on-course experiences that strengthen skills, foster independence, and deepen engagement in the game.
                  </p>
                </motion.div>

                {/* Compete */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-base font-montserrat text-primary-blue font-bold mb-2">
                    Compete
                  </h4>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    We create pathways to competitive play through adaptive tournaments and performance opportunities that empower athletes to excel.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Pathways Section - 3 Box Tabbed Layout */}
      <motion.section
        variants={itemVariants}
        className="section-padding bg-gray-50"
      >
        <div className="container-custom">
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat text-primary-blue font-bold mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the different pathways to experience adaptive golf. From your first swing to competitive play, find your path.
            </p>
          </motion.div>

          {/* 3 Box Grid with Images and Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.id}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group cursor-pointer h-full"
              >
                <Link to={pathway.path} className="block h-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64 bg-gray-300">
                      <img
                        src={pathway.image}
                        alt={pathway.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      {/* Title and Description */}
                      <div>
                        <h3 className="text-2xl font-montserrat font-bold text-primary-blue mb-3 group-hover:text-cta-gold transition-colors duration-300">
                          {pathway.title}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                          {pathway.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-200 mt-auto">
                        <span className="inline-block text-cta-gold font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          {pathway.cta} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Together We Create Access Section - With Clickable Image Buttons */}
      <motion.section
        variants={itemVariants}
        className="section-padding bg-white"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-3">
                  <span className="text-primary-blue">Together, We</span>
                  <span className="block text-primary-green">Create Access</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-primary-green font-semibold">
                  #GolfWithoutLimits
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Every golfer deserves the opportunity to play, compete, and thrive. Join us in breaking barriers and building an inclusive future for adaptive golf.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Clickable Image Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {/* Get Involved Card */}
              <Link to={ROUTES.getInvolved}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=400&fit=crop"
                      alt="Get Involved"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-montserrat font-bold text-primary-blue">Get Involved</h3>
                  </div>
                </motion.div>
              </Link>

              {/* Donate Card */}
              <motion.div
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              >
                <a 
                  href="#donate"
                  className="block w-full"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=400&fit=crop"
                      alt="Donate"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-montserrat font-bold text-primary-blue">Donate</h3>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Homepage;
