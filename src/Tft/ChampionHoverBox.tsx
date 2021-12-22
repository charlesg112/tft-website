import {TftChampion} from "../TftDoubles/Types";
import './HoverBox.css';

export default function ChampionHoverBox(props: TftChampion) {
    return <div className={'championHoverBox'}>
        {props.name}
    </div>
}
