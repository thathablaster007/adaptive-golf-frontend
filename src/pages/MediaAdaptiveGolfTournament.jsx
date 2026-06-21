import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const galleryFiles = [
    'DDS00002.jpg',
    'DDS00007.jpg',
    'DDS00033.jpg',
    'DDS00036.jpg',
    'DDS00042.jpg',
    'DDS00043.jpg',
    'DDS00079.jpg',
    'DDS00086.jpg',
    'DDS00089.jpg',
    'DDS00093.jpg',
    'DDS00103.jpg',
    'DDS00105.jpg',
    'DDS00107.jpg',
    'DDS00112.jpg',
    'DDS00113.jpg',
    'DDS00114.jpg',
    'DDS00117.jpg',
    'DDS00120.jpg',
    'DDS00125.jpg',
    'DDS00126.jpg',
    'DDS00128.jpg',
    'DDS00130.jpg',
    'DDS00135 (1).jpg',
    'DDS00135.jpg',
    'DDS00137.jpg',
    'DDS00142.jpg',
    'DDS00150.jpg',
    'DDS00155.jpg',
    'DDS00167.jpg',
    'DDS00170 (1).jpg',
    'DDS00170.jpg',
    'DDS00174.jpg',
    'DDS00177.jpg',
    'DDS00179.jpg',
    'DDS00185.jpg',
    'DDS00188.jpg',
    'DDS00191.jpg',
    'DDS00194.jpg',
    'DDS00199.jpg',
    'DDS00202.jpg',
    'DDS00205.jpg',
    'DDS00207.jpg',
    'DDS00217.jpg',
    'DDS00261.jpg',
    'DDS00267.jpg',
    'DDS00270.jpg',
    'DDS00273.jpg',
    'DDS00280.jpg',
    'DDS00290.jpg',
    'DDS00297.jpg',
    'DDS00300.jpg',
    'DDS00308.jpg',
    'DDS00319.jpg',
    'DDS00321.jpg',
    'DDS00324.jpg',
    'DDS00330.jpg',
    'DDS00336.jpg',
    'DDS00342.jpg',
    'DDS00344.jpg',
    'DDS00352.jpg',
    'DDS00362.jpg',
    'DDS00366.jpg',
    'DDS00380.jpg',
    'DDS00382.jpg',
    'DDS00383.jpg',
    'DDS00385.jpg',
    'DDS00409.jpg',
    'DDS00410.jpg',
    'DDS00415.jpg',
    'DDS00423.jpg',
    'DDS00430.jpg',
    'DDS00463.jpg',
    'DDS00467.jpg',
    'DDS00517.jpg',
    'DDS00533.jpg',
    'DDS00576.jpg',
    'DDS00648.jpg',
    'DDS00721.jpg',
    'DDS00727.jpg',
    'DDS00796.jpg',
    'DDS00813.jpg',
    'DDS00833.jpg',
    'DDS00848.jpg',
    'DDS00855.jpg',
    'DDS00901.jpg',
    'DDS00930.jpg',
    'DDS00938.jpg',
    'DDS00946.jpg',
    'DDS00971.jpg',
    'DDS01018.jpg',
    'DDS01025.jpg',
    'DDS01063.jpg',
    'DDS01095.jpg',
    'DDS01096.jpg',
    'DDS01136.jpg',
    'DDS01150.jpg',
    'DDS01154.jpg',
    'DDS01162.jpg',
    'DDS01185.jpg',
    'DDS01190.jpg',
    'DDS01202.jpg',
    'DDS01204.jpg',
    'DDS01205.jpg',
    'DDS01215.jpg',
    'DDS01273.jpg',
    'DDS01387.jpg',
    'DDS01393.jpg',
    'DDS01395.jpg',
    'DDS01460.jpg',
    'DDS01461.jpg',
    'DDS01509.jpg',
    'DDS01529.jpg',
    'DDS01574.jpg',
    'DDS01612.jpg',
    'DDS01664.jpg',
    'DDS01672.jpg',
    'DDS01677.jpg',
    'DDS01680.jpg',
    'DDS01682.jpg',
    'DDS01687.jpg',
    'DDS01688.jpg',
];

const MediaAdaptiveGolfTournament = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const currentPhotos = useMemo(
        () =>
            galleryFiles.map((fileName) => ({
                src: require(`../Media3/${fileName}`),
                alt: `Adaptive Golf Tournament photo ${fileName}`,
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
                        India Adaptive Open 1st - 3rd June 2026
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

export default MediaAdaptiveGolfTournament;
