const workContent = [
  {
    title: "Totes! The GOAT! Peer-to-peer Renting Platform",
    logo: "/images/totes-favicon.png",
    screenshot: "/images/totes-screenshot.jpg",
    github: "https://github.com/Professor-MAD/totes-pitch-mvp",
    link: "https://github.com/Professor-MAD/totes-pitch-mvp",
    icons: [
      "/images/react.png",
      "/images/tailwind.png",
      "/images/js.png",
      "/images/firebase.png",
      "/images/stripe.png",
    ],
    description:
      "Totes is a peer-to-peer rental platform that makes it easy to rent everyday items from people near you. Whether you need tools, gear, electronics, or party supplies, Totes helps you find what you need without the cost of buying new. Users can list items, set availability, and manage bookings all in one place. It’s convenient, eco-friendly, and community-driven—perfect for saving money, reducing waste, and making the most out of the stuff we already own.",
    fontFamily: "Nueva",
    fontSize: ".9rem",
    desktopFontSize: "3rem",
    useVideo: false,
  },
  {
    title: "VIBE.it Club Event Ticket Platform",
    logo: "/images/vibe-logo.png",
    screenshot: "/images/vibe-screenshot.jpg",
    github: "https://github.com/V1BEit/prod_mono_frontend",
    link: "https://github.com/V1BEit/prod_mono_frontend",
    icons: [
      "/images/react.png",
      "/images/tailwind.png",
      "/images/js.png",
      "/images/fast-api.png",
      "/images/aws.png",
    ],
    description:
      "VIBE is a dynamic event platform designed to empower nightlife venues and event organizers. With a sleek, intuitive interface, VIBE makes it easy to create, manage, and promote events—from underground parties to world-class club nights. Users can explore trending events, discover top venues, and purchase tickets seamlessly. For businesses, VIBE offers robust tools for analytics, CRM, and custom branding. Whether you're hosting or attending, VIBE transforms the way people connect through nightlife and entertainment.",
    fontFamily: "Perpetua",
    fontSize: ".9rem",
    desktopFontSize: "3rem",
    useVideo: false,
  },
  {
    title: "ManaMind: The MTG Stockfish",
    logo: "/images/mana-mind.png",
    screenshot: "/images/manamind-vid.webm",
    github: "https://github.com/Professor-MAD/ManaMind-MTG-Stockfish",
    link: "https://github.com/Professor-MAD/ManaMind-MTG-Stockfish",
    icons: ["/images/c.png", "/images/clang.png"],
    description:
      "This is a custom-built MTG engine with functional approach to card creation, featuring a gameloop that is operated in the terminal. The card_creation engine and the game_loop engine work together to create a one-of-a-kind card playing experience, focused on game functions and data. A work in progress, the goal will be to someday emulate games at high speeds using all of Magic’s cards, making it the “Stockfish” of Magic the Gathering. It is an open-source project.",
    fontFamily: "Planewalker",
    fontSize: ".9rem",
    desktopFontSize: "3rem",
    useVideo: true,
  },

  {
    title: "Pantry Quest: Inventory and Shopping App",
    logo: "/images/pantry-quest-logo.png",
    screenshot: "/images/pq-sh.png",
    github: "https://github.com/Professor-MAD/pantry-quest-frontD",
    link: "https://github.com/Professor-MAD/pantry-quest-front",
    icons: [
      "/images/react.png",
      "/images/expo.png",
      "/images/next.png",
      "/images/firebase.png",
    ],
    description:
      "Don’t you wish your shopping list would make itself? Pantry Quest makes your shopping lists for you by keeping track of what you have and generating a weekly grocery list from your inventory and recipes list. Add items to your inventory and fridge using the cutest UI you’ve ever seen. Type in the name, or add it by barcode, or use the AI feature to scan your entire pantry. Add recipes and schedule your shopping list generation. Users can share a household with another user and thereafter share their pantry and recipes. Great for working families and couples!",
    fontFamily: "Bellfoods",
    fontSize: ".7rem",
    desktopFontSize: "3rem",
    useVideo: false,
  },

  {
    title: "Satanic Agenda: Full-Service Home Page",
    logo: "/images/satan-todo-favicon.png",
    screenshot: "/images/satan-vid.webm",
    github: "https://github.com/Professor-MAD",
    link: "https://satanicagenda.com/",
    icons: [
      "/images/react.png",
      "/images/css.png",
      "/images/js.png",
      "/images/firebase.png",
    ],
    description:
      "Satanic Agenda is a calendar app with a robust “todo” system, featuring an “upcoming” and “graveyard” mechanic. There are “scrolls” for larger texts and even a “Satan button,” which can be used to call Satan so he can yell at you to...err...motivate you. The app also comes with Hell Weather, Hell News, Hell Sports, and Hell Stocks, so you can be up to date on what’s happening in Hell. Users can use for free and their session will be saved, but to save forever, they must make an account.",
    fontFamily: "Street Devil",
    fontSize: ".3rem",
    desktopFontSize: "2rem",
    useVideo: true,
  },

  {
    title: "PROFESSOR MAD: ONLINE COMIC BOOK STORE",
    logo: "/images/favicon-professor-mad.png",
    screenshot: "/images/mad-demo.webm",
    github: "https://github.com/Professor-MAD",
    link: "https://professormad.com/",
    icons: [
      "/images/html.png",
      "/images/css.png",
      "/images/js.png",
      "/images/firebase.png",
      "/images/stripe.png",
    ],
    description:
      "Professormad.com is the homepage for the comedic adult-comic book “The Beautiful Shamaryayamayamays of Shnerfadalailisexinr.” The website comes with an e-commerce interface, browser game page, and the fastest-growing public fart-noise MP3 library—all user-generated. An artistic project of the infamous PROFESSOR MAD, the IP is accompanied by a video series and merch line. Buy your copy today and immediately regret your decision! Or maybe just stop by to play DINO NUKE COCKROACH.",
    fontFamily: "Yikes",
    fontSize: ".6rem",
    desktopFontSize: "3rem",
    useVideo: true,
  },

  // {
  //   title: "D-Comply: Compliance Training Dashboard",
  //   logo: "/images/DComply-logo.png",
  //   screenshot: "/images/dcomply-shot.png",
  //   github: "https://github.com/Professor-MAD",
  //   link: "https://github.com/Professor-MAD",
  //   icons: [
  //     "/images/react.png",
  //     "/images/css.png",
  //     "/images/js.png",
  //     "/images/node.png",
  //     "/images/ex.png",
  //     "/images/mongo.png",
  //   ],
  //   description:
  //     "D-comply is a clone application of Binghamton University’s B-comply app. It is a compliance training platform in which users go through training sequences featuring point and click tests, videos, and surveys. Their progress is saved in a database and is updated for their needs. It can be controlled through an administrator’s dashboard. It is a WIP, and is primarily used as a mechanism to experiment with back-end solutions. The website is not hosted but its code can be viewed on Github.",
  //   fontFamily: "Poor Rich",
  //   fontSize: ".7rem",
  //   desktopFontSize: "3.2rem",
  //   useVideo: false,
  // },

  {
    title: "osr tolkien map: online map store",
    logo: "/images/osr-favicon.png",
    screenshot: "/images/osr.png",
    github: "https://github.com/Professor-MAD",
    link: "https://osr-tolkien-map.web.app/",
    icons: [
      "/images/html.png",
      "/images/css.png",
      "/images/js.png",
      "/images/firebase.png",
      "/images/stripe.png",
    ],
    description:
      "The OSR Tolkien Map is an art project from the infamous PROFESSOR MAD, showcasing a map of Onteora Scout Reservation, Theodore Roosevelt Council, Scouts BSA, in the spirit of Tolkien, writer of Lord of the Rings and Creator of Middle Earth. The website is a simple e-commerce platform, that has attracted considerable attention from members of our council, both Scouts and Alumni alike. The transaction backend uses Stripe to process payments. The desktop version of the site features a hover zoom feature, made famous by Amazon listings.",
    fontFamily: "Ringbearer",
    fontSize: ".7rem",
    desktopFontSize: "3.2rem",
    useVideo: false,
  },

  {
    title: "DREAMCAST CENTRIFUGE: RANDOMIZER",
    logo: "/images/dreamcast-centrifuge.png",
    screenshot: "/images/dreamcast-shot.png",
    github: "https://github.com/Professor-MAD",
    link: "https://dreamcastcentrifuge.web.app/",
    icons: [
      "/images/html.png",
      "/images/css.png",
      "/images/js.png",
      "/images/firebase.png",
    ],
    description:
      "Have you ever settled down for some Sega Dreamcast when all of a sudden you are stricken with indecision as to which game you should play? Too many decisions! With Dreamcast Centrifuge, you can select your custom list of games and then RANDOMIZE! The app will make the tough decisions for you. Don’t feel like playing Sonic Adventure 2? No problem! Try some Sega Marine Fishing? What’s that? Don’t like fish? How about some Chu Chu Rocket. The world is yours.",
    fontFamily: "Cyberpunk",
    fontSize: ".3rem",
    desktopFontSize: "2.2rem",
    useVideo: false,
  },
];

export default workContent;
