import './TraitFilter.css';
import IndividualTraitFilter from "./IndividualTraitFilter";
import FilterName from "./FilterName";
import {FilterState} from "../Sets/Set6Filters";

export type TraitFilterProps = {
    onClick: (s: string) => void
    filterState: FilterState[]
}

export default function TraitFilter(props: TraitFilterProps) {
    return <div>
        <FilterName name={'Traits'}/>
        <div className={'traitsFilter'}>
            {props.filterState.map(t => <div className={'m-2'}>
                <IndividualTraitFilter name={t.name} enabled={t.enabled} onClick={() => props.onClick(t.name)} key={t.name}/>
            </div>)}
        </div>
    </div>
}
