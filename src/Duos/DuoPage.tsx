import { useParams } from "react-router-dom";
import SummonerCard from "../Tft/SummonerCard";
import './DuoPage.css';
import {useEffect, useState} from "react";

export default function DuoPage() {
    let params = useParams();
    const firstSummonerName = params.firstSummoner;
    const secondSummonerName = params.secondSummoner;

    let [firstSummonerIsLoading, setFirstSummonerIsLoading] = useState(true);
    let [secondSummonerIsLoading, setSecondSummonerIsLoading] = useState(true);
    let [firstSummoner, setFirstSummoner] = useState(summonerPlaceholder);
    let [secondSummoner, setSecondSummoner] = useState(summonerPlaceholder);

    useEffect (() => {
        async function loadSummoners() {
            try {
                const response = await fetch(`http://localhost:8080/summoner/${firstSummonerName}`);
                const json = await response.json();
                setFirstSummoner(json);
                setFirstSummonerIsLoading(false);
            }
            catch (e) {
                console.error(e);
            }
            try {
                const response = await fetch(`http://localhost:8080/summoner/${secondSummonerName}`);
                const json = await response.json();
                setSecondSummoner(json);
                setSecondSummonerIsLoading(false);
            }
            catch (e) {
                console.error(e);
            }
        };
        loadSummoners();
    }, [])

    return <div>
        <div className={'hero is-info mt-6'}>
            <div className='summonerCards '>
                <SummonerCard summoner={{...firstSummoner, tier: firstSummoner.tftTier, rank: firstSummoner.tftRank, wins: firstSummoner.tftWins, losses: firstSummoner.tftLosses}} isLoading={firstSummonerIsLoading} />
                <SummonerCard summoner={{...secondSummoner, tier: secondSummoner.tftTier, rank: secondSummoner.tftRank, wins: secondSummoner.tftWins, losses: secondSummoner.tftLosses}} isLoading={secondSummonerIsLoading}/>
            </div>
        </div>
    </div>
}

const summonerPlaceholder = {
    "id": "1234",
    "name": "Babus",
    "level": 1000,
    "tftTier": "GOLD",
    "tftRank": "I",
    "tftWins": 20,
    "tftLosses": 20
}
