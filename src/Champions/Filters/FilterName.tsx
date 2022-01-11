export type FilterNameProps = {
    name: string
}

export default function FilterName(props: FilterNameProps) {
    return <div className={'notification has-text-left is-size-6 ml-1 mt-2 is-info mb-1'}> {props.name} </div>
}
