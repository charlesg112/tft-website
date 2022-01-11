import './TraitFilter.css';
import IndividualTraitFilter from "./IndividualTraitFilter";
import FilterName from "../FilterName";
import {FilterState} from "../../Sets/Set6Filters";
import React from 'react';
import Filler from "../../../Filler/Filler";

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
            <Filler element={getFillerIndividualTraitFilter()} fullDesktop={2} halfDesktop={4}  mobile={4}/>
        </div>
    </div>
}

function getFillerIndividualTraitFilter() {
    return <div className={'m-2'}>
        <IndividualTraitFilter name={''} enabled={false} onClick={() => void(0)} />
    </div>
}
