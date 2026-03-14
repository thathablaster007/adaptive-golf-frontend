import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import HeroSlideshow from '../components/HeroSlideshow';
import { ROUTES } from '../config/navigation';

const TryGolf = () => {
  const heroSlides = [
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,1',
      taglines: ['Try Golf 1'],
    },
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,2',
      taglines: ['Try Golf 2'],
    },
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,3',
      taglines: ['Try Golf 3'],
    },
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,4',
      taglines: ['Try Golf 4'],
    },
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,5',
      taglines: ['Try Golf 5'],
    },
    {
      image: 'https://source.unsplash.com/featured/?golf,adaptive,6',
      taglines: ['Try Golf 6'],
    },
  ];

  const tiers = [
    {
      id: 'discovery',
      title: 'Discovery Golf Experience',
      description: 'Our Discovery Golf Programme is the first step into adaptive golf. Designed for beginners, this experience introduces participants to the game in a welcoming, inclusive environment. With guided support and adapted equipment, it\'s all about exploration, enjoyment, and building belief.',
      details: [
        'Perfect for first-time golfers',
        'Welcoming, inclusive environment',
        'Guided support and adapted equipment',
        'Build foundational skills and confidence',
      ],
      image: 'https://source.unsplash.com/featured/?golf,beginner,equipment',
      icon: '🎓',
      cta: 'Explore Discovery',
    },
    {
      id: 'clinic',
      title: 'AGAF Clinic',
      description: 'The AGAF Clinic offers structured training for those ready to develop their skills further. Participants receive focused coaching, personalised guidance, and opportunities to improve technique, coordination, and confidence in a supportive setting.',
      details: [
        'Focused coaching and guidance',
        'Technique and skill development',
        'Progressive improvement opportunities',
        'Supportive community environment',
      ],
      image: 'https://source.unsplash.com/featured/?golf,coaching,training',
      icon: '⚙️',
      cta: 'Join a Clinic',
      featured: true,
    },
    {
      id: 'coach',
      title: 'Become an Adaptive Golf Coach',
      description: 'Workshop focuses on equipping teaching professionals and experienced golfers with the knowledge and practical tools to effectively instruct individuals with disabilities using adaptive golf techniques.',
      details: [
        'Learn adaptive coaching methodologies',
        'Develop practical teaching tools',
        'Support individuals with disabilities',
        'Make an impact in the community',
      ],
      image: 'https://source.unsplash.com/featured/?golf,coaching,professional',
      icon: '👨‍🏫',
      cta: 'Learn How to Coach',
      email: 'contactus@adaptivegolfalliance.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
      {/* Hero Slideshow */}
      <HeroSlideshow slides={heroSlides} autoPlay={true} autoPlayInterval={6000} />

      {/* Learn to Play Section */}
      <motion.section variants={itemVariants} className="section-padding bg-gradient-to-br from-accent-lime to-primary-green text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div variants={itemVariants}>
            <h2 className="text-h2 font-montserrat font-bold mb-6">
              Learn to Play!
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Golf is a game of rhythm, focus, and possibility. Through adaptive instruction and supportive coaching, we make it accessible for everyone — regardless of ability. Start at your own pace. Build confidence with every swing.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={ROUTES.connect}>
                <Button variant="gold" size="lg">
                  Sign Up Today!
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Tiers */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Learning Pathways"
            subtitle="Choose the experience that's right for you"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.id}
                variants={itemVariants}
                className={tier.featured ? 'md:scale-105' : ''}
              >
                <Card
                  title={tier.title}
                  description={tier.description}
                  image={tier.image}
                  className={`h-full flex flex-col ${tier.featured ? 'ring-2 ring-cta-gold' : ''}`}
                >
                  <div className="flex-1 space-y-4 my-4">
                    {tier.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="text-accent-lime text-lg flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {tier.email && (
                    <div className="bg-bg-light p-3 rounded mb-4 text-sm">
                      <p className="text-gray-700 mb-2">Contact us for coaching information:</p>
                      <a
                        href={`mailto:${tier.email}`}
                        className="text-primary-blue font-bold hover:text-primary-green"
                      >
                        {tier.email}
                      </a>
                    </div>
                  )}

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={tier.featured ? 'gold' : 'primary'}
                      size="md"
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Global CTA */}
      <motion.section variants={itemVariants} className="section-padding bg-primary-blue text-white">
        <div className="container-custom text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-h2 font-montserrat font-bold mb-6">
              Ready to Start Your Golf Journey?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Sign up today to join a Discovery Golf Experience, reserve your spot in an AGAF Clinic, or explore coaching opportunities.
            </p>
            <Link to={ROUTES.connect}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button variant="gold" size="lg">
                  Sign Up Today!
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TryGolf;
