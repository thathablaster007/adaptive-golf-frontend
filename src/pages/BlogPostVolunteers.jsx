import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogImage1 from '../_DSC0125.JPG';
import blogImage2 from '../IMG_1883.JPG';
import blogImage3 from '../_DSC0074.JPG';

const BlogPostVolunteers = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              The Power of Volunteers:
            </h1>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue">
              The Heart of Adaptive Sports
            </h2>
          </div>
          
          {/* Divider */}
          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded"></div>
            <div className="w-8 h-1 bg-primary-blue rounded"></div>
            <div className="w-2 h-1 bg-amber-500 rounded"></div>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            The People Who Make Inclusion Possible
          </h2>
          
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Behind every successful adaptive sports program is a community of dedicated volunteers. While athletes are the heart of the game, volunteers are often the force that makes participation possible.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            From guiding players on the course to supporting coaches during training sessions, volunteers help ensure that people with disabilities can participate safely, confidently, and fully in sport. In many ways, they are the backbone of adaptive sports initiatives.
          </p>

          {/* Image 1 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage1} 
              alt="Volunteers supporting adaptive sports" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Creating Access to Sport
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Adaptive sports often require additional support to ensure accessibility and safety. Volunteers play a crucial role in making this possible.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            They assist with organizing events, helping athletes navigate sports facilities, and supporting coaches during practice sessions. For example, visually impaired golfers may rely on guides to help align shots and judge distance. Athletes with mobility challenges may benefit from volunteers who assist with equipment or movement on the course.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            By providing this support, volunteers allow athletes to focus on what matters most: enjoying the game.
          </p>

          {/* Image 2 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage2} 
              alt="Volunteers assisting athletes in adaptive sports" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Quote Section */}
          <div className="py-6 px-6 md:px-8 my-12">
            <p className="text-lg md:text-xl font-quicksand font-semibold text-primary-blue text-center">
              "In adaptive sports, volunteers don't just support the game — they make it possible."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Encouragement That Builds Confidence
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Adaptive sports are about far more than competition. They are about confidence, independence, and personal growth.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Volunteers often become a powerful source of encouragement for athletes learning new skills or overcoming challenges. A few words of support, patient guidance, or simple reassurance during practice can make a meaningful difference.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Over time, these interactions build trust and lasting relationships within the sports community.
          </p>

          {/* Image 3 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage3} 
              alt="Volunteers building confidence in athletes" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Building an Inclusive Community
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            One of the greatest strengths of adaptive sports is the sense of belonging it creates. Volunteers play a key role in fostering this inclusive environment.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            They bring together athletes, families, coaches, and supporters through shared experiences on the course or field. These connections help break down barriers and reinforce the idea that sport truly belongs to everyone.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Partners in a More Inclusive Sporting World
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            As adaptive sports continue to grow, the role of volunteers becomes even more important. Their time, energy, and commitment help expand opportunities for athletes with disabilities around the world.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            In adaptive sports, volunteers are far more than helpers—they are partners in building a more inclusive sporting world.
          </p>

          {/* Next Blog Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blogAdaptiveCoaching}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                Adaptive Coaching: How Golf Training is Designed for Different Abilities
              </span>
              <span className="text-3xl text-primary-green group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostVolunteers;
