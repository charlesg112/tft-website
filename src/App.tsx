import React from 'react';
import './App.css';
import {DuoMatch} from "./TftDoubles/DuoMatch";

function App() {
    return (
        <div className="App">
            <DuoMatch firstSummonerName={"JeffHarrison"} secondSummonerName={"The Holy Drinker"}
                      firstSummonerChampions={champions} secondSummonerChampions={champions}
            firstSummonerTraits={traits} secondSummonerTraits={traits}/>
        </div>
    );
}

export default App;

const champions = [
    {
        "name": "TFT6_Ziggs",
        "rarity": 0,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Trundle",
        "rarity": 1,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Vi",
        "rarity": 1,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Blitzcrank",
        "rarity": 1,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Zac",
        "rarity": 2,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Ekko",
        "rarity": 2,
        "tier": 3,
        "id": null
    },
    {
        "name": "TFT6_DrMundo",
        "rarity": 3,
        "tier": 2,
        "id": null
    },
    {
        "name": "TFT6_Janna",
        "rarity": 3,
        "tier": 2,
        "id": null
    }
]

const traits = [
    {
        "name": "Set6_Arcanist",
        "numUnits": 1,
        "tierTotal": 4,
        "style": 0
    },
    {
        "name": "Set6_Assassin",
        "numUnits": 1,
        "tierTotal": 3,
        "style": 1
    },
    {
        "name": "Set6_Bodyguard",
        "numUnits": 1,
        "tierTotal": 4,
        "style": 0
    },
    {
        "name": "Set6_Bruiser",
        "numUnits": 4,
        "tierTotal": 4,
        "style": 2
    },
    {
        "name": "Set6_Chemtech",
        "numUnits": 2,
        "tierTotal": 4,
        "style": 0
    },
    {
        "name": "Set6_Enchanter",
        "numUnits": 1,
        "tierTotal": 4,
        "style": 0
    },
    {
        "name": "Set6_Enforcer",
        "numUnits": 1,
        "tierTotal": 2,
        "style": 0
    },
    {
        "name": "Set6_Mutant",
        "numUnits": 1,
        "tierTotal": 2,
        "style": 0
    },
    {
        "name": "Set6_Protector",
        "numUnits": 1,
        "tierTotal": 4,
        "style": 0
    },
    {
        "name": "Set6_Scholar",
        "numUnits": 1,
        "tierTotal": 3,
        "style": 0
    },
    {
        "name": "Set6_Scrap",
        "numUnits": 6,
        "tierTotal": 3,
        "style": 3
    },
    {
        "name": "Set6_Sister",
        "numUnits": 1,
        "tierTotal": 1,
        "style": 0
    },
    {
        "name": "Set6_Yordle",
        "numUnits": 1,
        "tierTotal": 2,
        "style": 0
    }
]
