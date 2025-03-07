const about = {
    title: "Curated font & color palette collection.",
    description: "",
    meInfo: "Find me > ",
    github: "https://github.com/rmmshv/FONTer",
    linkedin: "https://www.linkedin.com/in/rmmshv",
};

const colorsData = [
    ["#844d36", "#474853", "#86b3d1", "#aaa0a0", "#8e8268","Deep Vintage Lounge"],
    ["#f0efeb", "#b294a0", "#c2ccd6", "#7c8d7d", "#d9966e","Warm Spring", ],
    ["#B6CBBD", "#754E1A", "#CBA35C", "#F8E1B7", "#560D0D","Icecream Lux",],
    ["#d79922", "#efe2ba", "#f13c20", "#4056a1", "#c5cbe3","Golden Dutch",],
    ["#244855", "#e64833", "#874f41", "#9daead", "#fbe9d0","Terracotta Blue",],
    ["#4285f4", "#5c2018", "#bc4639", "#d4a59a", "#f3e0dc","Blueberry Red", ],
    ["#e43d12", "#d6536d", "#ffa2b6", "#efb11d", "#ebe9e1","Calm Vibrant", ],
    ["#faed26", "#48344e", "#5a5560", "#9d8d8f", "#9b786f","Canary Accent",],
    ["#d9b061", "#d9c4a9", "#d8d0c5", "#8d6f57", "#3f0d0c", "Affogato",],
    ["#141414", "#273db4", "#c50900", "#f95ca4", "#ed7845","Gradient Pop",],
    ["#24222d", "#7b3947", "#9D90A6", "#a59a7e", "#9c7379","Warm Worm",],
    ["#360c20", "#cee24b", "#ad6ef1", "#db643a", "#f7f0fe","Low Saturation",],
    ["#875871", "#7a8c76", "#E4DECB", "#df6945", "#507276","Local Co-op",],
    ["#030432", "#f2a249", "#4f4f6e", "#0e285c", "#ffffff","Deep Blues",],
    ["#17064a", "#e55636", "#fffdf0", "#A7752E", "#7B8695","Mustang",],
    ["#e0b81f", "#bfabcc", "#00592e", "#a10b2b", "#ebe9e1","247",],
    ["#362304", "#522000", "#651300", "#d0b9a7", "#4F3D00","Vandyke Tobacco",],
    ["#636b2f", "#bac095", "#d4de95", "#2d4127", "#7c9898","Moss",],
    ["#f6aa1c", "#bc3908", "#941b0c", "#621708", "#220901","Blood Orange",],
];

const colorsCollection = {
    colors: colorsData.map(([color1, color2, color3, color4, color5, name, ], index) => ({
        id: index + 1, color1, color2, color3, color4, color5, name
    }))
};

