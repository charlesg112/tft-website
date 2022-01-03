import {TftTrait} from "../TftDoubles/Types";
import './HoverBox.css';
import filterDisplayedName from "./DisplayFilter";

export default function TraitHoverBox(props: TftTrait) {
    return (
        <div className={'traitHoverBox'}>
            {filterDisplayedName(props.name)}
        </div>
    )
}
