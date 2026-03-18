import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import blogImage1 from '../IMG_1811.JPG';
import blogImage2 from '../DSC0016.JPG';
import blogImage3 from '../DSC0111.JPG';

const BlogPostEmpowerment = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2">
              More Than a Game:
            </h1>
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue">
              How Golf Empowers People with Disabilities
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
            A Sport That Opens Doors
          </h2>
          
          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Sport has the power to transform lives. It strengthens the body, builds confidence, and creates a sense of belonging. For people with disabilities, the right sport can open doors to independence, opportunity, and community. Among many sports, golf stands out as one of the most inclusive and adaptable.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Unlike high-impact sports that demand speed or intense physical contact, golf can be modified to suit a wide range of abilities. Adaptive equipment, specialized carts, and guided play allow individuals with mobility challenges, limb differences, or visual impairments to participate fully in the game. With the right support and coaching, players can enjoy the strategy, focus, and satisfaction that golf offers.
          </p>

          {/* Image 1 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage1} 
              alt="Adaptive golf players in action" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 2 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Physical Benefits That Support Well-Being
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Beyond accessibility, golf provides meaningful physical benefits. The sport encourages balance, coordination, and controlled movement while remaining gentle on the body.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Walking the course, maintaining posture, and swinging the club all contribute to improved strength and mobility. For many individuals, golf can also support rehabilitation by encouraging steady, manageable physical activity.
          </p>

          {/* Image 2 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage2} 
              alt="Golf rehabilitation and physical benefits" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Quote Section */}
          <div className="py-6 px-6 md:px-8 my-12">
            <p className="text-lg md:text-xl font-quicksand font-semibold text-primary-blue text-center">
              "Adaptive golf proves that the game truly has no limits."
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            Building Confidence Through the Game
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            The impact of golf extends far beyond physical health. Learning and improving in the game can significantly boost confidence. Each successful shot and every small improvement builds a sense of achievement.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            For many adaptive golfers, the sport becomes a powerful reminder that their abilities go far beyond perceived limitations.
          </p>

          {/* Image 3 */}
          <div className="mb-12 flex justify-center">
            <img 
              src={blogImage3} 
              alt="Golfer celebrating success and building confidence" 
              className="rounded-lg shadow-lg object-contain max-h-96 md:max-h-[28rem]"
            />
          </div>

          {/* Section 4 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            A Community That Encourages Inclusion
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            Golf also offers something equally valuable: community. Time spent on the course naturally brings people together.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-8 font-quicksand">
            Adaptive golf programs often create supportive environments where players, coaches, volunteers, and families encourage one another and celebrate progress together. These connections build friendships and support networks that extend well beyond the game.
          </p>

          {/* Section 5 */}
          <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6 mt-12">
            A Sport with No Limits
          </h2>

          <p className="text-xl text-gray-800 leading-relaxed mb-6 font-quicksand">
            As adaptive golf continues to grow around the world, more programs and organizations are working to make the sport accessible to everyone. Through inclusive coaching, specialized equipment, and community support, more individuals are discovering the joy of golf.
          </p>

          <p className="text-xl text-gray-800 leading-relaxed mb-12 font-quicksand">
            For many players, golf becomes far more than a sport—it becomes a pathway to confidence, connection, and possibility.
          </p>

          {/* Next Blog Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-300">
            <Link
              to={ROUTES.blogVolunteers}
              className="flex items-center justify-between group hover:no-underline"
            >
              <span className="text-xl font-quicksand font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-300">
                The Power of Volunteers: The Heart of Adaptive Sports
              </span>
              <span className="text-3xl text-primary-green group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogPostEmpowerment;
