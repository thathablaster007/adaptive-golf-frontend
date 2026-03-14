import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';
import { ROUTES } from '../config/navigation';

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const involvementWays = [
    {
      id: 'donate',
      title: 'Donate as an Individual or Corporate',
      icon: '💰',
    },
    {
      id: 'partner',
      title: 'Partner Through CSR',
      icon: '🤝',
    },
    {
      id: 'expertise',
      title: 'Offer Your Expertise',
      icon: '💡',
    },
    {
      id: 'sponsor',
      title: 'Sponsor our Conclaves & Events',
      icon: '🎤',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero */}
      <motion.section variants={itemVariants} className="bg-gradient-to-br from-primary-green via-accent-lime to-cta-gold text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-montserrat font-bold mb-4">Join the Movement</h1>
          <p className="text-2xl font-montserrat font-semibold">Be Part of the Pathway</p>
        </div>
      </motion.section>

      {/* Mission Description */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Every athlete deserves the opportunity to discover their potential. Every community deserves inclusive spaces where ability is celebrated.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            At Adaptive Golf Alliance Foundation, we are building more than programs — we are building pathways, confidence, and lifelong connections through the game of golf. Together with our partners, volunteers, and supporters, we are expanding what is possible for athletes with disabilities.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you are an athlete, coach, volunteer, donor, or advocate — there is a place for you here.
          </p>
          
          <p className="text-xl font-montserrat font-bold text-primary-blue">
            Because when access grows, opportunity follows.
          </p>
        </div>
      </motion.section>

      {/* How You Can Get Involved Cards */}
      <motion.section variants={itemVariants} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-h2 font-montserrat font-bold text-primary-red mb-2">How You Can Get Involved?</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {involvementWays.map((way, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full flex flex-col items-center text-center gap-6 p-8 border-2 border-primary-red">
                  <div className="text-5xl">{way.icon}</div>
                  <h3 className="text-lg font-montserrat font-bold text-primary-red">{way.title}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partnership & Access Section */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center space-y-8">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Creating access means removing barriers and building intentional pathways to participation. Through partnership and support, we ensure athletes of all abilities have the opportunity to learn, play, and compete.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us in advancing inclusion and expanding access nationwide. By partnering with Adaptive Golf Alliance Foundation, you invest in programs that empower athletes, strengthen communities, and create lasting impact through sport.
            </p>
            
            <p className="text-xl font-montserrat font-bold text-primary-blue">
              Be part of the movement.
            </p>
            
            <p className="text-primary-red font-montserrat font-bold text-lg">
              #AccessThroughGolf
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Connect With Us Form */}
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-h2 font-montserrat font-bold text-primary-red">Connect With Us</h2>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-primary-blue outline-none text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-primary-blue outline-none text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-primary-blue outline-none text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pb-2 border-b-2 border-gray-300 focus:border-primary-blue outline-none text-gray-700 placeholder-gray-400"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className="w-full pb-2 border-b-2 border-gray-300 focus:border-primary-blue outline-none text-gray-700 placeholder-gray-400 resize-none"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-end pt-4">
              <Button variant="secondary" size="lg" type="submit">
                Submit
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default GetInvolved;
