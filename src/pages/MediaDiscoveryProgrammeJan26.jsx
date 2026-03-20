import React, { useState } from 'react';
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

const PHOTOS_PER_PAGE = 12;

const MediaDiscoveryProgrammeJan26 = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(galleryImages.length / PHOTOS_PER_PAGE);
  const startIdx = currentPage * PHOTOS_PER_PAGE;
  const endIdx = startIdx + PHOTOS_PER_PAGE;
  const currentPhotos = galleryImages.slice(startIdx, endIdx);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
            Event gallery ({galleryImages.length} photos)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentPhotos.map((image, idx) => (
            <motion.div 
              key={`${image.alt}-${startIdx + idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 md:h-44 object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 0}
            className="inline-flex items-center justify-center rounded-full border border-primary-blue/35 bg-white px-6 py-3 font-quicksand text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-primary-blue"
          >
            ← Previous
          </button>

          <span className="font-quicksand text-primary-blue font-semibold">
            Page {currentPage + 1} of {totalPages}
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
            className="inline-flex items-center justify-center rounded-full border border-primary-blue/35 bg-white px-6 py-3 font-quicksand text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-primary-blue"
          >
            Next →
          </button>
        </div>

        <div className="mt-8">
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
