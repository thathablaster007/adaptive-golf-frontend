import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import posterMarch28 from '../Poster.jpeg';
import tryGolf1 from '../Try golf 1.JPG';
import tryGolf2 from '../Try golf 2.JPG';
import tryGolf3 from '../Try golf 3.JPG';
import tryGolf4 from '../try golf 4.JPG';
import tryGolf5 from '../try golf 5.JPG';
import tryGolf6 from '../Try golf 6.JPG';

const TryGolf = () => {
  const discoveryPosterUrl = 'https://drive.google.com/file/d/1lC1R7czDOTdpTL7Esbumh4-e3RAASsoR/view?usp=sharing';
  const discoveryRegistrationUrl = 'https://forms.gle/nUb8XLM8nZ2NAyZp7';

  useEffect(() => {
    const preloadImages = async (imageList) => {
      const loaders = imageList.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            if (img.decode) {
              img.decode().then(resolve).catch(resolve);
            } else {
              img.onload = resolve;
              img.onerror = resolve;
            }
          })
      );

      await Promise.all(loaders);
    };

    preloadImages([tryGolf1, tryGolf2, tryGolf3, tryGolf4, tryGolf5, tryGolf6]);
  }, []);

  const learningBlocks = [
    {
      id: 'discovery',
      title: 'Discovery Golf Experience',
      description: 'Our Discovery Golf Programme is the first step into adaptive golf. Designed for beginners, this experience introduces participants to the game in a welcoming, inclusive environment. With guided support and adapted equipment, it\'s all about exploration, enjoyment, and building belief.',
      image: tryGolf3,
    },
    {
      id: 'clinic',
      title: 'AGAF Clinic',
      description: 'The AGAF Clinic offers structured training for those ready to develop their skills further. Participants receive focused coaching, personalised guidance, and opportunities to improve technique, coordination, and confidence in a supportive setting.',
      image: tryGolf5,
    },
    {
      id: 'coach',
      title: 'Become an Adaptive Golf Coach',
      description: 'Workshop focuses on equipping teaching professionals and experienced golfers with the knowledge and practical tools to effectively instruct individuals with disabilities using adaptive golf techniques.',
      image: tryGolf6,
      email: 'contactus@adaptivegolfalliance.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="font-quicksand"
    >
      {/* Hero Header */}
      <motion.section variants={itemVariants} className="relative h-[22rem] sm:h-[26rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-full">
            <img
              src={tryGolf1}
              alt="Try Golf header panel 1"
              className="h-full w-full object-cover object-[50%_22%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="relative hidden md:block md:w-1/2 lg:w-1/3 h-full">
            <img
              src={tryGolf2}
              alt="Try Golf header panel 2"
              className="h-full w-full object-cover object-[50%_22%]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <div className="relative hidden lg:block lg:w-1/3 h-full">
            <img
              src={tryGolf4}
              alt="Try Golf header panel 3"
              className="h-full w-full object-cover object-[50%_22%]"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-quicksand font-medium tracking-wide text-white text-center">
            Learn to Play
          </h1>
        </div>
      </motion.section>

      {/* Learn to Play Section */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <div className="px-4 md:px-10 py-2 text-center">
              <div className="w-28 h-1 bg-primary-green/45 rounded-full mx-auto mb-8" />
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                Golf is a game of rhythm, focus, and possibility. Through adaptive instruction and supportive coaching, we make it accessible for everyone — regardless of ability. Start at your own pace. Build confidence with every swing.
              </p>

              <div id="upcoming-event" className="mb-8 rounded-2xl border border-primary-blue/15 bg-white/80 px-6 py-6 text-left shadow-sm">
                <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-blue mb-3 text-center md:text-left">
                  Upcoming Event: Adaptive Golf Discovery Programme
                </h3>

                <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
                  We are pleased to invite you to the Adaptive Golf Discovery Programme, an inclusive introduction to the game of golf.
                </p>

                <div className="space-y-2 text-base md:text-lg text-gray-800">
                  <p><span className="font-semibold">Date:</span> 28 March 2026 (Visually Impaired), 29 March 2026 (All Disabilities)</p>
                  <p><span className="font-semibold">Venue:</span> AQUALINERS Wellness and Holistic Center</p>
                  <p><span className="font-semibold">Time:</span> 9:30 AM - 12:00 PM</p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={posterMarch28}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-primary-blue/30 bg-white px-5 py-2.5 text-sm md:text-base font-quicksand font-semibold text-primary-blue hover:bg-primary-blue hover:text-white transition-colors duration-300"
                  >
                    View 28 March Poster
                  </a>
                  <a
                    href={discoveryPosterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-primary-blue/30 bg-white px-5 py-2.5 text-sm md:text-base font-quicksand font-semibold text-primary-blue hover:bg-primary-blue hover:text-white transition-colors duration-300"
                  >
                    View 29 March Poster (PDF)
                  </a>
                </div>

                <div className="mt-5 text-base md:text-lg text-gray-800 leading-relaxed">
                  <p className="font-semibold">For any queries:</p>
                  <p>+91 96635 96615</p>
                  <p>+91 96866 65385</p>
                </div>

                <motion.div whileHover={{ scale: 1.05, transformOrigin: 'left center' }} whileTap={{ scale: 0.95 }} className="mt-6 inline-block">
                  <a
                    href={discoveryRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="gold" size="lg">
                      Sign Up Today
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Learning Blocks */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div className="space-y-16" variants={containerVariants}>
            {learningBlocks.map((block, idx) => {
              const isImageFirst = idx % 2 === 0;

              return (
                <motion.article
                  key={block.id}
                  variants={itemVariants}
                  className="border-t border-primary-green/35 pt-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    <div className={`${isImageFirst ? 'lg:order-1' : 'lg:order-2'} lg:col-span-6`}>
                      <div className="overflow-hidden rounded-xl shadow-md bg-gray-200">
                        <img
                          src={block.image}
                          alt={block.title}
                          className="w-full h-[18rem] md:h-[22rem] object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className={`${isImageFirst ? 'lg:order-2' : 'lg:order-1'} lg:col-span-6`}>
                      <h3 className={`text-3xl md:text-4xl font-quicksand font-semibold text-primary-blue mb-5 tracking-wide ${block.id === 'coach' ? 'md:whitespace-nowrap' : ''}`}>
                        {block.title}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-5">
                        {block.description}
                      </p>

                      {block.email && (
                        <p className="text-base md:text-lg text-gray-800">
                          If you are interested in becoming an adaptive golf coach, please email, at <a href={`mailto:${block.email}`} className="text-primary-green font-semibold hover:text-primary-blue">{block.email}</a>
                        </p>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default TryGolf;
