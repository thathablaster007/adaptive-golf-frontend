import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogHeaderImage from '../DSC0059.JPG';
import title1BlogCard from '../Title 1.JPG';
import blogImage2 from '../IMG_1883.JPG';
import blogImage3 from '../IMG_0780.jpeg';

const Blog = () => {
  const posts = [
    {
      id: 'blog-empowerment',
      title: 'More Than a Game: How Golf Empowers People with Disabilities',
      excerpt: 'A look at how adaptive golf builds confidence, independence, and connection for players of all abilities.',
      image: title1BlogCard,
      path: ROUTES.blogEmpowerment,
    },
    {
      id: 'blog-volunteers',
      title: 'The Power of Volunteers: The Heart of Adaptive Sports',
      excerpt: 'Meet the volunteers who make inclusive sports environments welcoming, safe, and inspiring.',
      image: blogImage2,
      path: ROUTES.blogVolunteers,
    },
    {
      id: 'blog-coaching',
      title: 'Adaptive Coaching: How Golf Training is Designed for Different Abilities',
      excerpt: 'How coaches adapt methods, tools, and communication to help every golfer progress.',
      image: blogImage3,
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
      {/* Hero Section with Image */}
      <motion.section variants={itemVariants} className="relative h-[28rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <img
          src={blogHeaderImage}
          alt="Adaptive golf blog"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-quicksand font-bold text-white mb-3">
              The Blog
            </h1>
            <p className="text-xl md:text-2xl font-quicksand text-white">
              We love sharing adaptive golf tips and stories.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
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
                    <h2 className="text-2xl font-quicksand font-bold text-primary-blue group-hover:text-primary-green transition-colors duration-300 leading-snug mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-800 leading-relaxed font-quicksand">{post.excerpt}</p>
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
