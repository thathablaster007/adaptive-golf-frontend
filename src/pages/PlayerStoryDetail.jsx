import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PLAYER_STORY_BY_SLUG } from '../data/playerStories';
import { ROUTES } from '../config/navigation';
import ankushHeroImage from '../ankush.jpeg';
import nandanHeroImage from '../Nandan (4).jpeg';
import medalGold from '../unnamed.png';
import medalBronze from '../Bronze_medal.png';
import logoAbuDhabi2019 from '../unnamed (5).png';
import logoCzech from '../Czech_logo.png';
import logoMacao from '../macao logo.jpg';
import logoSpecialOlympics from '../sob-1.png';
import vishwaFaceImage from '../vishwa.jpeg';
import vishwaMedalSilver from '../silver_medal.png';
import vishwaWagrLogo from '../wagr_logo.png';
import vishwaEnglandGolfLogo from '../unnamed (2).png';
import vishwaDaikinMadridOpenLogo from '../unnamed (1).png';
import vishwaCzechLogo from '../Czech_logo.png';

const PlayerStoryDetail = () => {
  const { slug } = useParams();
  const story = PLAYER_STORY_BY_SLUG[slug];

  if (!story) {
    return <Navigate to={ROUTES.playerStories} replace />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.32 } },
  };

  const isVishwaStory = story.slug === 'vishwa-vardhan-bhati';
  const storySidebarConfigs = {
    'ankush-saha': {
      medals: [
        { src: medalGold, alt: 'Gold medal' },
        { src: medalBronze, alt: 'Bronze medal' },
      ],
      faceImage: ankushHeroImage,
      faceImagePosition: 'center 12%',
      achievements: [
        { src: logoAbuDhabi2019, alt: 'Special Olympics World Games Abu Dhabi 2019' },
        { src: logoCzech, alt: 'Czech Disabled Golf Masters 2026' },
      ],
    },
    'nandan-s': {
      medals: [{ src: medalGold, alt: 'Gold medal' }],
      faceImage: nandanHeroImage,
      faceImagePosition: 'center 12%',
      achievements: [
        { src: logoSpecialOlympics, alt: 'Special Olympics Bharat National Trials' },
        { src: logoMacao, alt: 'Macao Golf Masters Open 2025' },
      ],
    },
  };
  const storySidebar = storySidebarConfigs[story.slug];
  const contentBlocks = story.contentBlocks ?? story.paragraphs?.map((text) => ({ type: 'paragraph', text })) ?? [];
  const contentImages = story.contentImages ?? story.inlineImages ?? [];

  const renderImage = (image, sizeClass = 'max-h-[590px]', figureClassName = 'inline-block max-w-full', cover = false) => (
    <figure className={`${figureClassName} overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-[0_18px_50px_rgba(24,39,75,0.1)]`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`block w-full max-w-full ${cover ? 'h-full object-cover' : 'h-auto object-contain object-top'} ${sizeClass}`}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="player-story-page font-quicksand bg-[#faf8f2] text-gray-800">
      <motion.section variants={itemVariants} className="border-b border-primary-green/15 bg-white">
        <div className="container-custom mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <Link to={ROUTES.playerStories} className="inline-flex items-center gap-2 font-quicksand text-sm font-semibold uppercase tracking-[0.28em] text-primary-green transition-colors hover:text-primary-blue">
            <span aria-hidden="true">←</span>
            Back to player stories
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {story.disabilityTags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-blue">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-5 font-quicksand text-4xl font-bold tracking-tight text-primary-blue md:text-5xl lg:text-6xl">
            {story.name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl leading-8 text-gray-700 md:text-2xl font-quicksand">
            {story.title}
          </p>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="section-padding">
        <div className="container-custom mx-auto max-w-4xl px-4 md:px-6">
          <div className="space-y-5 text-lg leading-8 text-gray-800 md:space-y-6 md:text-xl md:leading-8 font-quicksand">
            {contentBlocks.map((block, index) => {
              const image = contentImages.find((entry) => (entry.afterBlockIndex ?? entry.afterParagraphIndex) === index);

              return (
                <React.Fragment key={`${story.slug}-block-${index}`}>
                  {block.type === 'heading' ? (
                    <h2 className="mt-6 font-quicksand text-2xl font-bold leading-tight text-primary-blue md:mt-7 md:text-3xl">
                      {block.text}
                    </h2>
                  ) : (
                    <p className="font-quicksand leading-8 md:leading-9">{block.text}</p>
                  )}

                  {block.type === 'imageRow' && Array.isArray(block.images) && (
                    <div className="my-6 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2">
                      {block.images.map((imageItem) => (
                        <div key={imageItem.src} className="flex w-full justify-center">
                          {renderImage(imageItem, 'h-[420px] md:h-[460px]', 'w-full max-w-none', true)}
                        </div>
                      ))}
                    </div>
                  )}

                  {image && (
                    <div className="my-6 flex justify-center md:my-7">
                      {renderImage(image, image.size === 'xxlarge' ? 'max-h-[2025px]' : image.size === 'xlarge' ? 'max-h-[1350px]' : image.size === 'large' ? 'max-h-[900px]' : image.size === 'small' ? 'max-h-[450px]' : 'max-h-[590px]')}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {story.quote && (
            <blockquote className="mt-8 font-quicksand border-l-4 border-primary-green bg-white px-6 py-6 text-xl font-medium leading-8 text-primary-blue shadow-[0_16px_44px_rgba(24,39,75,0.08)] md:mt-10 md:text-2xl md:leading-9">
              {story.quote}
              <footer className="mt-4 font-quicksand text-base font-semibold uppercase tracking-[0.18em] text-primary-green">
                {story.quoteAttribution}
              </footer>
            </blockquote>
          )}

          {story.accolades?.length > 0 && (
            <div className="mt-6 md:mt-8">
              <div className="overflow-hidden border-l-4 border-primary-green bg-white text-primary-blue shadow-[0_16px_44px_rgba(24,39,75,0.08)]">
                <div className={isVishwaStory || storySidebar ? 'grid lg:grid-cols-[minmax(0,1fr)_320px]' : ''}>
                  <div className="px-6 py-6 md:py-7">
                    <p className="font-quicksand text-xl font-bold uppercase tracking-[0.12em] text-primary-green md:text-2xl">
                      Accolades
                    </p>

                    <div className="mt-5 space-y-6 font-quicksand text-base leading-7 text-gray-700 md:mt-6 md:space-y-7 md:text-lg">
                      {story.accolades.map((eventSection) => (
                        <div key={eventSection.eventTitle ?? eventSection.title} className="space-y-4">
                          <h3 className="font-quicksand text-2xl font-bold text-primary-blue md:text-[1.75rem]">
                            {eventSection.eventTitle ?? eventSection.title}
                          </h3>

                          <div className="space-y-6">
                            {(eventSection.sections ?? [eventSection]).map((prizeSection) => (
                              <div key={prizeSection.title}>
                                <h4 className="font-quicksand text-lg font-semibold text-primary-blue md:text-xl">
                                  {prizeSection.title}
                                </h4>
                                <ul className="mt-3 space-y-1.5">
                                  {prizeSection.items.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {isVishwaStory && (
                    <aside className="border-t border-primary-blue/15 bg-[#faf8f2] px-5 py-5 lg:border-t-0 lg:border-l lg:border-primary-blue/20 lg:py-6">
                      <div className="flex items-start justify-between gap-3">
                        <img
                          src={vishwaMedalSilver}
                          alt="Silver medal"
                          className="h-14 w-14 shrink-0 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <h3 className="text-center font-quicksand text-3xl font-bold leading-tight text-[#2f6fa0] md:text-[2.7rem]">
                          {story.name}
                        </h3>
                        <span className="h-14 w-14 shrink-0" aria-hidden="true" />
                      </div>

                      <div className="mt-5 flex justify-center">
                        <div className="w-full max-w-[206px] rounded-2xl border border-[#d7dce1] bg-white px-4 py-3 shadow-sm">
                          <div className="flex items-center gap-3">
                            <img
                              src={vishwaWagrLogo}
                              alt="World Amateur Golf Ranking"
                              className="h-12 w-12 object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="text-center text-[0.86rem] font-bold leading-[1.45] text-[#2f6fa0]">
                              Rank Gross: 466<br />
                              Rank Nett: 358<br />
                              Rank Stableford: 184
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex justify-center">
                        <div className="w-full max-w-[250px] overflow-hidden rounded-[1.2rem] shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                          <img
                            src={vishwaFaceImage}
                            alt={story.name}
                            className="h-[330px] w-full object-cover"
                            style={{ objectPosition: 'center 10%' }}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
                        <img
                          src={vishwaEnglandGolfLogo}
                          alt="England Golf"
                          className="h-20 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          src={vishwaDaikinMadridOpenLogo}
                          alt="Daikin Madrid Open"
                          className="h-20 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          src={vishwaCzechLogo}
                          alt="EDGA"
                          className="h-20 w-auto object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </aside>
                  )}

                  {!isVishwaStory && storySidebar && (
                    <aside className="border-t border-primary-blue/15 bg-[#faf8f2] px-5 py-5 lg:border-t-0 lg:border-l lg:border-primary-blue/20 lg:py-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col items-start gap-1">
                          {storySidebar.medals.map((medal) => (
                            <img
                              key={medal.alt}
                              src={medal.src}
                              alt={medal.alt}
                              className="h-14 w-14 shrink-0 object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                          ))}
                        </div>
                        <h3 className="text-center font-quicksand text-3xl font-bold leading-tight text-[#2f6fa0] md:text-[2.7rem]">
                          {story.name}
                        </h3>
                        <span className="h-14 w-14 shrink-0" aria-hidden="true" />
                      </div>

                      <div className="mt-6 flex justify-center">
                        <div className="w-full max-w-[250px] overflow-hidden rounded-[1.2rem] shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
                          <img
                            src={storySidebar.faceImage}
                            alt={story.name}
                            className="h-[330px] w-full object-cover"
                            style={{ objectPosition: storySidebar.faceImagePosition || 'center' }}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
                        {storySidebar.achievements.map((achievement) => (
                          <img
                            key={achievement.alt}
                            src={achievement.src}
                            alt={achievement.alt}
                            className="h-20 w-auto object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    </aside>
                  )}
                </div>
              </div>
            </div>
          )}
          {story.videoUrl && (
            <motion.div variants={itemVariants} className="mt-12 md:mt-14">
              <h2 className="mb-6 font-quicksand text-2xl font-bold text-primary-blue md:text-3xl">
                Watch {story.name}'s Story
              </h2>

              <div className="w-full overflow-hidden rounded-xl border-4 border-white bg-gray-900 shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    src={story.videoUrl}
                    title={`${story.name} - Adaptive Golf Story`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default PlayerStoryDetail;
