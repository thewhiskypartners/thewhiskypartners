// Site-wide configuration and content
export const siteConfig = {
  name: "The Whisky Partners",
  tagline: "Learning and enjoying whisky through the promotion of bars, as well as the organisation of meetings and events. Sharing experiences with enthusiasts, and always insisting on responsible drinking.",
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
    subtitle: "Learning and enjoying whisky through the promotion of bars, as well as the organisation of meetings and events. Sharing experiences with enthusiasts, and always insisting on responsible drinking.",
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
  intro: {
    content: "Our purpose is to learn and enjoy whisky through the promotion of bars, as well as the organisation of meetings and events. Sharing experiences with enthusiasts, and always insisting on responsible drinking.",
    certified: "Certified by The Whisky Ambassador Programme.",
  },
  philosophy: [
    "Whisky is not just a drink. I want to think of it as a way of life. It is part of our history and our culture. The water of life. At some times banned, or drowned by taxes. But always strong, reborn, persistent.",
    "There is a huge world around this elegant drink, a lot of people working hard to do the best. It means responsibility, independence, character.",
    "Not just drink it, rather enjoy, discover, taste, re-taste. Take it slowly, patiently. Whenever you want and as you like, but try to drink less. Personally, I often prefer to drink it before a meal, as an aperitif.",
  ],
  goal: {
    title: "What is the goal of The Whisky Partners?",
    content: "To find and share whisky bars/venues around the world. Whisky for me is inspiration, attitude, family, good relationships and culture. A way of life. I am a whisky ambassador and a whisky customer, so I want to do something good for it. I don't ask for any reward as long as it doesn't cost me a lot of time and financial effort.",
    venueDescription: "A whisky venue is any bar, restaurant, tavern, pub, honky tonk, lounge... where you can enjoy a great drink and relax, alone or with others. And even discover the wonder of each place.",
  },
  whiskyBarCriteria: {
    title: "What a whisky bar/lounge should have:",
    items: [
      "A certain number of varieties, provenances, types, regions, etc. of whisky.",
      "Offer water.",
      "Serve in suitable glassware.",
      "Offer advice or recommendations.",
      "Preparation of mixers and cocktails.",
      "Intention to have more varieties, bottles, knowledge and certainly, love whisky.",
      "Be kind to customers.",
    ],
  },
}

// Whisky bars content
export const whiskyBarsContent = {
  title: "Whisky Bars",
  metaDescription: "Discover our curated selection of the finest whisky bars around the world, each offering exceptional selections and atmospheres.",
  intro: "Our curated selection of exceptional whisky bars around the world, each chosen for their dedication to quality, atmosphere, and service.",
  bars: [
    { name: "Arcadia Melbourne", location: "Melbourne", mapUrl: "https://maps.app.goo.gl/HsyVwe1Ynh5756cb8" },
    { name: "Whisky bar & Museum Tel Aviv", location: "Tel Aviv", mapUrl: "https://maps.app.goo.gl/PhGxoevKy8Ehfxyq9" },
    { name: "The Caledonian Toronto", location: "Toronto", mapUrl: "https://maps.app.goo.gl/bbrVbQj2cfA78vtbA" },
    { name: "1862 Madrid", location: "Madrid", mapUrl: "https://maps.app.goo.gl/yQ6JHyWEsHTNihwB6" },
    { name: "Melody London", location: "London", mapUrl: "https://maps.app.goo.gl/yyHnTTrduTg5PnEv5" },
    { name: "Ye olde Basser Pontevedra", location: "Pontevedra", mapUrl: "https://maps.app.goo.gl/sMQH5aYQU48ai8sx7" },
    { name: "Residence Bilbao", location: "Bilbao", mapUrl: "https://maps.app.goo.gl/zrfoiFWmbTvgUdeGA" },
    { name: "1916 Irish pub Cerdanyola", location: "Cerdanyola", mapUrl: "https://maps.app.goo.gl/YeyAuUNfxNJCBpqs9" },
    { name: "Eddie's Klub Oporto", location: "Oporto", mapUrl: "https://maps.app.goo.gl/Ee5t4YfYXkFedNfW9" },
    { name: "La Whiskería Barcelona", location: "Barcelona", mapUrl: "https://maps.app.goo.gl/UNUTCgYKGs2Ji1eb6" },
    { name: "Whisky en Buenos Aires", location: "Buenos Aires", mapUrl: "https://maps.app.goo.gl/6vgcwFJUjKdCUsaF7" },
    { name: "JD Williams Amsterdam", location: "Amsterdam", mapUrl: "https://maps.app.goo.gl/3io7FvGZNkMiiXwR7" },
    { name: "Pal pueblo Puerto Rico", location: "Puerto Rico", mapUrl: "https://maps.app.goo.gl/orLdoj1odvJzGu826" },
    { name: "Kendrew Montevideo", location: "Montevideo", mapUrl: "https://maps.app.goo.gl/b2oFT7aPATfAu6uf8" },
    { name: "Absent Madrid", location: "Madrid", mapUrl: "https://maps.app.goo.gl/XaykbhUsviYo9fBT6" },
  ],
}

