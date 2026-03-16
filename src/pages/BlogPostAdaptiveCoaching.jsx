import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';

const BlogPostAdaptiveCoaching = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-h2 font-montserrat font-bold text-primary-blue mb-5">
            Adaptive Coaching: How Golf Training is Designed for Different Abilities
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Placeholder page ready. You can add the final blog content and media for this article here.
          </p>
          <Link
            to={ROUTES.blog}
            className="inline-flex items-center justify-center rounded-lg bg-primary-green px-6 py-3 text-white font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostAdaptiveCoaching;
