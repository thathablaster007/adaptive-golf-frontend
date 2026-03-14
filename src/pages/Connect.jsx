import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { validateForm } from '../utils/formValidation';

const Connect = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedIn: '',
    message: '',
    newsletter: false,
  });

  const [passFormData, setPassFormData] = useState({
    name: '',
    email: '',
    passType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePassFormChange = (e) => {
    const { name, value } = e.target;
    setPassFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors: formErrors } = validateForm(formData);

    if (isValid) {
      console.log('Form submitted:', formData);
      localStorage.setItem(`submission_${Date.now()}`, JSON.stringify(formData));
      setSubmitted(true);
      setFormData({ name: '', email: '', interestedIn: '', message: '', newsletter: false });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(formErrors);
    }
  };

  const handlePassSubmit = (e) => {
    e.preventDefault();
    console.log('Pass form submitted:', passFormData);
    localStorage.setItem(`pass_submission_${Date.now()}`, JSON.stringify(passFormData));
    setSubmitted(true);
    setPassFormData({ name: '', email: '', passType: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
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
    >
      {/* Hero Section */}
      <motion.section variants={itemVariants} className="bg-gradient-to-r from-primary-green to-primary-blue text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-h1 font-montserrat font-bold mb-4">Access Starts here</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            You don't need to see the ball to feel the game.<br />
            You don't need to be perfect to begin.<br />
            All you need is curiosity and courage.
          </p>
        </div>
      </motion.section>

      {/* Left Sidebar and Form */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <p className="font-montserrat font-bold text-primary-blue mb-3">Get in touch</p>
              <a 
                href="mailto:contactus@adaptivegolfalliance.com"
                className="text-primary-blue hover:text-primary-green transition-colors break-words"
              >
                contactus@adaptivegolfalliance.com
              </a>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-300">
              <button
                onClick={() => setActiveTab('register')}
                className={`px-6 py-3 font-montserrat font-bold transition-colors border-b-2 ${
                  activeTab === 'register'
                    ? 'text-primary-blue border-primary-blue'
                    : 'text-gray-600 border-transparent hover:text-primary-blue'
                }`}
              >
                Register Your Interest
              </button>
              <button
                onClick={() => setActiveTab('pass')}
                className={`px-6 py-3 font-montserrat font-bold transition-colors border-b-2 ${
                  activeTab === 'pass'
                    ? 'text-primary-blue border-primary-blue'
                    : 'text-gray-600 border-transparent hover:text-primary-blue'
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
                <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-2">
                  Register Your Interest
                </h2>
                <p className="text-gray-700 mb-8">
                  Join us on the journey to inclusive golf. Fill out the form below to get started.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
                    <p className="font-montserrat font-bold">Thank you for your interest!</p>
                    <p>We'll be in touch soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
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
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
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
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
                      What are you interested in? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue ${
                        errors.interestedIn ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">-- Select an option --</option>
                      <option value="try-golf">Try Golf</option>
                      <option value="become-coach">Become a Coach</option>
                      <option value="competition">Competition</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="donate">Donate</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.interestedIn && <p className="text-red-500 text-sm mt-1">{errors.interestedIn}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
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

                  {/* Newsletter */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <label htmlFor="newsletter" className="text-gray-700 cursor-pointer">
                      I'd like to receive updates and news from AGAF
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="gold" size="lg">
                      Submit
                    </Button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ name: '', email: '', interestedIn: '', message: '', newsletter: false });
                        setErrors({});
                      }}
                      className="px-8 py-4 border-2 border-gray-400 text-gray-800 font-montserrat font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </form>
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
                <h2 className="text-2xl font-montserrat font-bold text-primary-blue mb-2">
                  Apply for a Pass
                </h2>
                <p className="text-gray-700 mb-8">
                  Ready to participate? Apply for a pass to join our programs and events.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-800">
                    <p className="font-montserrat font-bold">Your application has been received!</p>
                    <p>We'll review your application and get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handlePassSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={passFormData.name}
                      onChange={handlePassFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={passFormData.email}
                      onChange={handlePassFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  {/* Pass Type */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
                      Type of Pass <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="passType"
                      value={passFormData.passType}
                      onChange={handlePassFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      required
                    >
                      <option value="">-- Select a pass type --</option>
                      <option value="player">Player Pass</option>
                      <option value="coach">Coach Pass</option>
                      <option value="family">Family Pass</option>
                      <option value="volunteer">Volunteer Pass</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-montserrat font-bold text-gray-800 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={passFormData.message}
                      onChange={handlePassFormChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                      placeholder="Tell us more about yourself (optional)"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="gold" size="lg">
                      Submit Application
                    </Button>
                    <button
                      type="button"
                      onClick={() => setPassFormData({ name: '', email: '', passType: '', message: '' })}
                      className="px-8 py-4 border-2 border-gray-400 text-gray-800 font-montserrat font-bold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Connect;
