// Site-wide configuration and content
export const siteConfig = {
  name: "The Whisky Partners",
  tagline: "Learning and enjoying whisky through promoting bars, meetings and events, insisting on responsible consumption.",
  url: "https://thewhiskypartners.com",
  instagram: "https://www.instagram.com/thewhiskypartners/",
  email: "info@thewhiskypartners.com",
  responsibleDrinking: "Please drink responsibly. You must be of legal drinking age.",
}

export const navigation = [
  { name: "The Whisky Partners FEST", href: "/the-whisky-partners-fest/" },
  { name: "About", href: "/about/" },
  { name: "Whisky Bars", href: "/whiskybars/" },
  { name: "Friends", href: "/friends/" },
]

// Home page content
export const homeContent = {
  hero: {
    title: "The Whisky Partners",
    subtitle: "Learning and enjoying whisky through promoting bars, meetings and events, insisting on responsible consumption.",
  },
  festPreview: {
    title: "The Whisky Partners FEST",
    summary: "Join us for our annual celebration of whisky culture. A gathering of enthusiasts, distillers, and bars united by their passion for exceptional spirits.",
    cta: "Discover the FEST",
  },
  aboutPreview: {
    title: "Who We Are",
    text: "We are a community dedicated to the appreciation and culture of whisky, bringing together bars, enthusiasts, and industry professionals.",
  },
}

// About page content
export const aboutContent = {
  title: "About",
  metaDescription: "Learn about The Whisky Partners - a community dedicated to whisky culture, bars, and responsible enjoyment.",
  sections: [
    {
      heading: "Our Story",
      content: "The Whisky Partners was born from a shared passion for whisky culture and the desire to create meaningful connections within the industry. We believe that whisky is more than a drink—it's a bridge between tradition and innovation, between cultures and communities.",
    },
    {
      heading: "Our Mission",
      content: "We are dedicated to promoting the appreciation of quality whisky through education, events, and community building. We work closely with bars, distilleries, and enthusiasts to create experiences that celebrate the art of whisky making and enjoyment.",
    },
    {
      heading: "What We Do",
      list: [
        "Curate and promote exceptional whisky bars",
        "Organize tastings, masterclasses, and events",
        "Connect whisky enthusiasts with industry professionals",
        "Advocate for responsible consumption",
        "Host The Whisky Partners FEST annually",
      ],
    },
    {
      heading: "Our Values",
      content: "Quality over quantity. Community over competition. Education over elitism. We believe whisky should be accessible and enjoyable for all, while maintaining the highest standards of craftsmanship and responsibility.",
    },
  ],
}

// Whisky bars content
export const whiskyBarsContent = {
  title: "Whisky Bars",
  metaDescription: "Discover our curated selection of the finest whisky bars, each offering exceptional selections and atmospheres.",
  intro: "Our curated selection of exceptional whisky bars, each chosen for their dedication to quality, atmosphere, and service.",
  bars: [
    {
      name: "The Malt Room",
      location: "Barcelona, Spain",
      externalUrl: "https://example.com/malt-room",
      image: "/images/bars/bar-placeholder.jpg",
    },
    {
      name: "Amber & Oak",
      location: "Madrid, Spain",
      externalUrl: "https://example.com/amber-oak",
      image: "/images/bars/bar-placeholder.jpg",
    },
    {
      name: "The Cask House",
      location: "Valencia, Spain",
      externalUrl: "https://example.com/cask-house",
      image: "/images/bars/bar-placeholder.jpg",
    },
    {
      name: "Highland Spirit",
      location: "Bilbao, Spain",
      externalUrl: "https://example.com/highland-spirit",
      image: "/images/bars/bar-placeholder.jpg",
    },
    {
      name: "Single Malt Society",
      location: "Seville, Spain",
      externalUrl: "https://example.com/single-malt",
      image: "/images/bars/bar-placeholder.jpg",
    },
    {
      name: "The Dram Shop",
      location: "Malaga, Spain",
      externalUrl: "https://example.com/dram-shop",
      image: "/images/bars/bar-placeholder.jpg",
    },
  ],
}

