import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';

const Blog = () => {
  const posts = [
    {
      id: 'blog-empowerment',
      title: 'More Than a Game: How Golf Empowers People with Disabilities',
      excerpt: 'A look at how adaptive golf builds confidence, independence, and connection for players of all abilities.',
      image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=900&h=1200&fit=crop&auto=format',
      path: ROUTES.blogEmpowerment,
    },
    {
      id: 'blog-volunteers',
      title: 'The Power of Volunteers: The Heart of Adaptive Sports',
      excerpt: 'Meet the volunteers who make inclusive sports environments welcoming, safe, and inspiring.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=1200&fit=crop&auto=format',
      path: ROUTES.blogVolunteers,
    },
    {
      id: 'blog-coaching',
      title: 'Adaptive Coaching: How Golf Training is Designed for Different Abilities',
      excerpt: 'How coaches adapt methods, tools, and communication to help every golfer progress.',
      image: 'https://images.unsplash.com/photo-1592919505780-303950717480?w=900&h=1200&fit=crop&auto=format',
      path: ROUTES.blogAdaptiveCoaching,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.section variants={itemVariants} className="bg-gradient-to-br from-primary-blue to-primary-green text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-montserrat font-bold mb-4">Adaptive Golf Blog</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Stories, practical tips, and community voices that grow inclusion in golf.
          </p>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-bg-light">
        <div className="container-custom">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {posts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link to={post.path} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-80 overflow-hidden bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-montserrat font-bold text-primary-blue group-hover:text-primary-green transition-colors duration-300 leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Blog;
