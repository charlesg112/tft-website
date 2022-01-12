import './MatchHistory.css';
import {useEffect, useState} from "react";
import {getRecentMatches} from "../Api/api";
import {TftDuo, TftMatch} from "./Types";
import {DuoMatch} from "./DuoMatch";
import React from 'react';

export type MatchHistoryProps = {
    firstSummonerName: string,
    secondSummonerName: string
}

export default function MatchHistory(props: MatchHistoryProps) {

    let [isLoading, setIsLoading] = useState(true);
    let [matches, setMatches] = useState([] as TftMatch[]);

    useEffect(() => {
        async function loadMatchHistory() {
            try {
                const response = await getRecentMatches(props.firstSummonerName, props.secondSummonerName);
                setMatches(response);
            }
            catch (e) {

            }
            setIsLoading(false);
        }
        loadMatchHistory();
    }, [props.firstSummonerName, props.secondSummonerName])

    function getLoadingContents() {
        return (
            <React.Fragment>
                {Array.from(Array(10).keys()).map(i => <DuoMatch datetime={0} firstSummonerName={''} secondSummonerName={''} firstSummonerChampions={[]}
                                          secondSummonerChampions={[]} firstSummonerTraits={[]} secondSummonerTraits={[]} placement={0} isLoading={true} key={`placeholder_${i}`} matchId={`placeholderMatch_${i}`}/>)}
            </React.Fragment>
        )
    }

    function getLoadedContents() {
        if (matches.length === 0) {
            return <div>
                <img className={'summonerNotFoundIcon'} src={'/icons/not_found.png'} alt={'No recent matches recorded'} />
                <div> No recent matches recorded :( </div>
            </div>
        }

        return <React.Fragment>
            { matches.map(m => getDuoMatch(m)) }
        </React.Fragment>

    }

    return (
        <div className={'matchHistory'}>
            {isLoading ? getLoadingContents() : getLoadedContents()}
        </div>
    )

    function getDuoMatch(match: TftMatch) {
        const duo = match.duos.filter(d => d.participants.some(p => cleanString(p.name) === cleanString(props.firstSummonerName))).at(0) as TftDuo;
        return <DuoMatch datetime={match.datetime} isLoading={false} placement={duo.placement} firstSummonerName={duo.participants[0].name} secondSummonerName={duo.participants[1].name} firstSummonerChampions={duo.participants[0].units}
                         secondSummonerChampions={duo.participants[1].units} firstSummonerTraits={duo.participants[0].traits} secondSummonerTraits={duo.participants[1].traits} key={`duoMatch_${match.matchId}`} matchId={match.matchId}/>
    }

    function cleanString(value: string) {
        return value.toLowerCase().replaceAll(' ', '');
    }

}

