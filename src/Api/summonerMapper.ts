import {SummonerResponse} from "./api";
import {Summoner} from "../TftDoubles/Types";

export function mapToSummoner(summoner: SummonerResponse) : Summoner {
    return {
        ...summoner,
        tier: summoner.tftTier,
        rank: summoner.tftRank,
        wins: summoner.tftWins,
        losses: summoner.tftLosses
    }
}
