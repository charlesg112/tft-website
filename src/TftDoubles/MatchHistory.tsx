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
                console.log(response);
            }
            catch (e) {
                console.error(e);
            }
            setIsLoading(false);
        };
        loadMatchHistory();
    }, [])

    function getLoadingContents() {
        return (
            <React.Fragment>
                {Array(10).fill(<DuoMatch datetime={0} firstSummonerName={''} secondSummonerName={''} firstSummonerChampions={[]}
                                          secondSummonerChampions={[]} firstSummonerTraits={[]} secondSummonerTraits={[]} placement={0} isLoading={true}/>)}
            </React.Fragment>
        )
    }

    return (
        <div className={'matchHistory'}>
            {isLoading ? getLoadingContents() : matches.map(m => getDuoMatch(m))}
        </div>
    )

    function getDuoMatch(match: TftMatch) {
        const duo = match.duos.filter(d => d.participants.some(p => cleanString(p.name) === cleanString(props.firstSummonerName))).at(0) as TftDuo;
        return <DuoMatch datetime={match.datetime} isLoading={false} placement={duo.placement} firstSummonerName={duo.participants[0].name} secondSummonerName={duo.participants[1].name} firstSummonerChampions={duo.participants[0].units}
                         secondSummonerChampions={duo.participants[1].units} firstSummonerTraits={duo.participants[0].traits} secondSummonerTraits={duo.participants[1].traits}/>
    }

    function cleanString(value: string) {
        return value.toLowerCase().replaceAll(' ', '');
    }

}

