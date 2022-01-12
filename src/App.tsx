import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import {Outlet} from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en.json';

function App() {

    useEffect(() => {
        TimeAgo.addDefaultLocale(en);
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <Outlet />
        </div>
    );
}

export default App;
