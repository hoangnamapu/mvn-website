export type Leader = {
    slug: string;
    name: string;
    title: string;
    bio: string;
    image: {
      url: string;
      alt: string;
    };
    education: string[];
    licenses: string[];
    awards: string[];
    activities: string[];
  };

  export const leaders: Leader[] = [
    {
      slug: 'minh-nghiem',
      name: 'Minh Nghiem',
      title: 'Chief Executive Officer',
      bio: 'Minh Nghiem brings over 10 years of extensive experience in civil land development, driving innovation and excellence across commercial, self storage, office, retail and residential projects nationwide. He has in-depth experience of development & construction administration, especially developing, designing and building self-storage facilities',
      image: {
        url: '/minh-nghiem.jpg',
        alt: 'Minh Nghiem - CEO',
      },
      education: [
        'ME in Construction Management, Vanderbilt University',
        'BS in Civil Engineering, Lipscomb University',
      ],
      licenses: [
        'Professional Engineer (PE) - Multiple States',
        'Licensed General Contractor (GC) - Multiples States',
      ],
      awards: [
      ],
      activities: [
        'Member, ICSC',
        'Member, American Society of Civil Engineers',
        'Member, ULI'
      ],
    },

  ];

