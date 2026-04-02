import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const galleryFiles = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '8(1).jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
];

const MediaDiscoveryDayVisualImpairment = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentPhotos = useMemo(
    () =>
      galleryFiles.map((fileName) => ({
        src: require(`../Media2/${fileName}`),
        alt: `Discovery Day for Visual Impairment Participants photo ${fileName}`,
      })),
    []
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

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
            Discovery Day for Visual Impairment Participants
          </h1>
          <p className="font-quicksand text-lg md:text-xl text-gray-700">
            Event gallery ({galleryFiles.length} photos)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {currentPhotos.map((image, idx) => (
            <motion.div
              key={`${image.alt}-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="block w-full text-left"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 md:h-64 object-cover object-top cursor-zoom-in"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 p-4 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[92vh] object-contain"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl leading-none"
                aria-label="Close image preview"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>

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

export default MediaDiscoveryDayVisualImpairment;
