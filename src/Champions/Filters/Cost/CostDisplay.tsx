import './CostDisplay.css';

export type CostDisplayProps = {
    cost: number
}

export default function CostDisplay(props : CostDisplayProps) {
    return <div className={'coinsDisplay'}>
        <img className={'coinsImage'} src={'/icons/coins.png'} alt={'coins'} />
        <div className={'coinsTag'}> {props.cost} </div>
    </div>
}
