import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES } from '../config/navigation';
import agaLogo from '../Logo_proper (2).png';
import heroImage from '../Media3/DDS00036.jpg';
import groupPhoto from '../Media3/DDS00380.jpg';
import secondLogo from '../img16.jpg';
import vishwaPhoto from '../vishwa.jpeg';

const seasonOptions = ['2026'];

const AgaCalendar = () => {
  const [season, setSeason] = useState('2026');
  const [selectedImage, setSelectedImage] = useState(null);

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

  const event = {
    number: '1',
    date: '1 Jun - 3 Jun 2026',
    month: 'June',
    title: 'Indian Golf Open 2026',
    venue: 'Bangalore Golf Club, Karnataka',
    practiceRound: '1st June, 2026',
    status: 'Completed',
    winner: 'Vishwa Vardhan Bhati',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="font-quicksand bg-white"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="relative h-[18rem] sm:h-[22rem] md:h-[26rem] bg-gray-900 overflow-hidden"
      >
        <img
          src={heroImage}
          alt="AGA calendar hero"
          className="absolute inset-0 h-full w-full object-cover object-[50%_34%]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative h-full flex items-end px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 lg:pb-12">
          <div className="max-w-5xl">
            <p className="mb-3 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.35em] text-white/80">
              Tournaments
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-quicksand font-semibold tracking-wide text-white">
              AGA Calendar
            </h1>
          </div>
        </div>
      </motion.section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6 flex flex-wrap items-center gap-4 bg-[#f3f3f3] px-5 py-4 shadow-sm w-fit">
            <label htmlFor="season-select" className="text-lg md:text-xl text-gray-800 font-medium">
              Season
            </label>
            <select
              id="season-select"
              value={season}
              onChange={(event) => setSeason(event.target.value)}
              className="min-w-[8rem] rounded-none border border-gray-200 bg-white px-4 py-2 text-base md:text-lg font-semibold text-gray-900 shadow-sm outline-none focus:border-primary-blue"
            >
              {seasonOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden lg:grid grid-cols-[72px_230px_minmax(420px,1fr)_230px_150px] gap-5 px-3 pb-4 text-primary-blue font-semibold text-lg xl:text-xl text-center items-center">
            <div>S.No.</div>
            <div>Date</div>
            <div>Tournament Name</div>
            <div>Winner</div>
            <div>Status</div>
          </div>

          <div className="rounded-none overflow-hidden border-t border-gray-200">
            <div className="bg-primary-blue px-6 py-5 text-white text-2xl md:text-3xl font-medium">
              {event.month}
            </div>

            <div className="border-b border-gray-200 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-[72px_230px_minmax(420px,1fr)_230px_150px] gap-5 px-6 py-7 lg:items-center">
                <div className="text-lg md:text-xl text-gray-900 lg:text-center lg:justify-self-center">{event.number}</div>

                <div className="lg:justify-self-start lg:self-center">
                  <div className="inline-flex flex-col gap-1.5 rounded-none bg-[#f7f7fb] px-4 py-3 text-blue-700 text-sm md:text-base font-medium shadow-sm">
                    <span>{event.date}</span>
                    <span className="text-sm md:text-base">{season}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-14">
                  <div className="shrink-0 flex flex-col items-center justify-center gap-3 lg:pt-1 lg:self-center">
                    <img
                      src={agaLogo}
                      alt="Adaptive Golf Alliance logo"
                      className="h-28 w-36 md:h-32 md:w-40 object-contain"
                      loading="eager"
                      decoding="async"
                    />
                    <img
                      src={secondLogo}
                      alt="Indian Golf Open logo"
                      className="h-20 w-28 md:h-24 md:w-32 object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="min-w-0 flex-1 pt-1 lg:pt-0 lg:pl-2 lg:self-center">
                    <div className="max-w-[34rem] space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary-blue leading-tight">
                      {event.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-700">
                      <span className="font-semibold text-gray-800">Venue:</span> {event.venue}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-base md:text-lg text-gray-700">
                      <span className="font-semibold text-gray-800">Practice Rd:</span>
                      <span>{event.practiceRound}</span>
                    </div>

                    <div className="mt-2 flex w-full">
                      <button
                        type="button"
                        onClick={() => setSelectedImage({ src: groupPhoto, alt: 'Indian Golf Open group preview' })}
                        className="group mx-auto lg:-translate-x-20 inline-flex w-fit overflow-hidden border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <img
                          src={groupPhoto}
                          alt="Indian Golf Open group preview"
                          className="h-24 w-36 md:h-28 md:w-44 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 lg:items-center lg:justify-center lg:text-center lg:self-center">
                  <div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center overflow-hidden rounded-full bg-[#e9eef4] shadow-sm lg:self-center">
                    <img
                      src={vishwaPhoto}
                      alt="Vishwa Vardhan"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-primary-blue leading-snug lg:self-center">
                    <div>{event.winner}</div>
                  </div>
                </div>

                <div className="text-base md:text-lg text-gray-800 lg:text-center lg:self-center lg:justify-self-center">
                  {event.status}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={ROUTES.competition}
              className="inline-flex items-center rounded-xl border border-primary-blue bg-white px-6 py-3 text-primary-blue text-base md:text-lg font-quicksand font-semibold hover:bg-primary-blue hover:text-white transition-colors"
            >
              Back to Competition
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white text-xl leading-none"
                aria-label="Close preview"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[92vh] w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AgaCalendar;