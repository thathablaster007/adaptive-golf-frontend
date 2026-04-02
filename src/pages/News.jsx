import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';
import newsHero from '../News.JPG';

const News = () => {
  const featuredArticles = [
    {
      title: 'A Milestone Moment',
      excerpt:
        'Adaptive Golf Alliance Foundation proudly conducted its first Discovery Golf Experience in collaboration with To The Tee Academy — an initiative designed to introduce adaptive golf in an inclusive and inspiring setting.',
      path: ROUTES.newsMilestone,
    },
    {
      title: 'Where Sound Leads the Game: Adaptive Golf Discovery Day',
      excerpt:
        'Adaptive Golf Alliance successfully conducted its Discovery Day – Visual Impairment Edition, introducing 24 participants to golf through sound, touch, and guided experience.',
      path: ROUTES.newsDiscoveryDay,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      {/* Hero */}
      <motion.section variants={itemVariants} className="relative h-[21rem] sm:h-[25rem] md:h-[32rem] lg:h-[36rem] bg-gray-900 overflow-hidden">
        <img
          src={newsHero}
          alt="News"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-quicksand font-medium tracking-wide text-white text-center">
            News
          </h1>
        </div>
      </motion.section>

      {/* News Card */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-6xl">
          <div className="w-24 h-1 bg-primary-green/45 rounded-full mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                className="border border-cta-gold/55 rounded-sm bg-white/90 p-8"
              >
                <h3 className="text-3xl md:text-4xl font-quicksand font-semibold text-primary-blue leading-tight mb-6">
                  {article.title}
                </h3>
                <p className="text-xl text-gray-800 leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <Link to={article.path}>
                  <Button variant="gold" size="md">Read More</Button>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default News;
