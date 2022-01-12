import {Summoner, TftMatch} from "../TftDoubles/Types";
import {errorCodes} from "./errorCodes";
import {mapToSummoner} from "./summonerMapper";
import axios from "axios";

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
    const response = await axios.get(`${API_BASE_URL}/summoner/${summonerName}`);
    if (response.status === 404) {
        throw errorCodes.SUMMONER_NOT_FOUND;
    }
    else if (response.status !== 200) {
        throw errorCodes.SERVER_ERROR;
    }

    const json = response.data as SummonerResponse;

    if (json.tftTier === null) {
        throw errorCodes.SUMMONER_NOT_FOUND;
    }

    return mapToSummoner(json);
}

export async function getRecentMatches(summonerName1 : string, summonerName2 : string) : Promise<TftMatch[]> {
    const response = await axios.get(`${API_BASE_URL}/duos/${summonerName1}/${summonerName2}`);
    if (response.status === 404) {
        throw errorCodes.SUMMONER_NOT_FOUND;
    }
    else if (response.status !== 200) {
        throw errorCodes.SERVER_ERROR;
    }
    const json = response.data;
    return json as TftMatch[];
}