const fontsAndColorsData = [
    ["EIGHT", "MANICULE", "SOFT HYPHEN", "Rollergirls", "Regular", 
     "Rare, tail, lend, episode, century, when, muffin, vehicle, shuffle, drum, doll, crisp",
    "https://www.dafont.com/rollergirls.font"],

    ["DOLLARS", "EUROS", "POUNDS", "Porscha", "Regular", 
     "Pottery, spell, praise, chronic-glance, settle, wine, sun, awake, picture, warm, erase",
    "https://www.dafont.com/911porscha.font"],

    ["SQUID", "DRUIDS", "PROPER RARER ROAR", "GrandParadiso", "Regular", 
     "Clown, half, easy, good, paper, thrive, arena, modify, velvet, luxury, daring, certain",
    "https://www.dafont.com/grand-paradiso.font"],

    ["BALLER", "GRAVITY", "BERRY BRACKET", "FatKat", "Regular", 
     "Frequent, doctor, promote, shy, draft, dilemma, ripple, casino, pottery, prosper, auction, provide",
    "https://www.dafont.com/fat-kat.font"],

    ["PUNK", "PARENTHESIS", "TILDE", "JapanRich", "Bold", 
     "Recycle, crumble, solve, unable, flat, brass, chicken, husband, mosquito, pave, breeze, midnight",
    "https://www.dafont.com/japan-rich.font"],

    ["I AM", "GROOT", "I AM I AM I AM", "Narnia", "Italic", 
     "Glass, nerve, kite, exile, water, chronic, nation, media, cabbage, damp, govern, regular",
    "https://www.dafont.com/narnia.font"],

    ["NINE", "BECAUSE", "SPLENDID YES CHARM", "Neon", "Regular", 
     "Empty, fire, loyal, nation, unit, shadow, brown, night, vehicle, powder, hint, oppose",
    "https://www.dafont.com/neon-80s.font"],

    ["STEAK", "BULL", "APOSTROPHE", "HeavyHeap", "Bold", 
     "Lorizzle, ipsizzle, dolizzle, sit-amizzle, brizzle, elizzle",
    "https://www.dafont.com/heavy-heap.font"],

    ["QUEUE", "MARQUEE", "LONGING MUG BLISS", "Sunwish", "Regular", 
     "Silent, dune, whisper, eye, strategy, remember, globe, hole, innocent, cute, lounge, brave",
    "https://www.dafont.com/sunwish-maverick.font"],

    ["ACUTE", "INDEED", "ASTROPHYSICS", "Lemonmilk", "Regular", 
     "Food, draft, forest, also, onion, doctor, scene, silk, scrap, scorpion, depth, want",
    "https://www.dafont.com/lemon-milk.font"],

    ["WHO", "FIVE", "DOCTOR WOLF ROSE", "pincoyablack", "Bold", 
     "Defy, nose, slight, network, copy, decide, creek, grid, brass, burst, real, pair",
    "https://www.dafont.com/pincoyablack.font"],

    ["BEAR", "ENQUIRY", "JAGUAR JUNGLE", "Highrise", "Italic", 
     "Diesel, bag, chapter, screen, infant, soon, settle, victory, two, tomato, detail, faith",
    "https://www.dafont.com/highrise.font"],

    ["DASH", "CRATORS", "ROCK N ROLL", "Coiny", "Bold", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft",
    "https://www.dafont.com/coiny.font"],

    ["TAB", "INDEX", "OXFORD COMMA", "Astonpoliz", "Regular", 
     "Circle, adapt, lizard, genre, layer, curious, labor, radar, ginger, file, tray, arctic",
    "https://www.dafont.com/astonpoliz.font"],

    ["HASH", "PROGRAM", "BEEPING BUZZ", "Bayside", "Bold", 
     "Cave, squirrel, welcome, buddy, alter, shallow, joy, science, shoot, when, action, record",
    "https://www.dafont.com/bayside.font"],

    ["YEN", "LEOPARD", "README CACHE", "Bulagria", "Regular", 
     "Gentle, bargain, gesture, during, opinion, bachelor, avoid, forward, kid, river, rapid, panel",
    "https://www.dafont.com/bulagria.font"],

    ["ZONE", "POOF", "MICROCHIP", "Cinematografica", "Regular", 
     "Collect, witness, chat, pitch, venture, viable, bring, health, sand, vicious, honey, recall",
    "https://www.dafont.com/cinematografica.font"],

    ["DOLLA", "CONDUCTOR", "ROOT HOME CD", "DKlongreach", "Italic", 
     "Ghost, quote, kitten, urban, gadget, brick, have, exotic, creek, horn, normal, mammal",
    "https://www.dafont.com/dk-longreach.font"],

    ["THREE", "WOW", "KEY FACTOR SLASH", "Eastman", "Regular", 
     "Bullet, rail, flip, loyal, fire, symbol, jelly, wire, indoor, weasel, immune, drastic",
    "https://www.dafont.com/eastman.font"],

    ["POW", "FREE SOURCE", "AMPERSAND AND", "Evogria", "Bold", 
     "Door, antenna, pipe, add, unit, fabric, tattoo, toe, join, cook, eyebrow, cheap",
    "https://www.dafont.com/evogria.font"],

    ["YA!", "PLUS", "STEREO VAULT", "BankPrinter", "Regular", 
     "Hungry, between, electric, task, result, monster, medal, iron, mystery, year, gym, skill",
    "https://www.dafont.com/f25-bank-printer.font"],

    ["XEROX", "MERGING", "DROID BELL", "Glorify", "Regular", 
     "Voyage, private, coil, display, interest, animal, rigid, convince, empty, garage, youth, present",
    "https://www.dafont.com/glorify-sh.font"],

    ["HAY", "OCTOTHORPE", "DITTO WAH", "Carbon", "Bold", 
     "Hint, story, wasp, name, casual, someone, manage, sudden, bid, family, crystal, offer",
    "https://www.dafont.com/carbon.font"],

    ["SIX", "METALLIC", "BREW", "Lovan", "Regular", 
     "Banana, desert, category, mom, noodle, couple, beauty, jungle, master, index, certain",
    "https://www.dafont.com/lovan.font"],

    ["YARN", "CLOUDY", "GIT HERO", "Longhaul", "Bold", 
     "Lucky, radio, magic, slight, card, frog, motion, gate, sand, region, hip, actor",
    "https://www.dafont.com/longhaul.font"],

    ["WATER", "RETURN", "KNOW TAB CAPS", "pincoyablack", "Bold", 
     "Exhibit, action, upper, month, vast, where, hamster, crack, loop, legend, asset, punch",
    "https://www.dafont.com/pincoyablack.font"],

    ["OPT", "HEDERA", "LAMA MAMA", "Notted", "Regular", 
     "Primary, place, address, tower, response, phone, just, such, tag, anchor, net, happy",
     "https://www.dafont.com/notted.font",
    ],

    ["COMMA", "ELLIPSIS", "ALF MEOW YUM", "RacingCar", "Regular", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft",
    "https://www.dafont.com/racing-car.font"],

    ["BOO!", "PERCENT", "OUCH", "Quicksilver", "Bold", 
     "Survey, spray, together, shuffle, evoke, scrap, legend, rival, tunnel, entry, photo, wagon",
    "https://www.dafont.com/quicksilver-3.font"],

    ["Psilograph", "RUN LINE", "DOT DOT DOT", "ButlerStencil", "Regular", 
     "Enrich, uncle, guide, cradle, blind, record, across, maze, offer, couch, inspire, gorilla",
    "https://www.dafont.com/butler-stencil.font"],

    ["ZAATAR", "SHAWARMA", "TOUM GARLIC", "LeJourSerif", "Regular", 
     "Quality, security, genius, involve, cupboard, exist, ready, amused, patient, absorb, audit, dinner",
    "https://www.dafont.com/le-jour-serif.font"],

    ["AYRAN", "SHASHLIK", "COAL COAL COAL", "GrandMalefic", "Regular", 
     "Prize, much, glide, outside, page, small, rigid, velvet, squeeze, brave, shuffle, grit",
    "https://www.dafont.com/grand-malefic.font"],
];

const folors = {
    fontsAndColors: fontsAndColorsData.map(([firstRow, secondRow, thirdRow, fontName, fontStyle, randLorem, link], index) => ({
        id: index + 1, firstRow, secondRow, thirdRow, fontName, fontStyle, randLorem, link
    }))
};

export { about, folors, colorsCollection };
