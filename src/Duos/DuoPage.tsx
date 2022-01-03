import { useParams } from "react-router-dom";
import SummonerCard from "../Tft/SummonerCard";
import './DuoPage.css';
import MatchHistory from "../TftDoubles/MatchHistory";

export default function DuoPage() {
    let params = useParams();
    const firstSummonerName = params.firstSummoner;
    const secondSummonerName = params.secondSummoner;

    return <div>
        <div className={'hero is-info mt-6'}>
            <div className='summonerCards '>
                <SummonerCard summonerName={firstSummonerName ? firstSummonerName : ''}/>
                <SummonerCard summonerName={secondSummonerName ? secondSummonerName : ''}/>
            </div>
        </div>
        <div className='matchHistory'>
            <MatchHistory firstSummonerName={firstSummonerName ? firstSummonerName : ''} secondSummonerName={secondSummonerName ? secondSummonerName : ''} />
        </div>
    </div>
}
