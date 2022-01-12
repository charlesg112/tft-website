import './SummonerCard.css';
import React, {useEffect, useState} from "react";
import {getSummoner} from "../Api/api";

export type SummonerCardProps = {
    summonerName: string
}

export default function SummonerCard( props: SummonerCardProps) {

    let [summonerNotFound, setSummonerNotFound] = useState(false);
    let [summonerInfo, setSummonerInfo] = useState(summonerPlaceholder);
    let [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        async function loadSummoners() {
            try {
                const response = await getSummoner(props.summonerName);
                setSummonerInfo(response);
            }
            catch (e) {
                setSummonerNotFound(true);
            }
            setIsLoading(false);
        };
        loadSummoners();
    }, [props.summonerName])

    function getLoadingContents() {
        return (
            <div className={'message is-dark'}>
                <div className={'message-header'}> . . . </div>
            </div>
        )
    }

    function getCardContents() {
        return (
            <React.Fragment>
                <div className={'message-header'}>
                    <div> {summonerInfo.name} </div>
                </div>
                <div className={'message-body summonerCardBody'}>
                    <img className={'rankImage'} src={getRankSource(summonerInfo.tier, summonerInfo.rank)} alt={getRankSource(summonerInfo.tier, summonerInfo.rank)}/>
                    <div className={'summonerCardInfo'}>
                        <div className={'has-text-weight-bold'}> Solo rank </div>
                        <div> {summonerInfo.tier} {summonerInfo.rank} </div>
                        <div className={'has-text-weight-bold'}> First place </div>
                        <div> {summonerInfo.wins} / {summonerInfo.wins + summonerInfo.losses} </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    function getSummonerNotFoundContents() {
        return (
            <React.Fragment>
                <div className={'message-header'}>
                    <div> '{props.summonerName}' was not found ... :( </div>
                </div>
                <div className={'message-body'} >
                    <img className={'summonerNotFoundIcon'} src={'/icons/not_found.png'} alt={'Summoner not found :('} />
                </div>
            </React.Fragment>
        )
    }

    return <div className={`summonerCard ${isLoading? 'loadingContents' : 'message is-dark'}`}>
        {
            isLoading ? getLoadingContents() :
            summonerNotFound? getSummonerNotFoundContents() : getCardContents()
        }
    </div>

}

function getRankSource(tier: string, rank: string) : string {
    return `/ranks/${tier}_${mapRankToNumber(rank)}.png`;
}

function mapRankToNumber(tier: string) : number {
    switch (tier) {
        case "I":
            return 1;
        case "II":
            return 2;
        case "III":
            return 3;
        case "IV":
            return 4;
        case "V":
            return 5;
        default:
            return 4;
    }
}

const summonerPlaceholder = {
    "name": "Babus",
    "level": 1000,
    "tier": "GOLD",
    "rank": "I",
    "wins": 20,
    "losses": 20
}

