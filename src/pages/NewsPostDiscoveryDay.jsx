import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';

const NewsPostDiscoveryDay = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="font-quicksand">
      <section className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-semibold text-primary-blue leading-tight mb-8">
            Where Sound Leads the Game: Adaptive Golf Discovery day
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
            Adaptive Golf Alliance successfully conducted its Discovery Day – Visual Impairment Edition, introducing 24 participants to golf through sound, touch, and guided experience.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            Designed as a confidence-building initiative, the event replaced visual instruction with sensory immersion, including audio storytelling, guided putting, and structured skill zones. Participants demonstrated remarkable independence, engagement, and curiosity throughout the session.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            A key highlight was the storytelling and inspiration segment, where participants deeply connected with the experience, followed by interactions with golfers already playing the sport.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            The event concluded with strong interest from participants to continue their golf journey, marking a successful step toward building accessibility and inclusion in the sport.
          </p>

          <div className="pt-3">
            <h2 className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-blue mb-5">Featured Video</h2>
            <div className="relative w-full bg-black rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5WbyuBjvdFM"
                title="Adaptive Golf Discovery Day - Featured Video"
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

export default NewsPostDiscoveryDay;
