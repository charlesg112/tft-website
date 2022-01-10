import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SearchPage from "./Search/SearchPage";
import DuoPage from "./Duos/DuoPage";
import NotFoundPage from "./NotFound/NotFoundPage";
import HomePage from "./HomePage/HomePage";
import ChampionsPage from "./Champions/ChampionsPage";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path={''} element={<HomePage />} />
          <Route path="/" element={<App />}>
            <Route path="search" element={<SearchPage />} />
            <Route path="duo/:firstSummoner/:secondSummoner" element={<DuoPage />} />
            <Route path="champions" element={<ChampionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
