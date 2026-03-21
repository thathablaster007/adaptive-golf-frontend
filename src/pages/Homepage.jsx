import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import HeroSlideshow from '../components/HeroSlideshow';
import { ROUTES } from '../config/navigation';
import title1 from '../IMG_1841.JPG';
import title2aFirstSlide from '../IMG_1850.JPG';
import title2a from '../assets/hero/title-2a.jpg';
import title2b from '../assets/hero/title-2b.jpg';
import title2c from '../assets/hero/title-2c.jpg';
import title2d from '../assets/hero/title-2d.jpg';
import title3a from '../assets/hero/title-3a.jpg';
import title3b from '../assets/hero/title-3b.jpg';
import title3c from '../assets/hero/title-3c.jpg';
import title1BlogCard from '../Title 1.JPG';
import blogImage2 from '../IMG_1883.JPG';
import blogImage3 from '../IMG_0780.jpeg';
import tryGolfHomeImage from '../Try Golf_Home.JPG';
import competitionHomeImage from '../Comeptition_Home.JPG';
import mediaHomeImage from '../Media_Home.JPG';
import medalGold from '../unnamed.png';
import logoBerlin2023 from '../unnamed (2).png';
import logoLosAngeles2015 from '../unnamed (7).png';
import logoAbuDhabi2019 from '../unnamed (5).png';
import logoEnglandGolf from '../unnamed (4).png';
import logoDaikinMadridOpen from '../unnamed (1).png';
import wagrLogo from '../wagr_logo.png';
import csrPartnerLogo from '../unnamed (9).png';

const Homepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Hero slideshow data
  const heroSlides = [
    {
      images: [title1,title2d,title2aFirstSlide],
      imagePositions: ['center center', 'center 22%', 'center 24%'],
      topText: 'Experience Golf',
      bottomText: 'Your Way',
      taglines: [],
      showButtons: false,
    },
    {
      images: [title2a, title2b, title2c],
      imagePositions: ['center center', 'center 68%', 'center 64%'],
      topText: 'Every swing defines limits',
      bottomText: 'and defines possibility',
      taglines: [],
      showButtons: false,
    },
    {
      images: [title3a, title3b, title3c],
      imagePositions: ['center 22%', 'center 20%', 'center 22%'],
      topText: 'Inclusion Begins',
      bottomText: 'with a Voice',
      taglines: [],
      showButtons: false,
    },
  ];

  const pathways = [
    {
      id: 'try-golf',
      title: 'Step into the game. Discover what\'s possible.',
      description: 'From your first introduction to structured clinics and specialised workshops, AGAF creates accessible pathways for everyone to experience golf — their way.',
      image: tryGolfHomeImage,
      cta: 'Explore',
      path: ROUTES.tryGolf,
      accent: 'lime',
    },
    {
      id: 'competition',
      title: 'From Training to Tournament',
      description: 'Progress from structured development into competitive play. Access national events and pathways toward world rankings.',
      image: competitionHomeImage,
      imagePosition: 'top',
      cta: 'Learn More',
      path: ROUTES.competition,
      accent: 'lime',
    },
    {
      id: 'media',
      title: 'Stories. Moments. Impact in Motion.',
      description: 'Explore highlights from clinics, tournaments, workshops and media features. A visual journey of adaptive golf in action.',
      image: mediaHomeImage,
      cta: 'View Media',
      path: ROUTES.media,
      accent: 'lime',
    },
  ];

  const blogPreviewPosts = [
    {
      id: 'blog-empowerment',
      title: 'More Than a Game: How Golf Empowers People with Disabilities',
      image: title1BlogCard,
      path: ROUTES.blogEmpowerment,
    },
    {
      id: 'blog-volunteers',
      title: 'The Power of Volunteers: The Heart of Adaptive Sports',
      image: blogImage2,
      path: ROUTES.blogVolunteers,
    },
    {
      id: 'blog-coaching',
      title: 'Adaptive Coaching: How Golf Training is Designed for Different Abilities',
      image: blogImage3,
      path: ROUTES.blogAdaptiveCoaching,
    },
  ];

  const facesOfAdaptiveGolf = [
    {
      name: 'Ranveer Singh Saini',
      medalImage: medalGold,
      medalAlt: 'Gold medal',
      achievements: [
        {
          title: 'Special Olympics World Games Berlin 2023',
          logo: logoBerlin2023,
          logoClassName: 'h-24 w-auto',
        },
        {
          title: 'Special Olympics World Games Los Angeles 2015',
          logo: logoLosAngeles2015,
          logoClassName: 'h-20 w-auto',
        },
      ],
    },
    {
      name: 'Ankush Saha',
      medalImage: medalGold,
      medalAlt: 'Silver medal',
      medalClassName: 'grayscale brightness-110',
      achievements: [
        {
          title: 'Special Olympics World Games Abu Dhabi 2019',
          logo: logoAbuDhabi2019,
          logoClassName: 'h-24 w-auto',
        },
      ],
    },
    {
      name: 'Vishwa Vardhan Bhati',
      wagrLogo,
      wagrRank: 167,
      achievements: [
        {
          title: 'England Golf',
          logo: logoEnglandGolf,
          logoClassName: 'h-24 w-auto',
        },
        {
          title: 'Daikin Madrid Open',
          logo: logoDaikinMadridOpen,
          logoClassName: 'h-24 w-auto',
        },
      ],
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="font-quicksand"
    >
      {/* Hero Slideshow Section */}
      <HeroSlideshow 
        slides={heroSlides} 
        autoPlay={true} 
        autoPlayInterval={9000}
      />

      {/* About AGAF Section */}
      <motion.section variants={itemVariants} className="py-20 bg-[#f2f1ea]">
        <div className="container-custom">
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-5xl font-quicksand text-primary-blue font-bold mb-3">
              Adaptive Golf Alliance Foundation
            </h2>
            <p className="text-xl font-quicksand text-primary-green font-semibold">
              Building pathways. Creating access. Enabling excellence
            </p>
          </motion.div>

          {/* Text Content Above Video */}
          <motion.div variants={itemVariants} className="mb-14 px-4 sm:px-8">
            <p className="text-lg text-gray-800 leading-relaxed text-justify max-w-5xl mx-auto">
              Adaptive Golf Alliance Foundation is a registered non-profit organization committed to expanding access to golf for individuals with disabilities. We believe golf is more than a game — it builds confidence, independence, skill and a strong sense of community. Through partnerships with coaches, volunteers, schools and golf facilities, AGAF creates meaningful opportunities for participation at every level — from first swings to competitive play.
            </p>
          </motion.div>

          {/* Video and Three Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Video Section - Expanded to reduce negative space */}
            <motion.div variants={itemVariants} className="lg:col-span-7 h-full lg:-ml-6 lg:self-stretch">
              <div className="aspect-video lg:aspect-auto lg:h-full w-full bg-gray-900 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/IOSTp781MVA"
                  title="USAGA Adaptive Golf"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>

            {/* Three Pillars Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <h3 className="text-xl font-quicksand text-primary-blue font-bold mb-8">
                Our mission comes to life through a three-stage pathway:
              </h3>

              <div className="space-y-8">
                {/* Sample */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-xl font-quicksand text-primary-green font-bold mb-2">
                    Sample
                  </h4>
                  <p className="text-base text-gray-800 leading-relaxed">
                    We introduce individuals to golf in a supportive, accessible environment where they can learn foundational skills, build confidence and discover their potential.
                  </p>
                </motion.div>

                {/* Practice */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-xl font-quicksand text-primary-green font-bold mb-2">
                    Practice
                  </h4>
                  <p className="text-base text-gray-800 leading-relaxed">
                    We expand access to inclusive clinics and on-course experiences that strengthen skills, foster independence and deepen engagement in the game.
                  </p>
                </motion.div>

                {/* Compete */}
                <motion.div variants={itemVariants} className="border-l-4 border-cta-gold pl-5">
                  <h4 className="text-xl font-quicksand text-primary-green font-bold mb-2">
                    Compete
                  </h4>
                  <p className="text-base text-gray-800 leading-relaxed">
                    We create pathways to competitive play through adaptive tournaments and performance opportunities that empower athletes to excel.
                  </p>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  to={ROUTES.whatIsAdaptiveGolf}
                  className="inline-flex items-center justify-center rounded-xl bg-primary-green px-7 py-3 text-base text-white font-quicksand font-semibold shadow-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  What is Adaptive Golf?
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Faces of Adaptive Golf Section */}
      <motion.section variants={itemVariants} className="py-10 md:py-12 bg-[#e8ede6]">
        <div className="container-custom">
          <motion.div variants={itemVariants} className="text-center mb-7 md:mb-8">
            <h2 className="text-4xl md:text-5xl font-quicksand text-primary-blue font-bold mb-3">
              Faces of Adaptive Golf
            </h2>
            <p className="text-lg md:text-xl font-quicksand text-primary-green font-semibold">
              Celebrating the journeys, achievements and spirit of our athletes.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-x-auto rounded-2xl border border-primary-blue/25 bg-[#f8f7f1] p-3 md:p-4 shadow-lg">
            <table className="w-full min-w-[980px] border-collapse">
              <thead>
                <tr className="border-b-4 border-primary-blue/70">
                  {facesOfAdaptiveGolf.map((athlete, index) => (
                    <th
                      key={athlete.name}
                      className={`px-6 py-4 align-top ${index < facesOfAdaptiveGolf.length - 1 ? 'border-r-4 border-primary-blue/70' : ''}`}
                    >
                      <div className="flex flex-col items-center justify-start gap-3">
                        <div className="flex items-center justify-center gap-3">
                          {athlete.medalImage ? (
                            <img
                              src={athlete.medalImage}
                              alt={athlete.medalAlt}
                              className={`h-16 w-auto ${athlete.medalClassName || ''}`.trim()}
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                            />
                          ) : null}
                          <span className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue leading-tight">
                            {athlete.name}
                          </span>
                        </div>

                        {athlete.wagrLogo ? (
                          <div className="flex items-center gap-3 rounded-xl border border-primary-blue/20 bg-white/70 px-3 py-2">
                            <img
                              src={athlete.wagrLogo}
                              alt="World Amateur Golf Ranking"
                              className="h-10 w-auto"
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                            />
                            <span className="text-base font-quicksand font-bold text-primary-blue">
                              Rank Stableford: {athlete.wagrRank}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {facesOfAdaptiveGolf.map((athlete, index) => (
                    <td
                      key={`${athlete.name}-achievements`}
                      className={`px-6 py-4 align-top ${index < facesOfAdaptiveGolf.length - 1 ? 'border-r-4 border-primary-blue/70' : ''}`}
                    >
                      <div className="flex flex-wrap items-center justify-center gap-5">
                        {athlete.achievements.map((achievement) => (
                          <div key={achievement.title} className="flex flex-col items-center gap-2">
                            <img
                              src={achievement.logo}
                              alt={achievement.title}
                              className={`${achievement.logoClassName} object-contain`}
                              loading="lazy"
                              decoding="async"
                              fetchPriority="low"
                            />
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Pathways Section - 3 Box Tabbed Layout */}
      <motion.section
        variants={itemVariants}
        className="section-padding bg-gray-200"
      >
        <div className="container-custom">
          {/* 3 Box Grid with Images and Links */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-12 gap-x-8 lg:gap-x-14 xl:gap-x-16 items-stretch">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.id}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group cursor-pointer h-full"
              >
                <Link to={pathway.path} className="block h-full">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-72 lg:h-80 bg-gray-300">
                      <img
                        src={pathway.image}
                        alt={pathway.title}
                        className="w-full h-full object-cover brightness-110 contrast-105 saturate-110 group-hover:scale-110 transition-transform duration-300"
                        style={{ objectPosition: pathway.imagePosition || 'center' }}
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    {/* Content Container */}
                    <div className="p-7 flex-1 flex flex-col justify-between">
                      {/* Title and Description */}
                      <div>
                        <h3 className="text-2xl font-quicksand font-bold text-primary-blue mb-3 group-hover:text-primary-green transition-colors duration-300 leading-snug">
                          {pathway.title}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                          {pathway.description}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-200 mt-auto">
                        <span className="inline-block text-cta-gold font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          {pathway.cta} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>

      {/* Blog Preview Section */}
      <motion.section
        variants={itemVariants}
        className="py-14 md:py-16 bg-[#f2f1ea]"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
            <motion.div variants={itemVariants} className="xl:col-span-4 h-full flex flex-col justify-center gap-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-semibold text-primary-blue leading-[1.14]">
                We love sharing
                <span className="block">adaptive golf <span className="text-primary-green">insights</span>,</span>
                <span className="block"><span className="text-primary-green">experiences</span> and <span className="text-primary-green">stories</span>.</span>
              </h2>

              <p className="text-gray-700 text-base leading-relaxed max-w-xl">
                Discover journeys, insights and voices that celebrate ability, resilience and inclusion through golf.
              </p>

              <Link to={ROUTES.blog}>
                <Button variant="primary" size="lg" className="bg-primary-green hover:bg-opacity-90 text-white text-xl md:text-2xl text-left min-w-[130px] px-6 md:px-8 py-3 md:py-4 rounded-xl">
                  Read More
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">
              {blogPreviewPosts.map((post) => (
                <Link key={post.id} to={post.path} className="group block">
                  <article className="h-full">
                    <div className="overflow-hidden rounded-2xl shadow-md h-[320px] sm:h-[380px] md:h-[420px] bg-gray-300">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-quicksand text-primary-blue leading-snug mt-5 group-hover:text-primary-green transition-colors duration-300">
                      {post.title}
                    </h3>
                  </article>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CSR Partners Section */}
      <motion.section variants={itemVariants} className="py-10 md:py-12 bg-[#e8ede6]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center h-full flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-6">
                CSR Partners
              </h2>
              <div className="rounded-2xl border border-primary-green/25 bg-white/90 p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
                <img
                  src={csrPartnerLogo}
                  alt="CSR Partner"
                  className="w-full h-20 md:h-24 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Together We Create Access Section - Banner CTA */}
      <motion.section
        variants={itemVariants}
        className="bg-white"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-primary-blue via-primary-green to-primary-blue px-6 py-16 sm:px-10 md:py-20 min-h-[410px] text-white">
          <div className="absolute inset-y-0 left-4 hidden md:block pointer-events-none select-none">
            <p className="text-[7rem] leading-[0.85] font-quicksand font-bold uppercase tracking-tight text-white/10">
              CREATE
              <br />
              ACCESS
            </p>
          </div>

          <motion.div variants={itemVariants} className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-quicksand font-bold">
              <span className="text-white">Together, We</span>
              <span className="block text-accent-lime">Create Access</span>
            </h2>

            <p className="text-2xl md:text-3xl font-quicksand font-semibold text-white">
              #GolfWithoutLimits
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                to={ROUTES.getInvolved}
                className="inline-flex items-center justify-center rounded-[0.75rem] bg-cta-gold px-10 py-4 text-xl font-quicksand font-bold uppercase tracking-wide text-primary-blue shadow-lg hover:brightness-105 transition-all duration-300"
              >
                Get Involved
              </Link>

              <Link
                to={ROUTES.donate}
                className="inline-flex items-center justify-center rounded-[0.75rem] bg-cta-gold px-10 py-4 text-xl font-quicksand font-bold uppercase tracking-wide text-primary-blue shadow-lg hover:brightness-105 transition-all duration-300"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>


    </motion.div>
  );
};

export default Homepage;
