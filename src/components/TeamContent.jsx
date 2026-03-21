import React, { useState } from 'react';
import { motion } from 'framer-motion';
import assessorImage from '../asseser.jpeg';
import anandImage from '../anand.jpeg';
import prakashImage from '../prakash.jpeg';
import revannaImage from '../revanna.jpeg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const TeamContent = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const coachingTeam = [
    {
      name: 'Anand M',
      title: 'EDGA Sampler Coach',
      image: anandImage,
      course: 'Jayachamaraja Wadiyar Golf Club, Mysore',
    },
    {
      name: 'Prakash M',
      title: 'EDGA Sampler Coach',
      image: prakashImage,
      course: 'Hyderabad Golf Club, Telangana',
      imagePosition: 'center top',
      imageTransform: 'translateY(-36px) scale(1.05)',
    },
    {
      name: 'Revanna B',
      title: 'EDGA Sampler Coach',
      image: revannaImage,
      course: 'BGS International Residential School, Bangalore',
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="font-quicksand">
      <motion.section variants={itemVariants} className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-quicksand font-bold text-primary-blue mb-10 text-center">AGAF Team</h2>
          <p className="text-center text-lg md:text-xl text-primary-green font-quicksand font-semibold -mt-6 mb-10">
            Together we make a difference
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-green mb-4">Eligibility Assessment Team</h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                Adaptive Golf Alliance implements a structured eligibility and classification system to ensure fair and equitable participation for golfers with disabilities. Our trained assessors evaluate functional ability in alignment with international standards, supporting integrity, inclusion, and competitive balance across all events.
              </p>

              <div className="mt-6">
                <img
                  src={assessorImage}
                  alt="Dr. A. S. Gautham"
                  className="w-40 h-40 md:w-44 md:h-44 rounded-xl object-cover border border-gray-200 shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <p className="mt-3 text-base font-quicksand font-semibold text-primary-blue">Dr. A. S. Gautham (PT)</p>
                <button
                  type="button"
                  onClick={() => setIsBioOpen(true)}
                  className="mt-1 text-primary-blue underline decoration-primary-blue/40 underline-offset-4 hover:text-primary-green"
                >
                  Bio
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-quicksand font-bold text-primary-green mb-4">AGAF&apos;s Core Coaching Team</h3>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Our certified adaptive golf coaches specialize in individualized instruction, ensuring every golfer receives tailored support to develop skill, confidence, and competitive readiness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {coachingTeam.map((coach) => (
                  <div key={coach.name} className="group [perspective:1200px]">
                    <div className="relative h-72 w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden border border-primary-blue/15 shadow-sm [backface-visibility:hidden] bg-[#f4f6fa]">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="h-full w-full object-cover"
                          style={{
                            objectPosition: coach.imagePosition || 'center top',
                            transform: coach.imageTransform || 'none',
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-x-3 bottom-3 bg-white/95 rounded-lg px-3 py-2 text-center border border-primary-blue/10">
                          <p className="text-lg font-quicksand font-bold text-primary-blue leading-tight">{coach.name}</p>
                          <p className="text-sm font-quicksand font-semibold text-primary-green mt-0.5">{coach.title}</p>
                        </div>
                      </div>

                      <div className="absolute inset-0 rounded-2xl border border-primary-green/25 bg-gradient-to-br from-[#f7f9ef] to-[#eef4ea] p-5 shadow-sm [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                        <p className="text-2xl font-quicksand font-bold text-primary-blue mb-2">{coach.name}</p>
                        <p className="text-base font-quicksand font-semibold text-primary-green mb-4">{coach.title}</p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {coach.course}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isBioOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <button
                type="button"
                aria-label="Close bio"
                onClick={() => setIsBioOpen(false)}
                className="absolute inset-0 bg-black/50"
              />

              <div className="relative w-full max-w-4xl max-h-[88svh] overflow-y-auto rounded-xl bg-white shadow-2xl border border-primary-blue/20">
                <div className="sticky top-0 bg-primary-blue text-white px-5 py-4 flex items-center justify-between">
                  <h4 className="text-2xl font-quicksand font-bold">Bio for Dr. A. S. Gautham</h4>
                  <button
                    type="button"
                    onClick={() => setIsBioOpen(false)}
                    className="text-3xl leading-none opacity-90 hover:opacity-100"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-5 text-gray-800">
                  <h5 className="text-3xl font-quicksand font-bold text-primary-blue">Dr. A. S. Gautham (PT)</h5>

                  <div className="space-y-1 text-lg leading-relaxed">
                    <p>Sports Physiotherapist</p>
                    <p>Associate Professor, Prudence College of Physiotherapy</p>
                    <p>APA Sports Physiotherapy Level 1 (Australia)</p>
                    <p>Reg No: MIAP L-18440</p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Dr. Gautham A. S. is an accomplished Associate Professor and Sports Medicine Physiotherapist with over 15 years of clinical, academic, and on-field experience. Based in Bangalore, he runs specialized sports medicine clinics focused on advanced rehabilitation, injury management, and performance enhancement.
                  </p>

                  <div>
                    <p className="text-2xl font-quicksand font-bold text-primary-green mb-2">Professional Highlights</p>
                    <ul className="list-disc pl-6 space-y-1 text-lg leading-relaxed">
                      <li>Certified in Sports Medicine by BCCI (SSSM Level 1)</li>
                      <li>APA-registered Sports Therapist (Australia)</li>
                      <li>National Assessor for India&apos;s Para Golfers</li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    He has also treated high-profile public personalities and athletes, and is recognized for combining research, teaching, and elite sports exposure to advance athlete rehabilitation and inclusive sports excellence in India.
                  </p>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsBioOpen(false)}
                      className="px-5 py-2.5 rounded-lg bg-primary-blue text-white font-quicksand font-semibold hover:bg-primary-green transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TeamContent;
