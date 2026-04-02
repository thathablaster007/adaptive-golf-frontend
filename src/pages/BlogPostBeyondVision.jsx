import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogImage1 from '../IMG_BLOG4_1.jpg';
import blogImage2 from '../IMG_BLOG4_2.jpg';
import blogImage3 from '../IMG_BLOG4_3.jpg';
import blogImage4 from '../IMG_BLOG4_4.jpg';

const BlogPostBeyondVision = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              Beyond Vision:
            </h1>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue">
              How Adaptive Golf Builds Confidence Without Sight
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 font-quicksand">
            (This experience was part of the Adaptive Golf Alliance Foundation's Discovery Day initiative - Visual Impairment Edition - with a focus on building confidence, accessibility, and belief through sport.)
          </p>

          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded" />
            <div className="w-8 h-1 bg-primary-blue rounded" />
            <div className="w-2 h-1 bg-amber-500 rounded" />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            It Started with Trust, Not Technique
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            From the moment participants arrived, something stood out.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            They were on time. They were independent. And they were ready.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            All they needed was direction, not assistance.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            With simple cues like "five steps ahead" or "the club is on your right," they moved with confidence and clarity.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            It was a powerful reminder: The barrier is not ability. It is exposure.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage1}
              alt="Participants beginning Discovery Day activities"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[30rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            When Sound Replaces Sight
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The first experience was putting.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            No visual instructions. No demonstrations. Just sound.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            A gentle tap near the hole. A voice guiding direction. And the quiet anticipation of a first attempt.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Participants did not try to see the game. They began to feel it.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Some touched the ground first. Some explored the club. Some paused, listening deeply. And then they struck.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            That moment, when they heard the ball roll and felt the connection, was not just a shot. It was belief taking shape.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage2}
              alt="Guided putting session with auditory cues"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[30rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            The Power of Storytelling and Real Voices
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            One of the most powerful segments of the day was the storytelling and inspiration circle.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            We replaced visual presentations with live narration, a story told, not shown.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            And something remarkable happened.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The room fell into complete silence. Participants sat still. Many gently closed their eyes. Their expressions reflected deep focus.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            They were not just listening; they were picturizing every moment.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            Through sound, they were building the space in their minds.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Where Belief Was Built
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            This was followed by an inspiration panel of golfers with visual impairment, guided by a moderator who translated experience into simple, relatable language.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The combination of storytelling (imagination) and real players (relatability) created something powerful: belief, without dependency on sight.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Learning Through Feel
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            As the day progressed, learning took a different form.
          </p>
          <ul className="list-disc pl-7 text-xl text-gray-800 leading-relaxed mb-8 font-quicksand space-y-2">
            <li>Explored equipment through touch</li>
            <li>Understood direction through sound</li>
            <li>Built awareness through movement</li>
          </ul>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            In the swing zone, a simple realization emerged: "I can do this."
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            With foam balls, guided positioning, and clear instructions, the environment remained safe, supported closely by trained volunteers. It was not about perfect swings. It was about first experiences that felt possible.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage3}
              alt="Participants learning through tactile and guided swing practice"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[30rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            More Than an Activity, A Personal Moment
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The most meaningful moments were often the simplest.
          </p>
          <ul className="list-disc pl-7 text-xl text-gray-800 leading-relaxed mb-8 font-quicksand space-y-2">
            <li>A smile after a successful putt</li>
            <li>The excitement of receiving a chocolate reward</li>
            <li>The quiet pride when a certificate was read aloud</li>
            <li>The joy of holding a golf ball and feeling its texture, weight, and meaning</li>
          </ul>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            These were not just participants in a program. They were individuals owning an experience for the first time.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            When Participants Became Storytellers
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            An unexpected highlight was how participants engaged with the media.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            They did not hesitate. They did not hold back. They spoke.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            They shared what they felt, what they discovered, and what they now wanted to pursue. Because when belief is real, expression follows naturally.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            What Comes Next
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Perhaps the most telling moment of the day came after everything ended.
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            A simple question: "When can we start playing?"
          </p>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            That question is everything.
          </p>
          <ul className="list-disc pl-7 text-xl text-gray-800 leading-relaxed mb-8 font-quicksand space-y-2">
            <li>From hesitation</li>
            <li>To curiosity</li>
            <li>To intent</li>
          </ul>
          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            And that is the true purpose of Discovery Day.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage4}
              alt="Participants reflecting on Discovery Day experience"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[30rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Reflection
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Adaptive golf is not about removing vision. It is about redefining how the game is experienced.
          </p>
          <ul className="list-disc pl-7 text-xl text-gray-800 leading-relaxed mb-8 font-quicksand space-y-2">
            <li>Hear the ball</li>
            <li>Feel the strike</li>
            <li>Trust the guidance</li>
          </ul>
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            They do not need sight to believe. They only need an opportunity.
          </p>

          <div className="py-6 px-6 md:px-8 my-12">
            <p className="text-lg md:text-xl font-quicksand font-semibold text-primary-blue text-center">
              This was not just a day of golf. It was a moment where belief replaced limitation.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blog}
              className="inline-flex items-center justify-center rounded-lg bg-primary-green px-6 py-3 text-white font-quicksand font-semibold hover:bg-opacity-90 transition-colors duration-300"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostBeyondVision;
