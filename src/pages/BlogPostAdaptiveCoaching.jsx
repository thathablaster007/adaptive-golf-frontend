import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogImage1 from '../IMG_2219.JPG';
import blogImage2 from '../IMG_1805.JPG';
import blogImage3 from '../IMG_0780.jpeg';

const BlogPostAdaptiveCoaching = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              Adaptive Coaching:
            </h1>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue">
              How Golf Training is Designed for Different Abilities
            </h2>
          </div>
          
          {/* Divider */}
          <div className="flex gap-2 mb-12">
            <div className="w-2 h-1 bg-primary-green rounded"></div>
            <div className="w-8 h-1 bg-primary-blue rounded"></div>
            <div className="w-2 h-1 bg-amber-500 rounded"></div>
          </div>

          {/* Section 1 */}
          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Coaching plays a vital role in helping athletes develop their skills and confidence. In adaptive golf, coaching goes beyond traditional instruction—it focuses on understanding each player's abilities and adapting techniques to ensure that everyone can participate successfully.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Adaptive coaching is built on flexibility, creativity, and a commitment to inclusion.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Understanding the Player First
          </h2>
          
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Every adaptive golfer has a unique journey. Some athletes may have mobility challenges, while others may have visual impairments or neurological conditions. Effective coaching begins with understanding the player's abilities, strengths, and goals.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Rather than focusing on limitations, adaptive coaches focus on what the player can do and build training methods around those strengths. This personalized approach helps athletes learn comfortably while developing confidence in their abilities.
          </p>

          {/* Image 1 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage1} 
              alt="Adaptive coach working with golfer" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Adapting Techniques and Equipment
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Adaptive golf coaching often involves modifying techniques or equipment to suit the needs of the player.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            For example, a golfer with limited mobility may adjust their stance or swing mechanics to maintain balance and control. Players with limb differences may use specialized grips or adaptive equipment to support their swing.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Visually impaired golfers often work with guides who help them align with the target and describe distances and course conditions. Through teamwork between the player, coach, and guide, the golfer can execute shots with confidence.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            These adaptations allow players to experience the game fully while maintaining the fundamental skills of golf.
          </p>

          {/* Image 2 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage2} 
              alt="Adaptive equipment and technique modifications" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Focusing on Skill Development
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Just like in traditional golf coaching, adaptive coaching emphasizes core skills such as grip, posture, alignment, and swing mechanics. However, coaches may break these skills into smaller steps to make learning easier and more effective.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Progress is often measured through small improvements: better balance, more consistent contact with the ball, or improved shot direction. Celebrating these milestones helps players stay motivated and engaged.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            The goal is not only to improve performance but also to ensure that players enjoy the learning process.
          </p>

          {/* Image 3 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage3} 
              alt="Golf skill development and training" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Quote Section */}
          <div className="py-6 px-6 md:px-8 my-12">
            <p className="text-base md:text-lg font-quicksand font-semibold text-primary-blue text-center">
              "With the right coaching, guidance, support, and belief, adaptive golfers can not only develop in the game—they will thrive in it."
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Creating a Supportive Learning Environment
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Adaptive coaching also focuses on building a supportive and encouraging environment. Athletes thrive when they feel respected, understood, and supported in their development.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Coaches often work closely with families, volunteers, and guides to ensure that players receive the assistance they need during training and competition.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            This collaborative approach strengthens the entire adaptive golf community.
          </p>

          {/* Section 6 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Expanding Opportunities Through Coaching
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            As adaptive golf continues to grow, trained coaches play a crucial role in expanding access to the sport. By developing inclusive coaching methods and supporting players at different skill levels, they help create opportunities for athletes to participate recreationally or competitively.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            Through organizations like the Adaptive Golf Alliance, adaptive coaching programs are helping more individuals discover that golf is a sport where everyone can belong.
          </p>

          {/* Next Blog Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blogBeyondVision}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                Beyond Vision: How Adaptive Golf Builds Confidence Without Sight
              </span>
              <span className="text-3xl text-primary-green group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostAdaptiveCoaching;
