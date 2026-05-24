import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PLAYER_STORY_BY_SLUG } from '../data/playerStories';
import { ROUTES } from '../config/navigation';

const PlayerStoryDetail = () => {
  const { slug } = useParams();
  const story = PLAYER_STORY_BY_SLUG[slug];

  if (!story) {
    return <Navigate to={ROUTES.playerStories} replace />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.32 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand bg-[#faf8f2] text-gray-800">
      <motion.section variants={itemVariants} className="border-b border-primary-green/15 bg-white">
        <div className="container-custom mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <Link to={ROUTES.playerStories} className="inline-flex items-center gap-2 font-quicksand text-sm font-semibold uppercase tracking-[0.28em] text-primary-green transition-colors hover:text-primary-blue">
            <span aria-hidden="true">←</span>
            Back to player stories
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {story.disabilityTags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-blue">
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="mt-5 text-4xl font-bold tracking-tight text-primary-blue md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            {story.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-gray-700 md:text-2xl font-quicksand">
            {story.title}
          </p>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding">
        <div className="container-custom mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-7 text-lg leading-8 text-gray-800 md:text-xl md:leading-9 font-quicksand">
            {story.paragraphs.map((paragraph, index) => {
              const image = story.inlineImages.find((entry) => entry.afterParagraphIndex === index);

              return (
                <React.Fragment key={`${story.slug}-paragraph-${index}`}>
                  <p>{paragraph}</p>

                  {image && (
                    <div className="my-8 flex justify-center">
                      <figure className="inline-block max-w-full overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-[0_18px_50px_rgba(24,39,75,0.1)]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`block h-auto w-auto max-w-full object-contain object-top ${
                              image.size === 'xxlarge'
                                ? 'max-h-[2025px]'
                                : image.size === 'xlarge'
                                ? 'max-h-[1350px]'
                                : image.size === 'large'
                                ? 'max-h-[900px]'
                                : image.size === 'small'
                                ? 'max-h-[450px]'
                                : 'max-h-[590px]'
                            }`}
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <blockquote className="mt-12 border-l-4 border-primary-green bg-white px-6 py-8 text-xl font-medium leading-9 text-primary-blue shadow-[0_16px_44px_rgba(24,39,75,0.08)] md:text-2xl font-quicksand">
            {story.quote}
            <footer className="mt-4 text-base font-semibold uppercase tracking-[0.18em] text-primary-green">
              {story.quoteAttribution}
            </footer>
          </blockquote>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PlayerStoryDetail;