// Friends content
export const friendsContent = {
  title: "Friends",
  metaDescription: "Meet the partners and friends who make The Whisky Partners community possible.",
  intro: "The enthusiasts, clubs, and partners who share our passion for whisky culture.",
  friends: [
    { name: "Spanish Whisky Fan", externalUrl: "https://instagram.com/spanishwhiskyfan/" },
    { name: "Whisky en español", externalUrl: "https://instagram.com/whiskyenespanol/" },
    { name: "La sociedad whisky club", externalUrl: "https://lasociedad.club/" },
    { name: "Amateur del Whisky", externalUrl: "https://instagram.com/amateurdelwhisky/" },
    { name: "Tobias von Neubronner", externalUrl: "https://instagram.com/tallyortoby/" },
    { name: "Barrica de Whisky", externalUrl: "https://instagram.com/barricadewhisky/" },
    { name: "Don Miguel", externalUrl: "https://instagram.com/donmiguel321/" },
    { name: "The Whisky Enthusiast", externalUrl: "https://youtube.com/channel/UCAISx7ycB3BkPOsgYwqOyUQ" },
    { name: "Whiskyrockk", externalUrl: "https://instagram.com/whiskyrockk/" },
    { name: "Julio Oñate", externalUrl: "https://instagram.com/whiskylover.co/" },
    { name: "Whisky Club Madrid", externalUrl: "https://whiskyclubmadrid.com/" },
    { name: "Varo Pereyra", externalUrl: "https://instagram.com/varopereyra/" },
    { name: "Single Malt Whisky. En español", externalUrl: "https://m.youtube.com/channel/UCeQcNLlVxbIMr6UN80Vj3KQ" },
    { name: "Tito Whisky", externalUrl: "https://instagram.com/titowhisky/" },
    { name: "Whisky Bubu", externalUrl: "https://youtube.com/channel/UCpp7AVTML3x6guP09A5eyMw" },
    { name: "Don't worry drink whisky", externalUrl: "https://instagram.com/dontworrydrinkwhisky/" },
    { name: "Larnaudie", externalUrl: "https://instagram.com/larnaudie/" },
    { name: "La ruta del whisky", externalUrl: "https://instagram.com/rutadelwhisky/" },
    { name: "314 Whisky Club Argentina", externalUrl: "https://instagram.com/314whiskyclubargentina/" },
    { name: "Whisky Chascomús", externalUrl: "https://instagram.com/whiskychascomus/" },
    { name: "Todo Whisky", externalUrl: "https://todowhisky.es/" },
    { name: "Santiago Moonshine", externalUrl: "https://instagram.com/santiago_moonshine/" },
    { name: "Matías Jurisich", externalUrl: "https://instagram.com/matiasjurisich/" },
    { name: "Whisky Ermitaño", externalUrl: "https://instagram.com/whiskyermitano/" },
    { name: "Señor del Whisky", externalUrl: "https://instagram.com/seniordelwhisky/" },
    { name: "Angel WBM", externalUrl: "https://instagram.com/wbmangel/" },
  ],
}

