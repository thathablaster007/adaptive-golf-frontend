import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import { validateForm } from '../utils/formValidation';
import contactHero from '../Try golf 7.JPG';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_prqr2v7';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_3b1vcyt';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '0oAwXYHLHepcLp7WU';

const Connect = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedIn: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: formErrors } = validateForm(formData);

    if (!isValid) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: 'New enquiry',
          name: formData.name,
          email: formData.email,
          interested_in: formData.interestedIn,
          message: formData.message,
          submitted_at: new Date().toLocaleString(),
          to_email: 'contactus@adaptivegolfalliance.com',
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', interestedIn: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setSubmitError('We could not send your message right now. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="relative h-[28rem] md:h-[34rem] lg:h-[38rem] bg-gray-900 overflow-hidden">
        <img
          src={contactHero}
          alt="Contact Adaptive Golf Alliance Foundation"
          className="absolute inset-0 h-full w-full object-cover object-[50%_24%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-quicksand font-medium tracking-wide text-white">
            Contact Us
          </h1>
        </div>
      </motion.section>

      {/* Left Sidebar and Form */}
      <div className="section-padding bg-[#f2f1ea]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="bg-white/85 p-7 rounded-xl border border-primary-green/20 sticky top-24">
                <p className="font-quicksand font-bold text-primary-blue text-2xl mb-3">Get in touch</p>
                <p className="text-gray-700 leading-relaxed mb-3">Have a question about programmes, participation, partnerships, or support?</p>
                <p className="text-gray-700 leading-relaxed mb-4">Reach out and our team will get back to you.</p>
              <a 
                href="mailto:contactus@adaptivegolfalliance.com"
                  className="text-primary-green font-semibold hover:text-primary-blue transition-colors break-words"
              >
                contactus@adaptivegolfalliance.com
              </a>
            </div>
            </motion.div>

          {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="mb-8 md:mb-10">
                <div className="w-20 h-1 bg-primary-green/45 rounded-full mb-5" />
                <p className="font-quicksand font-bold text-primary-blue text-3xl md:text-4xl mb-4">
                  Access Starts here
                </p>
                <div className="space-y-2 text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl">
                  <p>You don't need to see the ball to feel the game.</p>
                  <p>You don't need to be perfect to begin.</p>
                  <p>All you need is curiosity and courage.</p>
                </div>
              </div>

            {/* Tabs */}
              <div className="flex gap-3 mb-8 flex-wrap">
              <button
                onClick={() => setActiveTab('register')}
                  className={`px-6 py-3 rounded-full font-quicksand font-semibold transition-colors ${
                  activeTab === 'register'
                      ? 'bg-primary-blue text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-blue hover:text-primary-blue'
                }`}
              >
                Register Your Interest
              </button>
              <button
                onClick={() => setActiveTab('pass')}
                  className={`px-6 py-3 rounded-full font-quicksand font-semibold transition-colors ${
                  activeTab === 'pass'
                      ? 'bg-primary-blue text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-blue hover:text-primary-blue'
                }`}
              >
                Apply for a Pass
              </button>
              </div>

            {/* Tab Content - Register Interest */}
            {activeTab === 'register' && (
              <motion.div
                variants={itemVariants}
                key="register"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                  <div className="bg-white rounded-xl border border-primary-blue/15 p-7 md:p-9">
                    <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-3">
                  Register Your Interest
                </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Join us on the journey to inclusive golf. Fill out the form below to get started.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
                        <p className="font-quicksand font-bold">Thank you for your interest!</p>
                    <p>We'll be in touch soon.</p>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg text-red-800">
                    <p className="font-quicksand font-semibold">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                        <label className="block font-quicksand font-bold text-gray-800 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                        <label className="block font-quicksand font-bold text-gray-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Interested In */}
                  <div>
                        <label className="block font-quicksand font-bold text-gray-800 mb-2">
                      I am a... <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                        errors.interestedIn ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select one</option>
                      <option value="player">Player</option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                      <option value="school">School</option>
                      <option value="club">Club</option>
                      <option value="organization">Organization</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.interestedIn && <p className="text-red-500 text-sm mt-1">{errors.interestedIn}</p>}
                  </div>

                  {/* Message */}
                  <div>
                        <label className="block font-quicksand font-bold text-gray-800 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your interest in adaptive golf..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                        <Button variant="gold" size="lg" type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Submit'}
                        </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', interestedIn: '', message: '' });
                        setErrors({});
                        setSubmitError('');
                      }}
                      disabled={isSubmitting}
                          className="px-8 py-4 border-2 border-gray-400 text-gray-800 font-quicksand font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </form>
                  </div>
              </motion.div>
            )}

            {/* Tab Content - Apply for Pass */}
            {activeTab === 'pass' && (
              <motion.div
                variants={itemVariants}
                key="pass"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                  <div className="bg-white rounded-xl border border-primary-blue/15 p-7 md:p-9">
                    <h2 className="text-3xl md:text-4xl font-quicksand font-bold text-primary-blue mb-3">
                  Apply for a Pass
                </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">
                      Continue your pass application on the official EDGA website.
                </p>

                    <p className="text-gray-700 mb-8">
                      Clicking the button below will redirect you to EDGA to complete your pass application.
                    </p>

                    <Button
                      variant="gold"
                      size="lg"
                      type="button"
                      onClick={() => window.location.assign('https://edgagolf.com/online/pass/?from=web24#')}
                    >
                      Apply for a Pass
                    </Button>
                  </div>
              </motion.div>
            )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
