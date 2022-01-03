import {TftTrait} from "../TftDoubles/Types";
import './TraitCard.css';
import TraitHoverBox from "./TraitHoverBox";

export default function TraitCard(props: TftTrait) {
    return (
        <div className={'traitCard'}>
            <TraitHoverBox name={props.name} numUnits={props.numUnits} style={props.style} tierTotal={props.tierTotal} />
            <div className={`hexagon ${getTraitColorClass(props.style)}`}>
                <img className={'traitImage'} src={`/tft6/traits/${props.name}.png`} alt={props.name} />
            </div>
            <div className={'traitNumUnits'}> {props.numUnits} </div>
        </div>
    )
}

function getTraitColorClass(style: number) {
    switch (style) {
        case 0:
            return 'gray';
        case 1:
            return 'bronze';
        case 2:
            return 'silver';
        case 3:
            return 'gold';
        case 4:
            return 'chromatic';
    }
}
