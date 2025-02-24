const about = {
    title: "Curated font & color [coming soon] collection.",
    description: "",
    meInfo: "Find me > ",
    github: "https://github.com/rmmshv/FONTer",
    linkedin: "https://www.linkedin.com/in/rmmshv",
};

const fontsAndColorsData = [
    ["EIGHT", "MANICULE", "SOFT HYPHEN", "Rollergirls", "Regular", 
     "Rare, tail, lend, episode, century, when, muffin, vehicle, shuffle, drum, doll, crisp"],

    ["DOLLARS", "EUROS", "POUNDS", "Porscha", "Regular", 
     "Pottery, spell, praise, chronic-glance, settle, wine, sun, awake, picture, warm, erase"],

    ["SQUID", "DRUIDS", "PROPER RARER ROAR", "GrandParadiso", "Regular", 
     "Clown, half, easy, good, paper, thrive, arena, modify, velvet, luxury, daring, certain"],

    ["BALLER", "GRAVITY", "BERRY BRACKET", "FatKat", "Regular", 
     "Frequent, doctor, promote, shy, draft, dilemma, ripple, casino, pottery, prosper, auction, provide"],

    ["PUNK", "PARENTHESIS", "TILDE", "JapanRich", "Bold", 
     "Recycle, crumble, solve, unable, flat, brass, chicken, husband, mosquito, pave, breeze, midnight"],

    ["I AM", "GROOT", "I AM I AM I AM", "Narnia", "Italic", 
     "Glass, nerve, kite, exile, water, chronic, nation, media, cabbage, damp, govern, regular"],

    ["NINE", "BECAUSE", "SPLENDID YES CHARM", "Neon", "Regular", 
     "Empty, fire, loyal, nation, unit, shadow, brown, night, vehicle, powder, hint, oppose"],

    ["STEAK", "BULL", "APOSTROPHE", "HeavyHeap", "Regular", 
     "Lorizzle, ipsizzle, dolizzle, sit-amizzle, brizzle, elizzle"],

    ["QUEUE", "MARQUEE", "LONGING MUG BLISS", "Sunwish", "Regular", 
     "Silent, dune, whisper, eye, strategy, remember, globe, hole, innocent, cute, lounge, brave"],

    ["ACUTE", "INDEED", "ASTROPHYSICS", "Lemonmilk", "Regular", 
     "Food, draft, forest, also, onion, doctor, scene, silk, scrap, scorpion, depth, want"],

    ["WHO", "FIVE", "DOCTOR WOLF ROSE", "pinkoyablack", "Regular", 
     "Defy, nose, slight, network, copy, decide, creek, grid, brass, burst, real, pair"],

    ["BEAR", "ENQUIRY", "JAGUAR JUNGLE", "Highrise", "Italic", 
     "Diesel, bag, chapter, screen, infant, soon, settle, victory, two, tomato, detail, faith"],

    ["DASH", "CRATORS", "ROCK N ROLL", "Coiny", "Regular", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft"],

    ["TAB", "INDEX", "OXFORD COMMA", "Astonpoliz", "Regular", 
     "Circle, adapt, lizard, genre, layer, curious, labor, radar, ginger, file, tray, arctic"],

    ["HASH", "PROGRAM", "BEEPING BUZZ", "Bayside", "Regular", 
     "Cave, squirrel, welcome, buddy, alter, shallow, joy, science, shoot, when, action, record"],

    ["YEN", "LEOPARD", "README CACHE", "Bulagria", "Regular", 
     "Gentle, bargain, gesture, during, opinion, bachelor, avoid, forward, kid, river, rapid, panel"],

    ["ZONE", "POOF", "MICROCHIP", "Cinematografica", "Regular", 
     "Collect, witness, chat, pitch, venture, viable, bring, health, sand, vicious, honey, recall"],

    ["DOLLA", "CONDUCTOR", "ROOT HOME CD", "DKlounge", "Italic", 
     "Ghost, quote, kitten, urban, gadget, brick, have, exotic, creek, horn, normal, mammal"],

    ["THREE", "WOW", "KEY FACTOR SLASH", "EastmanRoman", "Regular", 
     "Bullet, rail, flip, loyal, fire, symbol, jelly, wire, indoor, weasel, immune, drastic"],

    ["POW", "FREE SOURCE", "AMPERSAND AND", "Evogria", "Regular", 
     "Door, antenna, pipe, add, unit, fabric, tattoo, toe, join, cook, eyebrow, cheap"],

    ["YA!", "PLUS", "STEREO VAULT", "BankPrinter", "Regular", 
     "Hungry, between, electric, task, result, monster, medal, iron, mystery, year, gym, skill"],

    ["XEROX", "MERGING", "DROID BELL", "Glorify", "Regular", 
     "Voyage, private, coil, display, interest, animal, rigid, convince, empty, garage, youth, present"],

    ["HAY", "OCTOTHORPE", "DITTO WAH", "Carbon", "Regular", 
     "Hint, story, wasp, name, casual, someone, manage, sudden, bid, family, crystal, offer"],

    ["SIX", "METALLIC", "BREW", "Lovan", "Regular", 
     "Banana, desert, category, mom, noodle, couple, beauty, jungle, master, index, certain"],

    ["YARN", "CLOUDY", "GIT HERO", "Longhaul", "Regular", 
     "Lucky, radio, magic, slight, card, frog, motion, gate, sand, region, hip, actor"],

    ["WATER", "RETURN", "KNOW TAB CAPS", "pinkoyablack", "Regular", 
     "Exhibit, action, upper, month, vast, where, hamster, crack, loop, legend, asset, punch"],

    ["OPT", "HEDERA", "LAMA MAMA", "Notted", "Regular", 
     "Primary, place, address, tower, response, phone, just, such, tag, anchor, net, happy"],

    ["COMMA", "ELLIPSIS", "ALF MEOW YUM", "RacingCar", "Regular", 
     "Crisp, file, web, predict, fiction, access, diamond, earn, panda, train, gather, draft"],

    ["BOO!", "PERCENT", "OUCH", "Quicksilver", "Regular", 
     "Survey, spray, together, shuffle, evoke, scrap, legend, rival, tunnel, entry, photo, wagon"],

    ["Psilograph", "RUN LINE", "DOT DOT DOT", "ButlerStencil", "Regular", 
     "Enrich, uncle, guide, cradle, blind, record, across, maze, offer, couch, inspire, gorilla"],

    ["ZAATAR", "SHAWARMA", "TOUM GARLIC", "LeJourSerif", "Regular", 
     "Quality, security, genius, involve, cupboard, exist, ready, amused, patient, absorb, audit, dinner"],

    ["AYRAN", "SHASHLIK", "COAL COAL COAL", "GrandMalefic", "Regular", 
     "Prize, much, glide, outside, page, small, rigid, velvet, squeeze, brave, shuffle, grit"],
];

const folors = {
    fontsAndColors: fontsAndColorsData.map(([firstRow, secondRow, thirdRow, fontName, fontStyle, randLorem], index) => ({
        id: index + 1, firstRow, secondRow, thirdRow, fontName, fontStyle, randLorem
    }))
};

export { about, folors };