// FEST page content
export const festContent = {
  title: "The Whisky Partners FEST",
  subtitle: "Madrid 6, 7 and 8 February 2025",
  date: "6-8 February 2025",
  location: "Madrid, Spain",
  metaDescription: "The Whisky Partners FEST in Madrid on 6, 7 and 8 February 2025, featuring pairings, talks, brunch, collaborators, and sponsors from the whisky community.",
  intro:
    "The Whisky Partners Fest pretende ser un evento ludico en el centro de Madrid, promoviendo un encuentro entre entusiastas del whisky y marcas o destilerias, en un espacio agradable con ambiente festivo, donde se promuevan productos y novedades, a la vez que nos vamos conociendo un poco mas entre todos.",
  highlights: [
    "Tres dias de actividades en Madrid con encuentros, maridajes y brunch de recuperacion",
    "Evento principal el 7 de febrero con coctel de bienvenida, poesia, menu maridaje y ponencias",
    "Colaboracion entre clubs, bares, tiendas especializadas y destilerias",
    "Una propuesta festiva para seguir dando visibilidad a Madrid como ciudad whiskera",
  ],
  schedule: [
    {
      time: "19:30",
      title: "Discurso de apertura",
      description: "Coctel de bienvenida cortesia de Sackman.",
    },
    {
      time: "20:15",
      title: "Recital de poesia y whisky",
      description: "Intervencion de Jose Antonio Galante.",
    },
    {
      time: "20:30",
      title: "Degustaciones y ponencias breves",
      description: "Espacio abierto para compartir whiskies e ideas.",
    },
    {
      time: "21:00",
      title: "Menu maridaje",
      description: "Platos variados con whiskies proporcionados por La Potxola Whisky Shop.",
    },
    {
      time: "22:00",
      title: "Ponencias y copas",
      description: "Espacio para ponencias y copas de Destileria Liber.",
    },
    {
      time: "23:00",
      title: "Maridaje con puros en rooftop",
      description: "Cierre nocturno con puros, rooftop y cocteleria.",
    },
    {
      time: "00:30",
      title: "Clausura",
      description: "Despedida del evento principal.",
    },
  ],
  dayPlans: [
    {
      day: "Day 1",
      dateLabel: "06-02",
      title: "Maridaje con puros en Dalmore Boutique Madrid",
      description:
        "Actividad de apertura con aforo limitado en The Dalmore Boutique Madrid.",
      venueLabel: "The Dalmore Boutique Madrid",
      venueUrl: "https://www.caleido.es/shopping/the-dalmore",
      images: [
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/videocapture_20250308-145117.jpg?w=745",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250206_201100.jpg?w=750",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250206_211825.jpg?w=574",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250206_211901.jpg?w=750",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_112244.jpg?w=750",
      ],
    },
    {
      day: "Day 2",
      dateLabel: "07-02",
      title: "Cena maridaje y puros en rooftop en Hotel Indigo",
      description:
        "La jornada central del festival, con cena maridaje, rooftop y la mayor parte del programa.",
      venueLabel: "Hotel Indigo",
      venueUrl: "https://maps.app.goo.gl/tN5Hh5mXyQdxEcpj9",
      images: [
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_203817.jpg?w=750",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_220416.jpg?w=574",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_001500.jpg?w=750",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_003159.jpg?w=750",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_234342.jpg?w=750",
      ],
    },
    {
      day: "Day 3",
      dateLabel: "08-02",
      title: "Recovery brunch",
      description:
        "Cierre relajado del festival con brunch de recuperacion y tiempo para seguir compartiendo.",
      images: [
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_133743.jpg?w=574",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_130403.jpg?w=574",
        "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_154331.jpg?w=574",
      ],
    },
  ],
  principalEvent: {
    title: "Evento principal (dia 07-02)",
    intro: "Programa de actividades",
    images: [
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_233916.jpg?w=750",
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_234342.jpg?w=750",
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_220416.jpg?w=574",
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250207_233938.jpg?w=750",
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_002320.jpg?w=1024",
      "https://thewhiskypartners.com/wp-content/uploads/2025/03/20250208_003159.jpg?w=1024",
    ],
  },
  narrative: [
    "The Whisky Partners Fest pretende ser un evento ludico en el centro de Madrid, promoviendo un encuentro entre entusiastas del whisky y marcas o destilerias, en un espacio agradable con ambiente festivo, donde se promuevan productos y novedades, a la vez que nos vamos conociendo un poco mas entre todos, y ayudamos a dar a conocer Espana al mundo del whisky como un mercado en crecimiento.",
    "El evento consta de tres dias, entre los que el dia 7 de febrero se realiza el evento principal con presencia de varias marcas. El 6 y el 8 de febrero se plantean actividades opcionales y con aforo limitado.",
    "La propuesta hace hincapie en disfrutar del whisky con conocimiento y responsabilidad, y en presentar a Madrid como ciudad whiskera en sus diversas propuestas.",
  ],
  collaborators: [
    { name: "Whiskeando" },
    { name: "Arasolis" },
    { name: "Eddie's Klub" },
    { name: "Absent Cocktail Room & Garden" },
    { name: "Whisky Club Granada" },
    { name: "Whisky Club Barcelona" },
  ],
  sponsors: [
    { name: "Destileria Liber" },
    { name: "La Potxola Whisky Shop" },
    { name: "The Dalmore Boutique Madrid" },
    { name: "Destileria Sackman" },
  ],
  collaboratorLinks: [
    { name: "Whiskeando", url: "https://www.instagram.com/whiskeando/" },
    { name: "Arasolis", url: "https://www.instagram.com/arasoliswhiskyclub/" },
    { name: "Eddie's Klub", url: "https://www.instagram.com/eddie.s.klub/" },
    { name: "Absent Cocktail Room & Garden", url: "https://www.instagram.com/absent_cocktail_garden/" },
    { name: "Whisky Club Granada", url: "https://www.instagram.com/whisky_club_granada/" },
    { name: "Whisky Club Barcelona", url: "https://www.instagram.com/whisky_club_barcelona/" },
  ],
  sponsorLinks: [
    { name: "Destileria Liber", url: "https://tiendaliber.com/" },
    { name: "La Potxola Whisky Shop", url: "https://www.lapotxola.es/" },
    { name: "The Dalmore Boutique Madrid", url: "https://www.caleido.es/shopping/the-dalmore" },
    { name: "Destileria Sackman", url: "https://sackman.es/" },
  ],
}

// SEO metadata templates
export const seoDefaults = {
  siteName: "The Whisky Partners",
  locale: "en_US",
  type: "website",
  twitterCard: "summary_large_image",
}
