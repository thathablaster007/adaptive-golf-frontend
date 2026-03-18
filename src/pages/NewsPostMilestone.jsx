import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';

const NewsPostMilestone = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="font-quicksand">
      <section className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-semibold text-primary-blue leading-tight mb-8">
            A Milestone Moment
          </h1>

          <Link to={ROUTES.news}>
            <Button variant="gold" size="md">Back to News</Button>
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl space-y-8">
          <div className="w-24 h-1 bg-primary-green/45 rounded-full" />

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            Adaptive Golf Alliance Foundation proudly conducted its first Discovery Golf Experience in collaboration with To The Tee Academy — an initiative designed to introduce adaptive golf in an inclusive and inspiring setting.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            This milestone event brought together participants, families, and supporters to explore what is possible through the game.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            The experience was later featured by Golf & Beyond, sharing powerful stories of individuals discovering confidence, connection, and opportunity through adaptive golf.
          </p>

          <p className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-green">
            A beginning that signals much more ahead.
          </p>

          <div className="pt-3">
            <h2 className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-blue mb-5">Featured Video</h2>
            <div className="relative w-full bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IOSTp781MVA"
                title="A Milestone Moment - Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default NewsPostMilestone;
