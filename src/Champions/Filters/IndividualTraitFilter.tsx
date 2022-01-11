import './IndividualTraitFilter.css';
import '../../Tft/TraitCard.css';

export type TraitFilterProps = {
    name: string,
    enabled: boolean,
    onClick: () => void;
}

export default function IndividualTraitFilter(props: TraitFilterProps) {
    return (
        <div onClick={props.onClick} className={`traitCard ${props.enabled ? 'enabled' : 'disabled'}`}>
            <div className={`${props.enabled ? 'enabledHexagon' : 'disabledHexagon'}`}>
                <img className={'traitImage'} src={`/tft6/traits/set6_${props.name}.png`} alt={props.name} />
            </div>
        </div>
    )
}
