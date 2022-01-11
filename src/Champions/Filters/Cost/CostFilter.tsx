import {costs, FilterState} from "../../Sets/Set6Filters";
import FilterName from "../FilterName";
import CostDisplay from "./CostDisplay";

export type CostFilterProps = {
    onClick: (s: string) => void
    filterState: FilterState[]
}

export default function CostFilter(props: CostFilterProps) {
    return <div>
        <FilterName name={'Cost'}/>
        {costs.map(c => <CostDisplay cost={c.cost}/>)}
    </div>
}
