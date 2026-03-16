export const NAVIGATION = {
  main: [
    { label: 'About', path: '#about', hasDropdown: true },
    { label: 'What is Adaptive Golf?', path: '/what-is-adaptive-golf' },
    { label: 'Try Golf', path: '/try-golf' },
    { label: 'Competition', path: '/competition' },
    { label: 'Media', path: '/media' },
  ],
  about: [
    { label: 'About Us', path: '/about-us' },
    { label: 'AGAF Team', path: '/team' },
    { label: 'Policies', path: '/policies' },
  ],
  right: [
    { label: 'Blog', path: '/blog' },
    { label: 'Get Involved', path: '/get-involved', isCta: true },
    { label: 'News', path: '/news' },
  ],
  footer: {
    contact: {
      text: 'Get in touch',
      email: 'contactus@adaptivegolfalliance.com',
      ctaLabel: 'Contact Us',
      ctaPath: '/connect',
    },
    newsletter: {
      text: 'Join our newsletter',
      signupLabel: 'Sign up',
    },
  },
};

export const ROUTES = {
  home: '/',
  whatIsAdaptiveGolf: '/what-is-adaptive-golf',
  tryGolf: '/try-golf',
  competition: '/competition',
  media: '/media',
  blog: '/blog',
  blogEmpowerment: '/blog/more-than-a-game',
  blogVolunteers: '/blog/power-of-volunteers',
  blogAdaptiveCoaching: '/blog/adaptive-coaching',
  getInvolved: '/get-involved',
  news: '/news',
  connect: '/connect',
  aboutUs: '/about-us',
  team: '/team',
  policies: '/policies',
};
