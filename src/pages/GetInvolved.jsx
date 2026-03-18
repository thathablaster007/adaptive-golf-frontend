import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';
import getInvolved1 from '../Get involved 1.JPG';
import getInvolved2 from '../get involved 2.JPG';
import getInvolved3 from '../get involved 3.JPG';

const CardIcon = ({ type }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'w-20 h-20 md:w-24 md:h-24',
    'aria-hidden': true,
  };

  if (type === 'donate') {
    return (
      <svg {...commonProps}>
        <path d="M4 14.5h4.6c1.4 0 2.7-.6 3.6-1.7l1.7-2.2a2.4 2.4 0 0 1 3.5-.4l1.2 1.1a1.6 1.6 0 0 1-.2 2.5l-5.6 3.8a5.4 5.4 0 0 1-2.9.9H4" />
        <path d="M2.5 13h1.5v7H2.5z" />
        <circle cx="16.5" cy="6" r="3" />
        <path d="M15.6 6h1.8M16.5 5.1v1.8" />
      </svg>
    );
  }

  if (type === 'csr') {
    return (
      <svg {...commonProps}>
        <path d="M5 10.5 8.6 7h2.8L14 9.4h1.8L19 7l3 3-4.4 4.6a2.1 2.1 0 0 1-3 0l-2.3-2.2-2.1 2a2.1 2.1 0 0 1-3 0L3 10.2" />
        <path d="M7.2 6.2h3M13.8 6.2h3" />
      </svg>
    );
  }

  if (type === 'expertise') {
    return (
      <svg {...commonProps}>
        <circle cx="6.2" cy="15.2" r="1.7" />
        <circle cx="12" cy="16.2" r="2.1" />
        <circle cx="17.8" cy="15.2" r="1.7" />
        <path d="M9 20a3 3 0 0 1 6 0" />
        <path d="M4.8 20a3 3 0 0 1 2.8-2.3" />
        <path d="M16.4 17.7A3 3 0 0 1 19.2 20" />
        <path d="M12 3.5a3 3 0 0 1 3 3c0 1.1-.5 1.9-1.2 2.5-.8.6-1.3 1.2-1.3 2" />
        <path d="M12 13.2h.01" />
      </svg>
    );
  }

  if (type === 'events') {
    return (
      <svg {...commonProps}>
        <path d="M4 5h16v8H4z" />
        <path d="M8 17h8" />
        <path d="M10 17v2M14 17v2" />
        <path d="M12 7.4 12.7 9h1.8l-1.4 1 0.6 1.7-1.4-1-1.4 1 0.6-1.7-1.4-1h1.8z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="11" cy="8" r="3.2" />
      <path d="M5.2 18.5a5.8 5.8 0 0 1 11.6 0" />
      <path d="M19 12v6" />
      <path d="M16 15h6" />
    </svg>
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
      title: 'Donate as an Individual or Corporate',
      icon: 'donate',
    },
    {
      id: 'partner',
      title: 'Partner Through CSR',
      icon: 'csr',
    },
    {
      id: 'expertise',
      title: 'Offer Your Expertise',
      icon: 'expertise',
    },
    {
      id: 'sponsor',
      title: 'Sponsor our Conclaves & Events',
      icon: 'events',
    },
    {
      id: 'work',
      title: 'Work With Us',
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

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      {/* Hero */}
      <motion.section variants={itemVariants} className="relative h-[28rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex">
          {[getInvolved1, getInvolved2, getInvolved3].map((imageSrc, idx) => (
            <div key={idx} className="relative w-1/3 h-full">
              <img
                src={imageSrc}
                alt={`Get involved header panel ${idx + 1}`}
                className={`h-full w-full object-cover ${idx === 0 ? 'object-[50%_28%]' : 'object-center'}`}
                loading="eager"
                decoding="async"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
              />
            </div>
          ))}
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
                <div className="h-full flex flex-col items-center text-center justify-center gap-5 p-7 rounded-xl border border-primary-green/30 bg-white/80 hover:border-cta-gold/70 hover:shadow-lg transition-all">
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

            <div className="pt-4">
              <Link to={ROUTES.connect}>
                <Button variant="gold" size="lg">
                  Connect With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default GetInvolved;
