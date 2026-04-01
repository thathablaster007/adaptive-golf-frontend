import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsFillLightbulbFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { FaChalkboardUser, FaHandHoldingDollar, FaHandshake, FaPeopleGroup } from 'react-icons/fa6';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';
import getInvolved1 from '../Get involved 1.JPG';
import getInvolved2 from '../get involved 2.JPG';
import getInvolved3 from '../get involved 3.JPG';
import sponsorLogo1 from '../Tee-Golf---1-.png';
import sponsorLogo3 from '../47f2e576-b5d5-44dc-aad2-f71e8fea3ce0.jpeg';
import sponsorLogo4 from '../unnamed.jpg';
import sponsorLogo5 from '../totheteesponder.jpg';
import sponsorLogoGolfBeyond from '../Logo Golf & BEYOND.png';

const CardIcon = ({ type }) => {
  const wrapperClass = 'w-20 h-20 md:w-24 md:h-24 flex items-center justify-center';
  const iconClass = 'w-16 h-16 md:w-[4.5rem] md:h-[4.5rem]';

  if (type === 'donate') {
    return (
      <div className={wrapperClass} aria-hidden="true">
        <FaHandHoldingDollar className={iconClass} />
      </div>
    );
  }

  if (type === 'csr') {
    return (
      <div className={wrapperClass} aria-hidden="true">
        <FaHandshake className={iconClass} />
      </div>
    );
  }

  if (type === 'expertise') {
    return (
      <div className={wrapperClass} aria-hidden="true">
        <FaPeopleGroup className={iconClass} />
      </div>
    );
  }

  if (type === 'events') {
    return (
      <div className={wrapperClass} aria-hidden="true">
        <FaChalkboardUser className={iconClass} />
      </div>
    );
  }

  if (type === 'work') {
    return (
      <div className={wrapperClass} aria-hidden="true">
        <BsFillPersonPlusFill className={iconClass} />
      </div>
    );
  }

  return (
    <div className={wrapperClass} aria-hidden="true">
      <BsFillLightbulbFill className={iconClass} />
    </div>
  );
};

const GetInvolved = () => {
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

    preloadImages([getInvolved1, getInvolved2, getInvolved3]);
  }, []);

  const involvementWays = [
    {
      id: 'donate',
      title: 'Donate',
      icon: 'donate',
    },
    {
      id: 'partner',
      title: 'Partner through CSR',
      icon: 'csr',
    },
    {
      id: 'expertise',
      title: 'Offer your expertise',
      icon: 'expertise',
    },
    {
      id: 'sponsor',
      title: 'Sponser our events',
      icon: 'events',
    },
    {
      id: 'work',
      title: 'Work with us',
      icon: 'work',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const sponsors = [
    { name: 'To The Tee Golf Collective', logo: sponsorLogo1 },
    { name: 'Golf & BEYOND', logo: sponsorLogoGolfBeyond },
    { name: 'Sponsor Partner 3', logo: sponsorLogo3 },
    { name: 'Sponsor Partner 4', logo: sponsorLogo4 },
    { name: 'Sponsor Partner 5', logo: sponsorLogo5 },
  ];

  const loopingSponsors = [...sponsors, ...sponsors];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      {/* Hero */}
      <motion.section variants={itemVariants} className="relative h-[28rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="relative w-full md:w-1/2 lg:w-1/3 h-full">
            <img
              src={getInvolved1}
              alt="Get involved header panel 1"
              className="h-full w-full object-cover object-[50%_28%]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="relative hidden md:block md:w-1/2 lg:w-1/3 h-full">
            <img
              src={getInvolved2}
              alt="Get involved header panel 2"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
          <div className="relative hidden lg:block lg:w-1/3 h-full">
            <img
              src={getInvolved3}
              alt="Get involved header panel 3"
              className="h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-quicksand font-medium leading-tight tracking-wide text-white">
            Join the Movement.
            <span className="block">Be Part of the Pathway</span>
          </h1>
        </div>
      </motion.section>

      {/* Mission Description */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
          <div className="w-24 h-1 bg-primary-green/45 rounded-full mx-auto" />

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            Every athlete deserves the opportunity to discover their potential. Every community deserves inclusive spaces where ability is celebrated.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            At Adaptive Golf Alliance Foundation, we are building more than programs — we are building pathways, confidence, and lifelong connections through the game of golf. Together with our partners, volunteers, and supporters, we are expanding what is possible for athletes with disabilities.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
            Whether you are an athlete, coach, volunteer, donor, or advocate — there is a place for you here.
          </p>
          
          <p className="text-xl md:text-2xl font-quicksand font-semibold text-primary-green">
            Because when access grows, opportunity follows.
          </p>
        </div>
      </motion.section>

      {/* How You Can Get Involved Cards */}
      <motion.section variants={itemVariants} className="section-padding bg-gradient-to-b from-[#f7f9ef] to-[#fff8eb]">
        <div className="container-custom">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <div className="w-24 h-1 bg-cta-gold/70 rounded-full mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-2 uppercase tracking-wide">How You Can Get Involved?</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {involvementWays.map((way, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="h-full min-h-[23rem] flex flex-col items-center text-center justify-start gap-5 pt-8 pb-7 px-7 rounded-xl border border-primary-green/30 bg-white/80 hover:border-cta-gold/70 hover:shadow-lg transition-all">
                  <div className="text-primary-green p-4 rounded-full bg-gradient-to-br from-primary-green/20 via-cta-gold/25 to-primary-blue/10 border border-primary-green/20">
                    <CardIcon type={way.icon} />
                  </div>
                  <h3 className="text-2xl leading-tight font-quicksand font-bold text-primary-blue uppercase">
                    {way.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partnership & Access Section */}
      <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="w-24 h-1 bg-primary-green/45 rounded-full mx-auto" />

            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Creating access means removing barriers and building intentional pathways to participation. Through partnership and support, we ensure athletes of all abilities have the opportunity to learn, play, and compete.
            </p>
            
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Join us in advancing inclusion and expanding access nationwide. By partnering with Adaptive Golf Alliance Foundation, you invest in programs that empower athletes, strengthen communities, and create lasting impact through sport.
            </p>
            
            <p className="text-xl md:text-2xl font-quicksand font-semibold text-primary-blue">
              Be part of the movement.
            </p>
            
            <p className="text-primary-red font-quicksand font-bold text-xl">
              #AccessThroughGolf
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link to={ROUTES.connect}>
                <Button variant="gold" size="lg">
                  Connect With Us
                </Button>
              </Link>
              <Link to={ROUTES.donate}>
                <Button variant="gold" size="lg">
                  Donate
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors Section */}
      <motion.section variants={itemVariants} className="section-padding bg-gradient-to-b from-[#f7f9ef] to-[#fff8eb]">
        <div className="container-custom">
          <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-10 xl:-mx-14 px-4 sm:px-6 lg:px-10 xl:px-14">
            <motion.div
              className="flex w-max gap-6 md:gap-8 py-1"
              variants={itemVariants}
              style={{ animation: 'sponsorsMarquee 30s linear infinite' }}
            >
              {loopingSponsors.map((sponsor, index) => (
                <div key={`${sponsor.name}-${index}`} className="shrink-0 w-[240px] sm:w-[270px] md:w-[300px]">
                  <div className="h-full rounded-xl border border-primary-green/30 bg-white/85 p-6 md:p-8 flex items-center justify-center hover:border-cta-gold/70 hover:shadow-lg transition-all">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-20 sm:h-24 md:h-28 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <style>
            {`
              @keyframes sponsorsMarquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}
          </style>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default GetInvolved;
