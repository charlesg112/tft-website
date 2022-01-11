export type CostDisplayProps = {
    cost: number
}

export default function CostDisplay(props : CostDisplayProps) {
    return <div>
        <img src={'/icons/coins.png'} alt={'coins'} />
        <div> {props.cost} </div>
    </div>
}
