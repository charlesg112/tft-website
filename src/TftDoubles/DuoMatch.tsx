import {TftChampion, TftTrait} from "./Types";
import "bulma/css/bulma.min.css";
import "./DuoMatch.css";
import {TftPlayerMatch} from "./TftPlayerMatch";

export type DuoMatchProps = {
  firstSummonerName: string;
  secondSummonerName: string;
  firstSummonerChampions: TftChampion[];
  secondSummonerChampions: TftChampion[];
  firstSummonerTraits: TftTrait[];
  secondSummonerTraits: TftTrait[];
}

export function DuoMatch(props: DuoMatchProps) {
  return (
    <div className={'columns'}>
        <div className={'column'}>
            <TftPlayerMatch summonerName={props.firstSummonerName} summonerChampions={props.firstSummonerChampions} summonerTraits={props.firstSummonerTraits} />
        </div>
        <div className={'column'}>
            <TftPlayerMatch summonerName={props.secondSummonerName} summonerChampions={props.secondSummonerChampions} summonerTraits={props.secondSummonerTraits} />
        </div>
    </div>
  );
}
