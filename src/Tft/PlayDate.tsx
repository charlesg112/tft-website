import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

export type PlayDateProps = {
    datetime: number
}

export default function PlayDate(props: PlayDateProps) {
    TimeAgo.addDefaultLocale(en);
    const timeAgo = new TimeAgo('en-US');

    return <div>
        Played {timeAgo.format(props.datetime)}
    </div>
}
