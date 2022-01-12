import {Summoner, TftMatch} from "../TftDoubles/Types";
import {errorCodes} from "./errorCodes";
import {mapToSummoner} from "./summonerMapper";

const API_BASE_URL = 'https://tft-api-v1.herokuapp.com';

export type SummonerResponse = {
    id: string,
    name: string,
    level: number,
    tftTier: string,
    tftRank: string,
    tftWins: number,
    tftLosses: number
}

export async function getSummoner(summonerName: string) : Promise<Summoner> {
    try {
        const response = await fetch(`${API_BASE_URL}/summoner/${summonerName}`);
        if (response.status === 404) {
            throw errorCodes.SUMMONER_NOT_FOUND;
        }
        const json = await response.json();
        const summonerResponse = json as SummonerResponse;
        return mapToSummoner(summonerResponse);
    }
    catch (e) {
        if (e === errorCodes.SUMMONER_NOT_FOUND) throw errorCodes.SUMMONER_NOT_FOUND;
        else throw errorCodes.SERVER_ERROR;
    }
}

export async function getRecentMatches(summonerName1 : string, summonerName2 : string) : Promise<TftMatch[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/duos/${summonerName1}/${summonerName2}`);
        if (response.status === 404) {
            throw errorCodes.SUMMONER_NOT_FOUND;
        }
        const json = await response.json();
        return json as TftMatch[];
    }
    catch (e) {
        if (e === errorCodes.SUMMONER_NOT_FOUND) throw errorCodes.SUMMONER_NOT_FOUND;
        else throw errorCodes.SERVER_ERROR;
    }
}
