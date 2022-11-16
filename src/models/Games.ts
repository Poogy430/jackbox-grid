export interface Game {
    title: string,
    pack: string,
    minPlayers: number,
    maxPlayers: number,
    extendedTimers: boolean,
    audience: boolean,
    imgSrc: string,
}

enum PARTY_PACK {
    STANDALONE = 'Standalone Game',
    JB_PP_1 = 'The Jackbox Party Pack',
    JB_PP_2 = 'The Jackbox Party Pack 2',
    JB_PP_3 = 'The Jackbox Party Pack 3',
    JB_PP_4 = 'The Jackbox Party Pack 4',
    JB_PP_5 = 'The Jackbox Party Pack 5',
    JB_PP_6 = 'The Jackbox Party Pack 6',
    JB_PP_7 = 'The Jackbox Party Pack 7',
    JB_PP_8 = 'The Jackbox Party Pack 8',
    JB_PP_9 = 'The Jackbox Party Pack 9', // Instructions say 45 game titles, using games from party pack 9 makes 50, but it does exist :)
}

export const games: Array<Game> = [
    {
        title: 'Drawful 2',
        pack: PARTY_PACK.STANDALONE,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'drawful2.jpg',
    },
    {
        title: 'Quiplash',
        pack: PARTY_PACK.STANDALONE,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'Quiplash.webp',
    },
    {
        title: 'Fibbage',
        pack: PARTY_PACK.STANDALONE,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: false,
        audience: false,
        imgSrc: 'fibbage.webp',
    },
    {
        title: `You Don't Know Jack Classic Pack`,
        pack: PARTY_PACK.STANDALONE,
        minPlayers: 1,
        maxPlayers: 3,
        extendedTimers: false,
        audience: false,
        imgSrc: 'ydkjclassic.webp',
    },
    {
        title: 'Quiplash 2 InterLASHional',
        pack: PARTY_PACK.STANDALONE,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'quiplashInternational.webp',
    },
    {
        title: `You Don't Know Jack 2015`,
        pack: PARTY_PACK.JB_PP_1,
        minPlayers: 1,
        maxPlayers: 4,
        extendedTimers: false,
        audience: false,
        imgSrc: 'ydkj2015.png',
    },
    {
        title: 'Fibbage XL',
        pack: PARTY_PACK.JB_PP_1,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: false,
        audience: false,
        imgSrc: 'fibbageXL.jpeg',
    },
    {
        title: 'Drawful',
        pack: PARTY_PACK.JB_PP_1,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: false,
        audience: false,
        imgSrc: 'drawful.webp',
    },
    {
        title: 'Word Spud',
        pack: PARTY_PACK.JB_PP_1,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: false,
        audience: false,
        imgSrc: 'wordspud.webp',
    },
    {
        title: 'Lie Swatter',
        pack: PARTY_PACK.JB_PP_1,
        minPlayers: 1,
        maxPlayers: 100,
        extendedTimers: false,
        audience: false,
        imgSrc: 'lieswatter.webp',
    },
    {
        title: 'Fibbage 2',
        pack: PARTY_PACK.JB_PP_2,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'fibbage2.jpg',
    },
    {
        title: 'Bidiots',
        pack: PARTY_PACK.JB_PP_2,
        minPlayers: 3,
        maxPlayers: 6,
        extendedTimers: false,
        audience: false,
        imgSrc: 'bidiots.webp',
    },
    {
        title: 'Bomb Corp.',
        pack: PARTY_PACK.JB_PP_2,
        minPlayers: 1,
        maxPlayers: 4,
        extendedTimers: false,
        audience: false,
        imgSrc: 'bombcorp.webp',
    },
    {
        title: 'Earwax',
        pack: PARTY_PACK.JB_PP_2,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: false,
        audience: true,
        imgSrc: 'earwax.jpg',
    },
    {
        title: 'Quiplash XL',
        pack: PARTY_PACK.JB_PP_2,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'quiplashXL.webp',
    },
    {
        title: 'Quiplash 2',
        pack: PARTY_PACK.JB_PP_3,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'quiplash2.webp',
    },
    {
        title: 'Trivia Murder Party',
        pack: PARTY_PACK.JB_PP_3,
        minPlayers: 1,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'tmp.jpg',
    },
    {
        title: 'Guesspionage',
        pack: PARTY_PACK.JB_PP_3,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: false,
        audience: true,
        imgSrc: 'guess.png',
    },
    {
        title: 'Tee K.O.',
        pack: PARTY_PACK.JB_PP_3,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'teeko.png',
    },
    {
        title: `Fakin' It`,
        pack: PARTY_PACK.JB_PP_3,
        minPlayers: 3,
        maxPlayers: 6,
        extendedTimers: false,
        audience: true,
        imgSrc: 'fakinit.jpeg',
    },
    {
        title: 'Fibbage 3',
        pack: PARTY_PACK.JB_PP_4,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'Fibbage3.webp',
    },
    {
        title: 'Survive the Internet',
        pack: PARTY_PACK.JB_PP_4,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'sti.webp',
    },
    {
        title: 'Monster Seeking Monster',
        pack: PARTY_PACK.JB_PP_4,
        minPlayers: 3,
        maxPlayers: 7,
        extendedTimers: true,
        audience: true,
        imgSrc: 'monster.webp',
    },
    {
        title: 'Bracketeering',
        pack: PARTY_PACK.JB_PP_4,
        minPlayers: 3,
        maxPlayers: 16,
        extendedTimers: true,
        audience: true,
        imgSrc: 'bracketeering.jpg',
    },
    {
        title: 'Civic Doodle',
        pack: PARTY_PACK.JB_PP_4,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'civic.webp',
    },
    {
        title: `You Don't Know Jack: Full Stream`,
        pack: PARTY_PACK.JB_PP_5,
        minPlayers: 1,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'ydkjfs.webp',
    },
    {
        title: 'Split the Room',
        pack: PARTY_PACK.JB_PP_5,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'split.jpg',
    },
    {
        title: 'Patently Stupid',
        pack: PARTY_PACK.JB_PP_5,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'patent.webp',
    },
    {
        title: 'Mad Verse City',
        pack: PARTY_PACK.JB_PP_5,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'madverse.webp',
    },
    {
        title: 'Zeeple Dome',
        pack: PARTY_PACK.JB_PP_5,
        minPlayers: 1,
        maxPlayers: 6,
        extendedTimers: false,
        audience: false,
        imgSrc: 'zeeple.webp',
    },
    {
        title: 'Trivia Murder Party 2',
        pack: PARTY_PACK.JB_PP_6,
        minPlayers: 1,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'tmp2.webp',
    },
    {
        title: 'Role Models',
        pack: PARTY_PACK.JB_PP_6,
        minPlayers: 3,
        maxPlayers: 6,
        extendedTimers: true,
        audience: true,
        imgSrc: 'rolemodels.jpg',
    },
    {
        title: 'Joke Boat',
        pack: PARTY_PACK.JB_PP_6,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'jokeboat.webp',
    },
    {
        title: 'Dictionarium',
        pack: PARTY_PACK.JB_PP_6,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'dictionarium.webp',
    },
    {
        title: 'Push The Buton',
        pack: PARTY_PACK.JB_PP_6,
        minPlayers: 4,
        maxPlayers: 10,
        extendedTimers: false,
        audience: false,
        imgSrc: 'push.webp',
    },
    {
        title: 'Quiplash 3',
        pack: PARTY_PACK.JB_PP_7,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'quiplash3.webp',
    },
    {
        title: `Champ'd Up`,
        pack: PARTY_PACK.JB_PP_7,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'champd.jpeg',
    },
    {
        title: 'The Devils and the Details',
        pack: PARTY_PACK.JB_PP_7,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: false,
        audience: true,
        imgSrc: 'devils.webp',
    },
    {
        title: `Blather 'Round`,
        pack: PARTY_PACK.JB_PP_7,
        minPlayers: 2,
        maxPlayers: 6,
        extendedTimers: false,
        audience: true,
        imgSrc: 'blather.webp',
    },
    {
        title: 'Talking Points',
        pack: PARTY_PACK.JB_PP_7,
        minPlayers: 3,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'talkingpoints.webp',
    },
    {
        title: 'Job Job',
        pack: PARTY_PACK.JB_PP_8,
        minPlayers: 3,
        maxPlayers: 10,
        extendedTimers: true,
        audience: true,
        imgSrc: 'jobjob.webp',
    },
    {
        title: 'The Wheel of Enormous Proportions',
        pack: PARTY_PACK.JB_PP_8,
        minPlayers: 2,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'wheel.webp',
    },
    {
        title: 'The Poll Mine',
        pack: PARTY_PACK.JB_PP_8,
        minPlayers: 2,
        maxPlayers: 10,
        extendedTimers: true,
        audience: true,
        imgSrc: 'pollmine.webp',
    },
    {
        title: 'Drawful: Animate',
        pack: PARTY_PACK.JB_PP_8,
        minPlayers: 3,
        maxPlayers: 10,
        extendedTimers: true,
        audience: true,
        imgSrc: 'drawfulanimate.webp',
    },
    {
        title: 'Weapons Drawn',
        pack: PARTY_PACK.JB_PP_8,
        minPlayers: 4,
        maxPlayers: 8,
        extendedTimers: true,
        audience: true,
        imgSrc: 'weapons.png',
    },
]