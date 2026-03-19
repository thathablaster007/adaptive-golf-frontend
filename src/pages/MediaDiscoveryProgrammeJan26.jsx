import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const galleryFiles = [
  '1.JPG',
  '5.JPG',
  '6.JPG',
  '7.JPG',
  '8.JPG',
  '9.JPG',
  '10.JPG',
  '11.JPG',
  '11(1).JPG',
  '12.JPG',
  '13.JPG',
  '14.JPG',
  '15.JPG',
  '16.JPG',
  '17.JPG',
  '18.JPG',
  '19.JPG',
  '20.JPG',
  '21.JPG',
  '22.JPG',
  '23.JPG',
  '24.JPG',
  '25.JPG',
  '26.JPG',
  '27.JPG',
  '28.JPG',
  '29.JPG',
  '30.JPG',
  '31.JPG',
  '32.JPG',
  '33.JPG',
];

const galleryImages = galleryFiles.map((fileName) => ({
  src: require(`../Pictures for Scott/${fileName}`),
  alt: `Discovery Programme 26 Jan 2026 photo ${fileName}`,
}));

const MediaDiscoveryProgrammeJan26 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="section-padding bg-[#e5e5e5] font-quicksand"
    >
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="font-quicksand text-4xl md:text-5xl font-bold text-primary-blue mb-3">
            Discovery Programme 26th Jan 2026
          </h1>
          <p className="font-quicksand text-lg md:text-xl text-gray-700">
            Event gallery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={`${image.alt}-${idx}`} className="bg-white overflow-hidden shadow-sm">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 md:h-44 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/media"
            className="inline-flex items-center justify-center rounded-full border border-primary-blue/35 bg-white px-6 py-3 font-quicksand text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-300"
          >
            Back to Media
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaDiscoveryProgrammeJan26;
