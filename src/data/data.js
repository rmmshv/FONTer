const about = {
    title: "Curated font & color [coming soon] collection.",
    description: "",
    meInfo: "Find me > ",
    github: "https://github.com/rmmshv/FONTer",
    linkedin: "https://www.linkedin.com/in/rmmshv",
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

    ["STEAK", "BULL", "APOSTROPHE", "HeavyHeap", "Regular", 
     "Lorizzle, ipsizzle, dolizzle, sit-amizzle, brizzle, elizzle",
    "https://www.dafont.com/heavy-heap.font"],

    ["QUEUE", "MARQUEE", "LONGING MUG BLISS", "Sunwish", "Regular", 
     "Silent, dune, whisper, eye, strategy, remember, globe, hole, innocent, cute, lounge, brave",
    "https://www.dafont.com/sunwish-maverick.font"],

    ["ACUTE", "INDEED", "ASTROPHYSICS", "Lemonmilk", "Regular", 
     "Food, draft, forest, also, onion, doctor, scene, silk, scrap, scorpion, depth, want",
    "https://www.dafont.com/lemon-milk.font"],

    ["WHO", "FIVE", "DOCTOR WOLF ROSE", "pincoyablack", "Regular", 
     "Defy, nose, slight, network, copy, decide, creek, grid, brass, burst, real, pair",
    "https://www.dafont.com/pincoyablack.font"],

    ["BEAR", "ENQUIRY", "JAGUAR JUNGLE", "Highrise", "Italic", 
     "Diesel, bag, chapter, screen, infant, soon, settle, victory, two, tomato, detail, faith",
    "https://www.dafont.com/highrise.font"],

    ["DASH", "CRATORS", "ROCK N ROLL", "Coiny", "Regular", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft",
    "https://www.dafont.com/coiny.font"],

    ["TAB", "INDEX", "OXFORD COMMA", "Astonpoliz", "Regular", 
     "Circle, adapt, lizard, genre, layer, curious, labor, radar, ginger, file, tray, arctic",
    "https://www.dafont.com/astonpoliz.font"],

    ["HASH", "PROGRAM", "BEEPING BUZZ", "Bayside", "Regular", 
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

    ["POW", "FREE SOURCE", "AMPERSAND AND", "Evogria", "Regular", 
     "Door, antenna, pipe, add, unit, fabric, tattoo, toe, join, cook, eyebrow, cheap",
    "https://www.dafont.com/evogria.font"],

    ["YA!", "PLUS", "STEREO VAULT", "BankPrinter", "Regular", 
     "Hungry, between, electric, task, result, monster, medal, iron, mystery, year, gym, skill",
    "https://www.dafont.com/f25-bank-printer.font"],

    ["XEROX", "MERGING", "DROID BELL", "Glorify", "Regular", 
     "Voyage, private, coil, display, interest, animal, rigid, convince, empty, garage, youth, present",
    "https://www.dafont.com/glorify-sh.font"],

    ["HAY", "OCTOTHORPE", "DITTO WAH", "Carbon", "Regular", 
     "Hint, story, wasp, name, casual, someone, manage, sudden, bid, family, crystal, offer",
    "https://www.dafont.com/carbon.font"],

    ["SIX", "METALLIC", "BREW", "Lovan", "Regular", 
     "Banana, desert, category, mom, noodle, couple, beauty, jungle, master, index, certain",
    "https://www.dafont.com/lovan.font"],

    ["YARN", "CLOUDY", "GIT HERO", "Longhaul", "Regular", 
     "Lucky, radio, magic, slight, card, frog, motion, gate, sand, region, hip, actor",
    "https://www.dafont.com/longhaul.font"],

    ["WATER", "RETURN", "KNOW TAB CAPS", "pincoyablack", "Regular", 
     "Exhibit, action, upper, month, vast, where, hamster, crack, loop, legend, asset, punch",
    "https://www.dafont.com/pincoyablack.font"],

    ["OPT", "HEDERA", "LAMA MAMA", "Notted", "Regular", 
     "Primary, place, address, tower, response, phone, just, such, tag, anchor, net, happy",
     "https://www.dafont.com/notted.font",
    ],

    ["COMMA", "ELLIPSIS", "ALF MEOW YUM", "RacingCar", "Regular", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft",
    "https://www.dafont.com/racing-car.font"],

    ["BOO!", "PERCENT", "OUCH", "Quicksilver", "Regular", 
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

export { about, folors };
