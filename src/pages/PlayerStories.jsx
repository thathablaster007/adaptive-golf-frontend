import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PLAYER_STORIES } from '../data/playerStories';

const PlayerStories = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const tagOptions = ['All', ...new Set(PLAYER_STORIES.flatMap((story) => story.disabilityTags))];

  const filteredStories = PLAYER_STORIES.filter((story) => {
    const matchesTag = activeTag === 'All' || story.disabilityTags.includes(activeTag);
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const matchesSearch = !normalizedSearch || story.name.toLowerCase().includes(normalizedSearch);

    return matchesTag && matchesSearch;
  });

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
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand bg-[#f8f7f2] text-gray-800">
      <motion.section variants={itemVariants} className="border-b border-primary-green/15 bg-white">
        <div className="container-custom mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <p className="font-quicksand text-sm font-semibold uppercase tracking-[0.35em] text-primary-green">Media / Player Stories</p>
          <h1
            className="mt-4 text-4xl font-bold tracking-tight text-primary-blue md:text-5xl lg:text-6xl"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Stories Beyond the Swing
          </h1>
          <div className="font-quicksand mt-6 max-w-4xl space-y-4 text-lg leading-8 text-gray-700 md:text-xl">
            <p>
              Adaptive golf is not only about sport — it is about people, purpose, and perseverance. Behind every player is a journey shaped by challenges overcome, confidence rediscovered, and dreams pursued with courage.
            </p>
            <p>
              This collection brings together inspiring stories of golfers whose lives have been transformed through the game. From first swings to international fairways, each story reflects the power of golf to connect, heal, inspire, and create opportunities for all.
            </p>
            <p>
              Through the vision of the Adaptive Golf Alliance Foundation, these stories reflect a growing movement committed to creating access, inclusion, and opportunity within the game of golf. By building pathways for adaptive golfers to learn, compete, and belong, the AGAF continues to inspire a future where the sport is truly open to everyone.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding">
        <div className="container-custom mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl border-b border-primary-green/15 pb-6 md:pb-8">
            <h2 className="font-quicksand text-3xl font-bold text-primary-blue md:text-4xl">Remarkable Individuals</h2>
          </div>

          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-wrap items-center gap-2 lg:order-1">
              {tagOptions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-5 py-2.5 font-quicksand text-base font-semibold transition-colors duration-200 ${
                    activeTag === tag
                      ? 'border-primary-blue bg-primary-blue text-white'
                      : 'border-gray-300 bg-white text-primary-blue hover:border-primary-green hover:text-primary-green'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <label className="w-full max-w-md lg:order-2 lg:ml-auto">
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search a player name"
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 font-quicksand text-base text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-primary-blue"
              />
            </label>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredStories.map((story, index) => (
              <motion.article
                key={story.slug}
                variants={itemVariants}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-[0_14px_40px_rgba(24,39,75,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(24,39,75,0.14)]"
              >
                <Link to={story.route} className="block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem] bg-[#edf2ea]">
                    <img
                      src={story.faceImage}
                      alt={story.faceImageAlt}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]`}
                      style={
                        story.faceImagePosition === 'top'
                          ? { objectPosition: 'center top' }
                          : story.faceImagePosition === 'top-small'
                          ? { objectPosition: '50% 18%' }
                          : undefined
                      }
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap gap-2">
                      {story.disabilityTags.map((tag) => (
                        <span key={tag} className="rounded-full border border-primary-green/20 bg-primary-green/8 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-green">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-quicksand text-2xl font-bold text-primary-blue transition-colors duration-200 group-hover:text-primary-green">
                        {story.name}
                      </h3>
                      <p className="font-quicksand text-base leading-7 text-gray-600">
                        {story.summary}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-2 font-quicksand text-base font-semibold text-primary-green">
                      Read full story
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="mt-8 rounded-[1.25rem] border border-dashed border-primary-blue/20 bg-white px-6 py-12 text-center font-quicksand text-gray-600">
              No player stories match your current filters.
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PlayerStories;
