import {useState} from "react";
import ChampionCard from "../Tft/ChampionCard";
import './ChampionsFilters.css';
import {ChampionInfo, champions, CostFilterState, costs, FilterState, traits} from "./Sets/Set6Filters";
import TraitFilter from "./Filters/TraitFilter";
import CostFilter from "./Filters/Cost/CostFilter";

export default function ChampionsFilters() {

    let [traitFilterState, setTraitFilterState] = useState(traits);
    let [costFilterState, setCostFilterState] = useState(costs);
    let [filteredChampions, setFilteredChampions] = useState(champions);

    function handleTraitFilterClick(name: string) {
        const newTraitFilterState = traitFilterState.map(t => t.name === name ? {...t, enabled: !t.enabled}: t)
        setTraitFilterState(
            newTraitFilterState
        )
        setFilteredChampions (
            getFilteredChampions(newTraitFilterState, costFilterState)
        )
    }

    function handleCostFilterClick(name: string) {
        const newCostFilterState = costFilterState.map(c => c.name === name ? {...c, enabled: !c.enabled} : c)
        setCostFilterState(
            newCostFilterState
        )
        setFilteredChampions (
            getFilteredChampions(traitFilterState, newCostFilterState)
        )
    }

    return <div className={'championFilters columns'}>
        <div className={'column is-one-fifth'}>
            <TraitFilter filterState={traitFilterState} onClick={handleTraitFilterClick}/>
            <CostFilter filterState={costFilterState} onClick={handleCostFilterClick}/>
        </div>
        <div className={'column'}>
            <div className={'championsDisplay'}>
                {filteredChampions.map(c => <div className={`m-2 ${c.displayed ? '' : 'notDisplayedChampion'}`}>
                    <ChampionCard name={c.name} rarity={c.rarity}/>
                </div>)}
            </div>
        </div>
    </div>
}

function getFilteredChampions(traitFilterState : FilterState[], costFilterState: CostFilterState[]) {
    const results = champions;
    for (let i = 0; i < results.length; ++i) {
        results[i].displayed = true;
    }
    const traitsFiltered = filterTraits(results, traitFilterState);
    return filterCosts(traitsFiltered, costFilterState);
}

function filterTraits(champions: ChampionInfo[], traitFilterState: FilterState[]) {
    let filtered = champions;
    const enabledTraits = traitFilterState.filter(tf => tf.enabled);
    for (let i = 0; i < enabledTraits.length; ++i) {
        for (let j = 0; j < filtered.length; ++j) {
            if (!filtered[j].traits.some(t => t === enabledTraits[i].name)) {
                filtered[j].displayed = false;
            }
        }
    }
    return filtered;
}

function filterCosts(champions: ChampionInfo[], costFilterState: CostFilterState[]) {
    let filtered = champions;
    const enabledCosts = costFilterState.filter(c => c.enabled);
    for (let i = 0; i < filtered.length; ++i) {
        let turnOff = enabledCosts.length !== 0;
        for (let j = 0; j < enabledCosts.length; ++j) {
            if (filtered[j].rarity === enabledCosts[i].rarity) {
                turnOff = false;
            }
        }
        if (turnOff) {
            filtered[i].displayed = false;
        }
    }
    return filtered;
}

