import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import photo1 from '../Czech (1).jpeg';
import photo2 from '../Czech (2).jpeg';
import photo3 from '../Czech (3).jpeg';
import photo4 from '../Czech (4).jpeg';
import photo5 from '../Czech (5).jpeg';
import photo6 from '../Czech (6).jpeg';
import photo7 from '../Czech (7).jpeg';
import photo8 from '../Czech (8).jpeg';
import photo9 from '../Czech (9).jpeg';
import photo10 from '../Czech (10).jpeg';
import Button from '../components/Button';
import Article from '../ArticleCzech.png';

const galleryPhotos = [
    { src: photo1, alt: 'Photo 1' },
    { src: photo2, alt: 'Photo 2' },
    { src: photo3, alt: 'Photo 3' },
    { src: photo4, alt: 'Photo 4' },
    { src: photo5, alt: 'Photo 5' },
    { src: photo6, alt: 'Photo 6' },
    { src: photo7, alt: 'Photo 7' },
    { src: photo8, alt: 'Photo 8' },
    { src: photo9, alt: 'Photo 9' },
    { src: photo10, alt: 'Photo 10' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

const NewsCzechDisableOpen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="font-quicksand"
        >
            {/* ── Hero / Header ── */}
            <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
                <div className="container-custom max-w-5xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-semibold text-primary-blue leading-tight mb-8">
                        Indian Adaptive Golfers Shine at the Czech Disabled Golf Masters 2026
                    </h1>
                    <Link to={ROUTES.news}>
                        <Button variant="outline" size="md">← Back to News</Button>
                    </Link>
                </div>
            </motion.section>

            {/* ── Body Copy ── */}
            <motion.section variants={itemVariants} className="section-padding bg-white">
                <div className="container-custom max-w-5xl space-y-8">
                    <div className="w-24 h-1 bg-primary-green/45 rounded-full" />

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        The Adaptive Golf Alliance Foundation is proud to celebrate a landmark achievement for Indian adaptive golf as our players delivered an outstanding performance at the Czech Disabled Golf Masters 2026, held at Golf Resort Black Bridge, Prague, Czech Republic.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        Representing India on the international stage for the very first time at this prestigious EDGA World Ranking event, Vishwa Vardhan Bhati and Ankush Saha showcased exceptional skill, resilience and determination against a strong international field of adaptive golfers from across the world.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        Vishwa Vardhan Bhati finished as the Runner-Up (Silver Medal) in the Stroke Play Nett category after an impressive and consistent performance throughout the championship. After leading the field following Round 1, he maintained his composure to secure a well-deserved podium finish.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        Making his international debut, Ankush Saha delivered an equally inspiring performance, finishing Third (Bronze Medal) in the Stroke Play Nett category. Competing in his very first EDGA tournament, Ankush demonstrated remarkable confidence and perseverance, earning his place among the tournament’s top finishers.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        This double podium finish marks a significant milestone for adaptive golf in India. It reflects the growing strength of Indian adaptive golfers and reinforces the belief that, with the right opportunities and support, athletes with disabilities can compete and excel on the global stage.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        The Adaptive Golf Alliance Foundation extends its heartfelt congratulations to Vishwa Vardhan Bhati and Ankush Saha on their exceptional achievements. We also express our deepest gratitude to GoSports Foundation for their unwavering hand-held support throughout this journey, to our CSR partner Genesis IT Innovations Limited for making the players’ international participation possible through their generous sponsorship, and to Toledo for proudly outfitting Team AGAF with the apparel they wore during the championship. Their belief in our mission and in the potential of our athletes continues to open doors and create opportunities for adaptive golfers to compete on the global stage.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        As we celebrate this proud moment, we remain committed to creating more opportunities, nurturing talent and building a future where adaptive golfers from India continue to inspire the world, one swing at a time.
                    </p>
                    <div className="pt-3">
                        <h2 className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-blue mb-5">
                            Event Gallery
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {galleryPhotos.map((image, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
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
                                            className="w-full h-56 object-cover object-center cursor-zoom-in"
                                        />
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ── Coverage Grid ── */}
            <motion.section variants={itemVariants} className="section-padding bg-[#f2f1ea]">
                <div className="container-custom max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-blue mb-10">
                        Coverage &amp; Resources
                    </h2>
                    <div className="max-w-md">
                        <motion.a
                            variants={itemVariants}
                            href="https://www.czdga.cz/ctyri-cenne-kovy-cesky-tym-czech-disabled-golf-masters-2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
                        >
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={Article}
                                    alt="Article"
                                    className="w-full h-64 object-cover object-center"
                                />
                            </div>

                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green mb-2">
                                    News Article
                                </p>

                                <h3 className="text-base font-quicksand font-bold text-primary-blue leading-snug mb-1 group-hover:text-primary-green transition-colors duration-200">
                                    CZDGA Coverage
                                </h3>

                                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                    Read the full article covering the event.
                                </p>

                                <p className="mt-4 text-sm font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-200">
                                    Read Article →
                                </p>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </motion.section>
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
                            className="max-w-full max-h-[95vh] object-contain"
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
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
        </motion.div>
    );
};

export default NewsCzechDisableOpen;
