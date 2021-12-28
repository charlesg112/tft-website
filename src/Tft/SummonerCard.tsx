import {Summoner} from "../TftDoubles/Types";
import './SummonerCard.css';
import React from "react";

export type SummonerCardProps = {
    summoner: Summoner,
    isLoading: boolean
}

export default function SummonerCard( props: SummonerCardProps) {

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
                    <div> {props.summoner.name} </div>
                </div>
                <div className={'message-body summonerCardBody'}>
                    <img className={'rankImage'} src={getRankSource(props.summoner.tier, props.summoner.rank)} alt={getRankSource(props.summoner.tier, props.summoner.rank)}/>
                    <div className={'summonerCardInfo'}>
                        <div className={'has-text-weight-bold'}> Solo rank </div>
                        <div> {props.summoner.tier} {props.summoner.rank} </div>
                        <div className={'has-text-weight-bold'}> First place </div>
                        <div> {props.summoner.wins} / {props.summoner.losses + props.summoner.wins} </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    return <div className={`summonerCard ${props.isLoading? 'loadingContents' : 'message is-dark'}`}>
        {props.isLoading ? getLoadingContents() : getCardContents()}
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