// Friends content
export const friendsContent = {
  title: "Friends",
  metaDescription: "Meet the partners and friends who make The Whisky Partners community possible.",
  intro: "The brands, distilleries, and partners who share our passion for whisky culture.",
  friends: [
    {
      name: "Highland Distillery",
      description: "Craft distillery producing exceptional single malts since 1892.",
      externalUrl: "https://example.com/highland",
      image: "/images/friends/friend-placeholder.jpg",
    },
    {
      name: "Oak & Grain Imports",
      description: "Premium whisky importers bringing the world's finest spirits to Spain.",
      externalUrl: "https://example.com/oak-grain",
      image: "/images/friends/friend-placeholder.jpg",
    },
    {
      name: "The Whisky Guild",
      description: "Professional association for whisky educators and ambassadors.",
      externalUrl: "https://example.com/guild",
      image: "/images/friends/friend-placeholder.jpg",
    },
    {
      name: "Barrel Masters",
      description: "Artisan cooperage specializing in whisky casks.",
      externalUrl: "https://example.com/barrel",
      image: "/images/friends/friend-placeholder.jpg",
    },
  ],
}

// FEST page content
export const festContent = {
  title: "The Whisky Partners FEST",
  subtitle: "Annual Whisky Celebration",
  date: "November 2025",
  location: "Barcelona, Spain",
  metaDescription: "Join The Whisky Partners FEST - an annual celebration of whisky culture featuring tastings, masterclasses, and the finest distilleries.",
  intro: "Our flagship event bringing together whisky lovers, distillers, and industry professionals for an unforgettable celebration of whisky culture.",
  highlights: [
    "Exclusive tastings from world-renowned distilleries",
    "Masterclasses led by industry experts",
    "Networking with fellow enthusiasts",
    "Discovery of rare and limited editions",
  ],
  schedule: [
    {
      time: "12:00",
      title: "Doors Open",
      description: "Welcome reception and registration",
    },
    {
      time: "13:00",
      title: "Opening Ceremony",
      description: "Welcome address and introduction to the day's program",
    },
    {
      time: "14:00",
      title: "Masterclass: The Art of Blending",
      description: "Learn the secrets of whisky blending from master blenders",
    },
    {
      time: "15:30",
      title: "Tasting Session I",
      description: "Explore single malts from Scotland's finest regions",
    },
    {
      time: "17:00",
      title: "Masterclass: Cask Influence",
      description: "Understanding how wood shapes whisky character",
    },
    {
      time: "18:30",
      title: "Tasting Session II",
      description: "World whiskies: Japan, Ireland, and beyond",
    },
    {
      time: "20:00",
      title: "Networking Reception",
      description: "Connect with fellow enthusiasts and industry professionals",
    },
    {
      time: "22:00",
      title: "Closing",
      description: "Thank you and see you next year",
    },
  ],
  collaborators: [
    { name: "Highland Distillery", image: "/images/collaborators/collab-placeholder.jpg" },
    { name: "Oak & Grain Imports", image: "/images/collaborators/collab-placeholder.jpg" },
    { name: "The Whisky Guild", image: "/images/collaborators/collab-placeholder.jpg" },
  ],
  sponsors: [
    { name: "Premium Spirits Co.", tier: "Gold", image: "/images/sponsors/sponsor-placeholder.jpg" },
    { name: "Barrel Masters", tier: "Silver", image: "/images/sponsors/sponsor-placeholder.jpg" },
    { name: "The Cask Collection", tier: "Silver", image: "/images/sponsors/sponsor-placeholder.jpg" },
  ],
}

// SEO metadata templates
export const seoDefaults = {
  siteName: "The Whisky Partners",
  locale: "en_US",
  type: "website",
  twitterCard: "summary_large_image",
}
