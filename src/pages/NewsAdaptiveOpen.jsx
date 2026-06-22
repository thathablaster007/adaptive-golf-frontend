import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../components/Button';
import { ROUTES } from '../config/navigation';
import starOfMysoreClipping from '../Alok_News.jpeg';
import Article from '../Article.png';
import Press from '../Press.png';
import adaptiveOpenPdf from '../AdaptiveOpen.pdf';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

const NewsAdaptiveOpen = () => {
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
                        India Adaptive Open 2026: A Historic First
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
                        The India Adaptive Open 2026 marked a watershed moment in Indian sport as the country's first national golf championship for golfers with disabilities. Hosted at the prestigious Bangalore Golf Club in collaboration with the Adaptive Golf Alliance Foundation, the tournament brought together players representing a wide range of disabilities and showcased the remarkable talent, determination, and competitive spirit within India's adaptive golf community.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        Beyond the competition itself, the championship represented the beginning of a structured pathway for Indian adaptive golfers to participate in nationally recognized events, pursue international rankings, and compete on the global stage. The event attracted media attention, celebrated inspiring player journeys, and demonstrated how golf can be a truly inclusive sport for athletes of all abilities.
                    </p>

                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
                        Explore the tournament through press releases, media coverage, player stories, photographs, results, and highlights from this landmark event that is helping shape the future of adaptive golf in India.
                    </p>

                    {/* ── Featured Video ── */}
                    <div className="pt-3">
                        <h2 className="text-2xl md:text-3xl font-quicksand font-semibold text-primary-blue mb-5">
                            Featured Video
                        </h2>
                        <div
                            className="relative w-full bg-black rounded-2xl overflow-hidden shadow-lg"
                            style={{ aspectRatio: '16/9' }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/IwK7zzE4tAM"
                                title="India Adaptive Open 2026 — Highlights"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* ── Card 1 – Newspaper Clipping ── */}
                        <motion.div
                            variants={itemVariants}
                            onClick={() =>
                                setSelectedImage({
                                    src: starOfMysoreClipping,
                                    alt: "Star of Mysore newspaper clipping"
                                })
                            }
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={starOfMysoreClipping}
                                    alt="Star of Mysore newspaper clipping — Mysuru's Aalok Jain to tee off in golf for persons with disabilities"
                                    className="w-full h-64 object-cover object-center object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green mb-2">
                                    Print Media
                                </p>
                                <h3 className="text-base font-quicksand font-bold text-primary-blue leading-snug mb-1">
                                    Star of Mysore
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                    Mysuru's Aalok Jain to tee off in golf for persons with disabilities — coverage of India's first adaptive golf national championship.
                                </p>
                            </div>
                        </motion.div>

                        {/* ── Card 2 – Tee Time Tales Article ── */}
                        <motion.a
                            variants={itemVariants}
                            href="https://teetimetales.com/bhati-dominates-first-edition-of-adaptive-golf-open-at-bgc/"
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group"
                        >
                            {/* Article preview banner */}
                            <div className="relative overflow-hidden bg-gray-100 ">
                                <img
                                    src={Article}
                                    alt="Aricle"
                                    className="w-full h-64 object-cover object-center object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green mb-2">
                                    Online Media
                                </p>
                                <h3 className="text-base font-quicksand font-bold text-primary-blue leading-snug mb-1 group-hover:text-primary-green transition-colors duration-200">
                                    Tee Time Tales
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                    Full match report and analysis of Vishwa Vardhan Bhati's dominant performance at the inaugural India Adaptive Open.
                                </p>
                                <p className="mt-4 text-sm font-semibold text-primary-blue group-hover:text-primary-green transition-colors duration-200 inline-flex items-center gap-1">
                                    Read Article <span aria-hidden="true">→</span>
                                </p>
                            </div>
                        </motion.a>

                        {/* ── Card 3 – Press Release PDF Download ── */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                        >
                            {/* PDF icon banner */}
                            <div className="relative overflow-hidden bg-gray-100">
                                <img
                                    src={Press}
                                    alt="Press"
                                    className="w-full h-64 object-cover object-center object-top"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green mb-2">
                                    Press Release
                                </p>
                                <h3 className="text-base font-quicksand font-bold text-primary-blue leading-snug mb-1">
                                    Official Press Release
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                    Download the official press release document for the India Adaptive Open 2026 at Bangalore Golf Club.
                                </p>
                                <a
                                    href={adaptiveOpenPdf}
                                    download="India-Adaptive-Open-2026-Press-Release.pdf"
                                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#3f8354] transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                    Download PDF
                                </a>
                            </div>
                        </motion.div>

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

export default NewsAdaptiveOpen;
