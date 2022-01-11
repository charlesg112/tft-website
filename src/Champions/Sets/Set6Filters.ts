export type FilterState = {
    name: string,
    enabled: boolean
}

export type CostFilterState = FilterState & {
    cost: number,
    rarity: number
}

export type ChampionInfo = {
    name: string,
    traits: string[]
    rarity: number
    displayed: boolean
}

export const traits = [
    {
        name: 'Syndicate',
        enabled: false
    },
    {
        name: 'Arcanist',
        enabled: false
    },
    {
        name: 'Clockwork',
        enabled: false
    },
    {
        name: 'Assassin',
        enabled: false
    },
    {
        name: 'Scrap',
        enabled: false
    },
    {
        name: 'Bodyguard',
        enabled: false
    },
    {
        name: 'Enforcer',
        enabled: false
    },
    {
        name: 'Challenger',
        enabled: false
    },
    {
        name: 'Mutant',
        enabled: false
    },
    {
        name: 'Colossus',
        enabled: false
    },
    {
        name: 'Bruiser',
        enabled: false
    },
    {
        name: 'Chemtech',
        enabled: false
    },
    {
        name: 'Innovator',
        enabled: false
    },
    {
        name: 'Socialite',
        enabled: false
    },
    {
        name: 'Twinshot',
        enabled: false
    },
    {
        name: 'Cuddly',
        enabled: false
    },
    {
        name: 'Mercenary',
        enabled: false
    },
    {
        name: 'Academy',
        enabled: false
    },
    {
        name: 'Scholar',
        enabled: false
    },
    {
        name: 'Yordle',
        enabled: false
    },
    {
        name: 'Enchanter',
        enabled: false
    },
    {
        name: 'Transformer',
        enabled: false
    },
    {
        name: 'Glutton',
        enabled: false
    },
    {
        name: 'Sniper',
        enabled: false
    },
    {
        name: 'Sister',
        enabled: false
    },
    {
        name: 'Protector',
        enabled: false
    }
]

export const champions : ChampionInfo[] = [
    {
        name: 'tft6_Akali',
        traits: [
            'Syndicate',
            'Assassin'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Blitzcrank',
        traits: [
            'Scrap',
            'Protector',
            'Bodyguard'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Braum',
        traits: [
            'Syndicate',
            'Bodyguard'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Caitlyn',
        traits: [
            'Enforcer',
            'Sniper'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Camille',
        traits: [
            'Clockwork',
            'Challenger'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: `tft6_Chogath`,
        traits: [
            'Mutant',
            'Colossus',
            'Bruiser'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Darius',
        traits: [
            'Syndicate',
            'Bodyguard',
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_DrMundo',
        traits: [
            'Chemtech',
            'Mutant',
            'Bruiser'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Ekko',
        traits: [
            'Scrap',
            'Assassin'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Ezreal',
        traits: [
            'Scrap',
            'Innovator'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Fiora',
        traits: [
            'Enforcer',
            'Challenger'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Galio',
        traits: [
            'Socialite',
            'Colossus',
            'Bodyguard'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Gangplank',
        traits: [
            'Mercenary',
            'Twinshot'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Garen',
        traits: [
            'Academy',
            'Protector'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Graves',
        traits: [
            'Academy',
            'Twinshot'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Heimerdinger',
        traits: [
            'Yordle',
            'Scholar',
            'Innovator'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Illaoi',
        traits: [
            'Mercenary',
            'Bruiser'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Janna',
        traits: [
            'Scrap',
            'Enchanter',
            'Scholar'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Jayce',
        traits: [
            'Enforcer',
            'Transformer',
            'Innovator'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Jhin',
        traits: [
            'Clockwork',
            'Sniper'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Jinx',
        traits: [
            'Sister',
            'Scrap',
            'Twinshot'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Kaisa',
        traits: [
            'Mutant',
            'Challenger'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Kassadin',
        traits: [
            'Mutant',
            'Protector'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Katarina',
        traits: [
            'Academy',
            'Assassin'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_KogMaw',
        traits: [
            'Mutant',
            'Sniper',
            'Twinshot'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Leona',
        traits: [
            'Academy',
            'Bodyguard'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Lissandra',
        traits: [
            'Chemtech',
            'Scholar'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Lulu',
        traits: [
            'Yordle',
            'Enchanter'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Lux',
        traits: [
            'Academy',
            'Arcanist'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Malzahar',
        traits: [
            'Mutant',
            'Arcanist'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_MissFortune',
        traits: [
            'Mercenary',
            'Sniper'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Orianna',
        traits: [
            'Clockwork',
            'Enchanter'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Poppy',
        traits: [
            'Yordle',
            'Bodyguard'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Quinn',
        traits: [
            'Mercenary',
            'Challenger'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Samira',
        traits: [
            'Imperial',
            'Challenger'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Seraphine',
        traits: [
            'Socialite',
            'Innovator'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Shaco',
        traits: [
            'Syndicate',
            'Assassin'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Singed',
        traits: [
            'Chemtech',
            'Innovator'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Sion',
        traits: [
            'Colossus',
            'Imperial',
            'Protector'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Swain',
        traits: [
            'Arcanist',
            'Imperial'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_TahmKench',
        traits: [
            'Mercenary',
            'Glutton',
            'Bruiser'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Talon',
        traits: [
            'Imperial',
            'Assassin'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Taric',
        traits: [
            'Socialite',
            'Enchanter'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Tristana',
        traits: [
            'Yordle',
            'Sniper'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Trundle',
        traits: [
            'Scrap',
            'Bruiser'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_TwistedFate',
        traits: [
            'Syndicate',
            'Arcanist',
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Twitch',
        traits: [
            'Chemtech',
            'Assassin'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Urgot',
        traits: [
            'Twinshot',
            'Chemtech',
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Veigar',
        traits: [
            'Yorlde Lord'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Vex',
        traits: [
            'Yordle',
            'Arcanist'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Vi',
        traits: [
            'Enforcer',
            'Sister',
            'Bruiser'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Viktor',
        traits: [
            'Chemtech',
            'Arcanist'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Warwick',
        traits: [
            'Chemtech',
            'Challenger'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Yone',
        traits: [
            'Academy',
            'Challenger'
        ],
        rarity: 3,
        displayed: true
    },
    {
        name: 'tft6_Yuumi',
        traits: [
            'Academy',
            'Cuddly',
            'Scholar'
        ],
        rarity: 4,
        displayed: true
    },
    {
        name: 'tft6_Zac',
        traits: [
            'Bruiser',
            'Chemtech'
        ],
        rarity: 2,
        displayed: true
    },
    {
        name: 'tft6_Ziggs',
        traits: [
            'Scrap',
            'Yordle',
            'Arcanist'
        ],
        rarity: 0,
        displayed: true
    },
    {
        name: 'tft6_Zilean',
        traits: [
            'Clockwork',
            'Innovator'
        ],
        rarity: 1,
        displayed: true
    },
    {
        name: 'tft6_Zyra',
        traits: [
            'Syndicate',
            'Scholar'
        ],
        rarity: 1,
        displayed: true
    }
]

export const costs : CostFilterState[] = [
    {
        name: '1',
        rarity: 0,
        cost: 1,
        enabled: false
    },
    {
        name: '2',
        rarity: 1,
        cost: 2,
        enabled: false
    },
    {
        name: '3',
        rarity: 2,
        cost: 3,
        enabled: false
    },
    {
        name: '4',
        rarity: 3,
        cost: 4,
        enabled: false
    },
    {
        name: '5',
        rarity: 4,
        cost: 5,
        enabled: false
    }
]
