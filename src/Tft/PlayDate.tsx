import TimeAgo from 'javascript-time-ago';

export type PlayDateProps = {
    datetime: number
}

export default function PlayDate(props: PlayDateProps) {
    const timeAgo = new TimeAgo('en-US');

    return <div>
        Played {timeAgo.format(props.datetime)}
    </div>
}
