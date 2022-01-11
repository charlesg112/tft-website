import './Filler.css';
import React, {ReactElement} from "react";

export type FillerProps = {
    element: ReactElement
    fullDesktop?: number,
    halfDesktop?: number,
    tablet?: number,
    mobile?: number
}

export default function Filler(props: FillerProps) : ReactElement {
    return <React.Fragment>
        {getFillers(props.fullDesktop ? props.fullDesktop : 0, 'fillerFullDesktop', props.element)}
        {getFillers(props.halfDesktop? props.halfDesktop : 0, 'fillerHalfDesktop', props.element)}
        {getFillers(props.tablet ? props.tablet : 0, 'fillerTablet', props.element)}
        {getFillers(props.mobile ? props.mobile : 0, 'fillerMobile', props.element)}
    </React.Fragment>
}

function getFillers(count: number, classes: string, element: ReactElement) {
    return <React.Fragment>
        {Array.from(Array(count).keys()).map(i => <div className={`filler ${classes}`} key={`filler_${i}`}>
            { element }
        </div>)}
    </React.Fragment>
}
