export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Capturing Automotive Elegance',
    desc: 'Art of showcasing automobiles in their finest light, blending sleek design with creative angles. From glossy exteriors to intricate interiors, every shot aims to highlight the vehicle’s craftsmanship and personality, evoking admiration and aspiration in the viewer.',
    subdesc:
      'By mastering lighting, composition, and motion, photographers bring cars to life. Whether capturing the raw power of a sports car or the luxury of a classic ride, car photography tells stories that resonate with enthusiasts and brands alike. Each frame becomes a tribute to engineering and style.',
    texture: '/textures/project/video1.mp4',
    logo: '/assets/video1.mp4',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
  },
  {
    title: 'The Art of Portraiture',
    desc: 'Portrait photography is the craft of capturing human essence, blending emotions and expressions into timeless images. Each shot seeks to reveal the subject’s unique story, character, and depth, turning fleeting moments into lasting memories.',
    subdesc:
      'Through mastery of lighting, angles, and backgrounds, portrait photographers create impactful visuals. From candid smiles to contemplative gazes, every portrait becomes a celebration of individuality and connection, making it a cherished art form for both personal and professional storytelling.',
    texture: '/textures/project/DSC06076.jpg',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
  },
  {
    title: 'Framing Built Beauty',
    desc: 'Architecture photography captures the artistry and precision of structures, showcasing their design, scale, and uniqueness. It transforms buildings into visual stories, highlighting the interplay of form, texture, and light to evoke admiration and wonder.',
    subdesc:
      'Through careful composition and perspective, photographers celebrate architectural innovation. Whether capturing modern skyscrapers or historic landmarks, every shot emphasizes the relationship between structure and space, turning architecture into timeless works of art.',
      texture: '/textures/project/Sword.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};
