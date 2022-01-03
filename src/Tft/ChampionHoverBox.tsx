import {TftChampion} from "../TftDoubles/Types";
import './HoverBox.css';
import filterDisplayedName from "./DisplayFilter";

export default function ChampionHoverBox(props: TftChampion) {
    return <div className={'championHoverBox'}>
        {filterDisplayedName(props.name)}
    </div>
}
