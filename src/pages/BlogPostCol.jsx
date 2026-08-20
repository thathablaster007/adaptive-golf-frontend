import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';

import blogImage1 from '../Col (1).jpeg';
import blogImage2 from '../Col (2).jpeg';
import blogImage5 from '../BlogCol.jpeg';

const BlogPostCol = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              PLEASE SPEAK
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 font-quicksand mt-4">
              A reminiscence from his years in the Indian Army
            </p>
          </div>

          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded"></div>
            <div className="w-8 h-1 bg-primary-blue rounded"></div>
            <div className="w-2 h-1 bg-amber-500 rounded"></div>
          </div>

          {/* Article */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Gen Z lingo is the talk of the town. And, much to everyone’s
            amusement, even the topmost echelons of our hierarchy seem to be
            embracing it with full gusto.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            That set me thinking about a phrase from a very different era, one
            that, in the Army, could produce an effect far more potent that the
            reader may experience in a little while.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            For those not fully conversant with Army appointments, let me
            explain about one, the adjutant, about which this small missive is
            all about. The Adjutant holds, arguably, the hottest assignment in
            the unit. In a field area, it becomes considerably hotter, because
            lives could be at stake every minute of every day and adjutant is at
            the centre of anything and everything.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            In the early eighties, insurgency in Manipur and Nagaland was at its
            peak. Those were demanding times, and the responsibilities of an
            Adjutant were correspondingly more intense. So it remains to date.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Back to the reminiscence of this brief memoir. In the army, there
            are seemingly innocent two word observation that appear with
            alarming regularity on files: “Please speak.”
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Now, to the uninitiated, these two words may sound almost courteous
            perhaps even an invitation to have a conversation. For me, these
            words were never so.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Without further ado, let me share with you a true experience that
            has ever been with me for all these decades.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            While serving in the Eastern Sector during my attachment with the
            12 Garhwal Rifles, I was asked to officiate as Adjutant of the
            battalion when I had just about three months of service. The other
            officers of the battalion headquarters wished me luck as the
            Commanding Officer (God bless his soul) was known to be the biggest
            "bullshitter" of the century.
          </p>

          {/* Photo 1 */}
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
            I can still say that, as I have so far not met a man like him, who
            would blow his top anytime, at any place for frivolous reasons.
            Perhaps he felt that was the best way to teach the youngsters.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Everyday, I used to be summoned into the CO’s office for speak cases
            and I used to come out of his office drained of all my blood. The
            morning routine used to start by assembling files with speak
            remarks of the CO and...... To be honest, the remarks started
            reducing in numbers as, I was gradually learning the skill of "eye
            for detail".
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            One day while going through the "DAK", I happened to notice a
            glaring error of the clerk of my office whose name was Jagat Singh
            Bisht and I promptly wrote on that letter – Jagat Singh listen.
            Poor Jagat Singh had the choicest of words. I had learnt from my CO
            (I still remember those phrases by heart and I really enjoyed the
            sadistic pleasure of shouting at him at the top of my voice.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            To my bad luck, the letter with the remarks Jagat Singh listen went
            into the circulation file unnoticed by me and the CO put ‘speak’
            after rounding" the remark of mine with red pen. I cursed myself.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            After taking a deep breath, I walked into the CO’s office and put
            the circulation file on his table. Weather conditions in the CO's
            office seemed OK and he politely told me that he had never seen such
            a remark in twenty years of his service. He asked me to explain the
            meaning of my remark. With my head down I replied "Sir, do I ever
            speak when I come to you for speak cases - I only listen".
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            He exploded with laughter. From that day onwards the CO changed his
            remarks from “Adjt Speak” to “Adjt Listen”!
          </p>

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
              to={ROUTES.blogCzechDisabledGolfMasters}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                A Podium Finish That Means So Much More: Ankush Saha’s Remarkable Debut at the Czech Disability Golf Masters 2026
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

export default BlogPostCol;