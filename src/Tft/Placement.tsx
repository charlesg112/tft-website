import './Placement.css';

export type PlacementProps = {
    placement: number
}

export default function Placement(props: PlacementProps) {
    function getColorClass() {
        switch (props.placement + 1) {
            case 1:
                return 'first';
            case 2:
                return 'second';
            case 3:
                return 'third';
            case 4:
                return 'fourth';
        }
    }

    function getOrdinalIndicator() {
        switch (props.placement + 1) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            case 4:
                return 'th';
        }
    }

    return (
        <div className={`placementHolder ${getColorClass()}`}>
            <div className={'placement is-size-4'}>
                {props.placement + 1}
            </div>
            <div className={'placementOrdinalIndicator is-size-7'}>
                {getOrdinalIndicator()}
            </div>
        </div>
    )
}
