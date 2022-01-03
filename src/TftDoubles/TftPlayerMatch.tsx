import ChampionCard from "../Tft/ChampionCard";
import {TftChampion, TftTrait} from "./Types";
import TraitCard from "../Tft/TraitCard";

export type PlayerMatchProps = {
  summonerName: string;
  summonerChampions: TftChampion[];
  summonerTraits: TftTrait[];
};

export function TftPlayerMatch(props: PlayerMatchProps) {
  return (
    <div>
      <div className={"ml-2  has-text-left has-text-weight-semibold"}>{props.summonerName}</div>
      <div className={"championList"}>
        {props.summonerChampions.map((c) => {
          return (
            <div className={"m-2"}>
              <ChampionCard name={c.name} rarity={c.rarity} tier={c.tier} />
            </div>
          );
        })}
      </div>
        <div className={'traitsList'}>
            {getFilteredTraits(props.summonerTraits).map(t => {
                return (
                    <div className={'m-2'}>
                        <TraitCard name={t.name} numUnits={t.numUnits} tierTotal={t.tierTotal} style={t.style} />
                    </div>
                )
            })}
        </div>
    </div>
  );
}

function getFilteredTraits(traits: TftTrait[]) {
    return traits.filter(t => t.style > 0).sort((t1, t2) => t2.style - t1.style)
}
