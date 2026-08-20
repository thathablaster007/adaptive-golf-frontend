import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';

import blogImage1 from '../Col_Blog2 (2).jpeg';
import blogImage2 from '../Col_Blog2 (3).jpeg';
import blogImage3 from '../Col_Blog2 (4).jpeg';
import blogImage5 from '../Col_Blog2 (1).jpeg';

const BlogPostCol2 = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              The Day the Wind Had Other Plans!
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-quicksand mt-4">
              When Preparation Meets the Unpredictable
            </p>
          </div>

          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded"></div>
            <div className="w-8 h-1 bg-primary-blue rounded"></div>
            <div className="w-2 h-1 bg-amber-500 rounded"></div>
          </div>

          {/* Article */}

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Skydiving is one of those experiences that is far easier to feel than
            to describe. Words, however carefully chosen, seem rather inadequate
            when you are several thousand feet above the ground, suspended beneath
            a parachute, wondering whether you are going to land where you are
            supposed to, or somewhere the planners never imagined.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            I had the privilege of serving with a Para formation stationed at Agra,
            home to that famous wonder of the world, the Taj Mahal. It was year
            1987 when I graduated from conventional parachuting to what was then
            more popularly called Free Fall.
          </p>

          {/* Existing Photo 1 */}

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            The Mission
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            With this brief prelude, let me share one particular free fall
            demonstration in 1989, which has ever stayed with me for more
            reasons than one.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            A visiting foreign dignitary, a lady in uniform, was to witness an
            airborne demonstration. The free-fall team would exit the aircraft at
            approximately 10,000 feet, glide for nearly 20 kilometres, and land in
            a designated area directly in front of the VIP.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Once we landed, an assault demonstration would showcase the operational
            proficiency of the formation.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Everything had been meticulously planned.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            <strong>Or so we thought.</strong>
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The landing area was a large open ground, temporarily converted into a
            ceremonial venue with tents, seating, and all the necessary
            arrangements.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Among these arrangements was a tent designated as a <strong>unisex
            washroom.</strong>
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            It had been thoughtfully equipped and it had an Indian-style commode
            and the usual paraphernalia. What nobody had thought of was digging a
            sufficiently deep pit beneath it.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            At the time, this appeared to be a minor administrative oversight. It
            would soon acquire considerable operational significance.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The aircraft reached the designated altitude.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Yellow On. Green On. Go!
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            And we exited.
          </p>

          {/* Existing Photo 2 + Photo 3 side-by-side */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[10px]">
            <div>
              <img
                src={blogImage1}
                alt="Please Speak"
                className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
              />
            </div>

            <div>
              <img
                src={blogImage2}
                alt="Please Speak memoir"
                className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
              />
            </div>
          </div>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            We knew our landmarks, our expected track, and the parameters within
            which we had to manoeuvre, given the favourable wind conditions.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            For the first few minutes, everything looked perfect. Then the wind
            decided it had not attended the briefing. The forecast wind and the
            actual wind appeared to have little acquaintance with each other.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Within ten or twelve minutes, it became clear that we were dealing with
            a strong crosswind. The parachute was gliding forward as though someone
            had forgotten to shift it out of first gear.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            We were losing height considerably faster than we were gaining ground.
            For a free-faller, this is not an encouraging combination.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            At about 3,000 feet, I looked down. And there it was. <strong>The Taj
            Mahal.</strong>
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Suddenly, the situation acquired a completely different perspective. I
            was not going to make the designated landing zone. That much was
            becoming painfully obvious.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            But I was now above one of the greatest monuments in the world,
            looking at it from the saddle of a parachute. I wondered what Shah
            Jahan might have felt every time he looked at the Taj Mahal. I now
            knew what he felt.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            For a few glorious moments, thoughts of operational failure,
            embarrassing questions, and the inevitable post-jump debrief
            disappeared.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            I simply circled the Taj Mahal. Who gets the privilege of sightseeing
            over the Taj from a parachute?
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Meanwhile, Back on the Ground...
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            While I was enjoying this unexpected aerial tour of Agra, events at the
            landing zone were taking a decidedly different turn.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Our visiting dignitary, it appeared, had developed a stomach problem
            that morning.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            This, of course, is not entirely uncommon when foreign visitors travel
            to India. Sometimes the stomach takes a little longer than the passport
            to adjust to the local environment.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The VIP therefore had an urgent and recurring requirement.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Unfortunately, the only facility available was our newly designated
            unisex washroom. And, as mentioned earlier, the excavation beneath it
            had not exactly been planned with geological ambition.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The VIP had to use the facility several times while waiting for the
            skydivers.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The people seated nearby soon discovered that the washroom was
            offering more than privacy. It was offering an increasingly memorable
            environmental experience.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The details are best left to the reader’s imagination.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Suffice it to say that the humble little tent was beginning to attract
            considerably more attention than anyone had anticipated.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Back in the Air
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            By now, I had little doubt that I could not reach the designated landing
            zone.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The last thing I wanted was to discover what a parachute does when
            introduced to a high tension electric pole. I scanned the ground. The
            nearest safe option appeared to be the golf course.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            <strong>So, the golf course it was.</strong>
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            I manoeuvred towards it and prepared for the landing. And then came
            the moment every parachutist looks forward to: <strong>Touchdown.</strong>
            I landed safely. On the golf course. On a green. And, to add insult
            to injury, almost next to the flagpole.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            I had always wanted to improve my golf.
          </p>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            The Others
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            As I began gathering my parachute, I looked up. There was my Chief
            Instructor, circling down towards the same general area. Then another.
            And another.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            It slowly became apparent that I was not alone in having abandoned
            the original landing plan. The wind had conducted its own operational
            exercise. And, judging by the results, it had achieved complete tactical
            surprise.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            There was, however, one consolation. We were all landing safely. Just
            not where we had been ordered to.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            <strong>Looking back,</strong> I still remember almost every minute
            and every detail of that day.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Because, in the finest traditions of military life, when everything
            went wrong, we somehow managed to land safely and, years later, have a
            very good laugh about it.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            After all, parachute jumps end on the ground.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            This one ended with a story.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage3}
              alt="Col_Blog_Images"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Existing Photo 3 + About the Author */}
          <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[10px]">

            {/* Photo 3 */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={blogImage5}
                alt="Col Charanjit (Retd)"
                className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
              />
            </div>

            {/* About the Author */}
            <div className="w-full md:w-1/2">
              <section className="border-l-4 border-primary-green bg-white px-6 py-8 text-primary-blue shadow-[0_16px_44px_rgba(24,39,75,0.08)] font-quicksand">
                <h3 className="font-quicksand text-2xl font-bold text-primary-blue md:text-[1.75rem]">
                  About the Author
                </h3>

                <div className="mt-6 space-y-4 text-base leading-7 text-gray-700 md:text-lg">
                  <p>
                    Col Charanjit (Retd) is a former Indian Army officer and an adaptive
                    golfer whose journey brings together service, resilience and a deep
                    love for the game.
                  </p>

                  <p>
                    A keen observer of life and human nature, he draws upon his
                    experiences from the Army to share stories that are candid, humorous
                    and thought-provoking.
                  </p>

                  <p>
                    Through his writing, he offers a glimpse into the people, moments and
                    lessons that have shaped his journey, both on and beyond the golf
                    course.
                  </p>
                </div>
              </section>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blogCol}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                PLEASE SPEAK By Col Charanjit (Retd)
              </span>

              <span className="text-3xl text-primary-green group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostCol2;