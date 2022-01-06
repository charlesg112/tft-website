import {TftChampion, TftTrait} from "./Types";
import "bulma/css/bulma.min.css";
import "./DuoMatch.css";
import React from 'react';
import {TftPlayerMatch} from "./TftPlayerMatch";
import Placement from "../Tft/Placement";
import PlayDate from "../Tft/PlayDate";

export type DuoMatchProps = {
  firstSummonerName: string;
  secondSummonerName: string;
  firstSummonerChampions: TftChampion[];
  secondSummonerChampions: TftChampion[];
  firstSummonerTraits: TftTrait[];
  secondSummonerTraits: TftTrait[];
  placement: number;
  isLoading: boolean;
  datetime: number;
}

export function DuoMatch(props: DuoMatchProps) {

    function getLoadingContents() {
        return <React.Fragment>
            <div className={'message-header'}>
                ...
            </div>
            <div className={'message-body loadingContents'}>

            </div>
        </React.Fragment>
    }

    function getMatchContents() {
        return <React.Fragment>
            <div className={'message-header'}>
                <Placement placement={props.placement} />
                <PlayDate datetime={props.datetime} />
            </div>
            <div className={'message-body'}>
                <div className={'columns'}>
                    <div className={'column'}>
                        <TftPlayerMatch summonerName={props.firstSummonerName} summonerChampions={props.firstSummonerChampions} summonerTraits={props.firstSummonerTraits} />
                    </div>
                    <div className={'column'}>
                        <TftPlayerMatch summonerName={props.secondSummonerName} summonerChampions={props.secondSummonerChampions} summonerTraits={props.secondSummonerTraits} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
    return (

      <div className={'message is-info'}>
          { props.isLoading ? getLoadingContents() : getMatchContents() }

      </div>
  );
}
