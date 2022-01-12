import React, {ChangeEvent, useState} from 'react';
import './SearchPage.css';
import "bulma/css/bulma.min.css";
import { useNavigate } from "react-router-dom";
import {keyCodes} from "../Forms/KeyCodes";


export default function SearchPage() {

    const [firstInputIsInvalid, setFirstInputIsInvalid] = useState(false);
    const [secondInputIsInvalid, setSecondInputIsInvalid] = useState(false);
    const [firstSummoner, setFirstSummoner] = useState("");
    const [secondSummoner, setSecondSummoner] = useState("");
    let navigate = useNavigate();

    function handleFirstInputChange(e: ChangeEvent<HTMLInputElement>) {
        setFirstInputIsInvalid(false);
        setFirstSummoner(e.target.value);
    }

    function handleSecondInputChange(e: ChangeEvent<HTMLInputElement>) {
        setSecondInputIsInvalid(false);
        setSecondSummoner(e.target.value);
    }

    function handleSearchClick() {
        let isValid = true;
        if (firstSummoner.toString().replaceAll(" ", "") === "") {
            setFirstInputIsInvalid(true);
            isValid = false;
            setFirstSummoner("");
        }
        if (secondSummoner.toString().replaceAll(" ", "") === "") {
            setSecondInputIsInvalid(true);
            isValid = false;
            setSecondSummoner("");
        }
        if (isValid) {
            navigate(`/duo/${firstSummoner}/${secondSummoner}`)
        }
    }

    function handleKeyDown(e : React.KeyboardEvent) {
        if (e.code === keyCodes.enter) {
            handleSearchClick();
        }
    }

    function getClasses(isInvalid: boolean) {
        return isInvalid ? 'is-danger' : 'is-info';
    }

    return <div className={'searchPage'}>
        <div className={'searchPageContent'}>
            <div className={'doublesLogo'}>
                <img className={'doublesLogoImage'} src={'pengu.png'} alt={'logo'}/>
                <div className={'is-size-2-mobile is-size-1-tablet is-size-1-desktop'}> Doubles !</div>
            </div>
            <input onKeyDown={e => handleKeyDown(e)} className={`input is-info inputBox mb-1 ml-2 mr-2 ${getClasses(firstInputIsInvalid)}`} placeholder={'First summoner'} onChange={e => handleFirstInputChange(e)} value={firstSummoner}/>
            <input onKeyDown={e => handleKeyDown(e)} className={`input inputBox mb-5 ml-2 mr-2 ${getClasses(secondInputIsInvalid)}`} placeholder={'Second summoner'} onChange={e => handleSecondInputChange(e)} value={secondSummoner}/>
            <button className={'button is-info buttonBox'} onClick={handleSearchClick}> Search </button>
        </div>
    </div>

}


