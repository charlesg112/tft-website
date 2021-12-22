import {TftTrait} from "../TftDoubles/Types";
import './HoverBox.css';

export default function TraitHoverBox(props: TftTrait) {
    return (
        <div className={'traitHoverBox'}>
            {props.name}
        </div>
    )
}
