import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes , Route
} from "react-router-dom";
import WatchList from './pages/WatchList';
import Home from './pages/Home';
function App() {
  
  return (
    <div className="App">
        <Router>
        <Header />
          <Routes>
            <Route path={"/watchlist"} element = {<WatchList/>}/>
            <Route path={"/*"} element = {<Home/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;
