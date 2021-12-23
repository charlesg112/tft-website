import {useState} from 'react';
import './SearchPage.css';
import "bulma/css/bulma.min.css";
import {Link} from "react-router-dom";

export default function SearchPage() {

    const [firstSummoner, setFirstSummoner] = useState("");
    const [secondSummoner, setSecondSummoner] = useState("");

    function handleSearchClick() {
        console.log(`First summoner name : ${firstSummoner}; Second summoner name : ${secondSummoner}`)
    }

    return <div className={'searchPage'}>
        <div className={'searchPageContent'}>
            <div className={'doublesLogo'}>
                <img className={'doublesLogoImage'} src={'pengu.png'} alt={'logo'}/>
                <div className={'is-size-2-mobile is-size-1-tablet is-size-1-desktop'}> Doubles !</div>
            </div>
            <input className={'input is-info inputBox mb-1'} placeholder={'First summoner'} onChange={(e) => setFirstSummoner(e.target.value)} value={firstSummoner}/>
            <input className={'input is-info inputBox mb-5'} placeholder={'Second summoner'} onChange={(e) => setSecondSummoner(e.target.value)} value={secondSummoner}/>
            <Link className={'button is-info buttonBox'} onClick={handleSearchClick} to={`/duo/${firstSummoner}/${secondSummoner}`}> Search </Link>
        </div>
    </div>

}


