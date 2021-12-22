import {TftChampion} from "../TftDoubles/Types";
import './ChampionCard.css';
import ChampionHoverBox from "./ChampionHoverBox";

export default function ChampionCard(props: TftChampion) {
    return (
        <div className={`championCard`}>
            <ChampionHoverBox name={props.name} rarity={props.rarity} tier={props.rarity}/>
            <img className={`championImage  ${getBorder(props.rarity)}`} src={`tft6/champions/${props.name}.png`} alt={props.name} />
        </div>
    )
}

function getBorder(rarity: number) {
    switch (rarity) {
        case 0:
            return "gray";
        case 1:
            return "green";
        case 2:
            return "blue";
        case 3:
            return "purple";
        case 4:
            return "gold";
        default:
            return "unknown";
    }

}
