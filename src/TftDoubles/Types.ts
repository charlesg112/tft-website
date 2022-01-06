export type TftChampion = {
    name: string
    rarity: number,
    tier: number
}

export type TftTrait = {
    name: string,
    numUnits: number,
    tierTotal: number,
    style: number
}

export type Summoner = {
    name: string,
    level: number,
    tier: string,
    rank: string,
    wins: number,
    losses: number
}

export type TftPlayerMatch = {
    name: string,
    totalDamageToPlayers: number,
    level: number,
    units: TftChampion[]
    traits: TftTrait[]
}

export type TftDuo = {
    placement: number,
    participants : TftPlayerMatch[]
}

export type TftMatch = {
    matchId: string,
    datetime: number,
    duos: TftDuo[]
}
