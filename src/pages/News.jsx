import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

const News = () => {
  const newsArticles = [
    {
      id: 'milestone',
      title: 'A Milestone Moment',
      subtitle: 'Discovery Golf Experience + To The Tee Academy Partnership',
      excerpt: 'AGAF is thrilled to announce a groundbreaking partnership with To The Tee Academy. This collaboration brings world-class adaptive golf training to communities across the region, expanding access and opportunity for golfers of all abilities.',
      date: 'March 2026',
      image: 'https://source.unsplash.com/featured/?golf,partnership,celebration,achievement',
      featured: true,
    },
    {
      id: 'tournament-success',
      title: 'Regional Tournament Success',
      subtitle: 'Record-Breaking Attendance',
      excerpt: 'Our spring regional tournament attracted over 150 adaptive golfers from across the region, setting a new attendance record and showcasing the growing momentum of the sport.',
      date: 'February 2026',
      image: 'https://source.unsplash.com/featured/?golf,tournament,event,success',
    },
    {
      id: 'athlete-spotlight',
      title: 'Athlete Spotlight: Maya Chen',
      subtitle: 'From Discovery to Competition Champion',
      excerpt: 'Maya Chen shares her inspiring journey from her first Discovery Golf Experience to becoming a regional competition champion in just 18 months.',
      date: 'January 2026',
      image: 'https://source.unsplash.com/featured/?golf,athlete,woman,champion',
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
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero */}
      <motion.section variants={itemVariants} className="bg-gradient-to-br from-accent-lime to-primary-green text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-montserrat font-bold mb-6">News & Stories</h1>
          <p className="text-lg max-w-3xl mx-auto">Stay updated on AGAF initiatives, athlete achievements, and the latest in adaptive golf</p>
        </div>
      </motion.section>

      {/* Featured Article with Video */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader title="Featured Story" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <motion.div variants={itemVariants} className="overflow-hidden rounded-lg">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-sm font-montserrat font-bold text-cta-gold uppercase mb-2">{newsArticles[0].date}</p>
              <h2 className="text-h2 font-montserrat text-primary-blue font-bold mb-3">{newsArticles[0].title}</h2>
              <p className="text-lg text-primary-green font-semibold mb-4">{newsArticles[0].subtitle}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{newsArticles[0].excerpt}</p>
              <button className="text-primary-blue font-montserrat font-bold hover:text-primary-green transition-colors">
                Read Full Story →
              </button>
            </motion.div>
          </div>

          {/* YouTube Video Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-h3 font-montserrat font-bold text-primary-blue mb-6">Featured Video</h2>
            <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IOSTp781MVA"
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional News Grid */}
      <motion.section variants={itemVariants} className="section-padding bg-bg-light">
        <div className="container-custom">
          <SectionHeader title="Latest News" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {newsArticles.slice(1).map((article) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Card
                  title={article.title}
                  description={article.excerpt}
                  image={article.image}
                  className="h-full"
                >
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-600">{article.date}</span>
                    <button className="text-primary-blue font-montserrat font-bold text-sm hover:text-primary-green transition-colors">
                      Read →
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default News;
