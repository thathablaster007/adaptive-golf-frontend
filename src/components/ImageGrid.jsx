import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageGrid = ({ 
  images = [], 
  columns = 3,
  className = '',
  enableLightbox = true,
}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        className={`grid gap-4 ${
          columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
          columns === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
          'grid-cols-1 md:grid-cols-2'
        } ${className}`}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-lg bg-gray-200 cursor-pointer group"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            onClick={() => enableLightbox && setSelectedImage(image)}
          >
            <img
              src={image.src || image}
              alt={image.alt || `gallery-${idx}`}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {enableLightbox && selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-900 z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage.src || selectedImage}
              alt={selectedImage.alt || 'full-size'}
              className="w-full h-auto max-h-[80vh] object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ImageGrid;
