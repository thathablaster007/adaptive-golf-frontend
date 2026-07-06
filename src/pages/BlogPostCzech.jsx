import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogImage1 from '../blog_ankush (1).jpeg';
import blogImage2 from '../blog_ankush (2).jpeg';
import blogImage3 from '../blog_ankush (3).jpeg';
import blogImage4 from '../blog_ankush (4).jpeg';
import blogImage5 from '../blog_ankush (5).jpeg';

const BlogPostCzech = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              A Podium Finish That Means So Much More:
            </h1>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue">
              Ankush Saha’s Remarkable Debut at the Czech Disability Golf Masters 2026
            </h2>
          </div>

          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded"></div>
            <div className="w-8 h-1 bg-primary-blue rounded"></div>
            <div className="w-2 h-1 bg-amber-500 rounded"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Some victories are measured by medals. Others are measured by the journey that makes them possible.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            For Ankush Saha, the Czech Disability Golf Masters 2026 in Prague was not just his first international disability golf tournament. It was the culmination of years of perseverance, resilience, and the unwavering belief that every individual deserves the opportunity to discover their true potential.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-quicksand">
            Making his debut against an accomplished international field, Ankush produced a composed and confident performance to finish Second Runner-Up in the Overall Nett category. It was an achievement that surpassed expectations, but more importantly, it marked the beginning of a promising new chapter in his sporting life.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage3}
              alt="Ankush Saha during the Czech Disability Golf Masters 2026"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            A Family Journey Shaped by Sport
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            For his family, the podium finish was deeply emotional.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Ankush has lived with an intellectual disability and has spent much of his life proving that limitations are often defined more by opportunity than by ability. Since 2008, we have worked together across different sports, celebrating small victories that gradually built confidence, resilience, and self-belief. From distance running events, including half and full marathons, to representing India in golf at the Special Olympics World Games in 2015, 2019, and 2023, every experience shaped the athlete, and the person, he is today.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Yet it was only when adaptive golf entered his life that we truly felt he had found his calling.
          </p>

          <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[10px]">
            <div>
              <img
                src={blogImage1}
                alt="Ankush Saha in Prague"
                className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
              />
            </div>
            <div>
              <img
                src={blogImage2}
                alt="Ankush Saha celebrating his debut podium finish"
                className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            A Podium That Reflects a Bigger Movement
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The Czech Disability Golf Masters 2026 offered far more than a competitive platform. It brought together golfers from around the world whose stories demonstrated that disability is never the defining characteristic of an athlete. Skill, determination, courage, and sportsmanship were the qualities that stood out on every fairway and every green.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            To see the Indian flag represented on the podium during Ankush’s very first appearance was a moment of immense pride. Equally heartening was the fact that two Indian golfers finished among the tournament’s top three in the Overall Nett category, a testament to the growing strength of disability golf in India.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage4}
              alt="Czech Disability Golf Masters 2026 medal moment"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Gratitude for the People Behind the Milestone
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            This achievement belongs to many people.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            We remain profoundly grateful to the Adaptive Golf Alliance Foundation (AGAF) for creating meaningful pathways for golfers with disabilities and for nurturing an ecosystem where inclusion is translated into opportunity. Their vision and commitment have enabled athletes like Ankush to compete, belong, and dream on the international stage.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            We also extend our sincere appreciation to the Czech Disability Golf Federation, whose professionalism, warmth, and commitment to inclusive sport made this tournament an unforgettable experience.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Above all, we thank every coach, mentor, fellow golfer, volunteer, and well-wisher who has encouraged Ankush throughout his journey. Every word of support, every lesson, and every opportunity have contributed to this milestone.
          </p>

          <div className="mb-12 flex justify-center">
            <img
              src={blogImage5}
              alt="Ankush Saha with family and support at the Czech Disability Golf Masters"
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            A Beginning, Not an Ending
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            This podium finish is not the end of a journey. It is the beginning of a larger dream.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Our hope is that Ankush’s story inspires more families to believe in possibilities, encourages more organisations to invest in adaptive sport, and reminds society that inclusion is not about lowering standards. It is about opening doors so that talent can flourish.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Prague gave Ankush his first international podium in his debut appearance in an EDGA accredited tournament.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The journey ahead promises many more challenges, many more lessons, and, we hope, many more moments that celebrate the limitless possibilities of the human spirit.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            For us, this medal will always represent much more than a sporting achievement.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            It is a celebration of hope finding its fairway.
          </p>

          <section className="border-l-4 border-primary-green bg-white px-6 py-8 text-primary-blue shadow-[0_16px_44px_rgba(24,39,75,0.08)] font-quicksand">
            <h3 className="font-quicksand text-2xl font-bold text-primary-blue md:text-[1.75rem]">
              Lt Col B.D. Saha
            </h3>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-700 md:text-lg">
              <p>
                A retired Indian Army officer whose greatest mission began after military service. Choosing premature retirement, he dedicated himself to helping his son, Ankush Saha, a golfer with intellectual impairment, realise his potential through distance running and adaptive golf.
              </p>
              <p>
                Believing in leading from the front, as he did in the army, Lt Col Saha trained himself, ran full marathons, and took up golf alongside Ankush, fostering companionship, camaraderie, and mutual confidence.
              </p>
              <p>
                To better support his son’s journey, he also completed a Golf Management course, including a six-month internship in Scotland, gaining deeper insight into the sport and its administration.
              </p>
              <p>
                His unwavering commitment has helped Ankush represent India in golf with distinction, inspiring families to believe that with love, perseverance, and opportunity, every child can achieve excellence and inclusion can become a lived reality.
              </p>
            </div>
          </section>

          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blogEmpowerment}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                More Than a Game: How Golf Empowers People with Disabilities
              </span>
              <span className="text-3xl text-primary-green group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostCzech;