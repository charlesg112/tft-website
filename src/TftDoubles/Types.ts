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
