import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import WatchList from './pages/WatchList';
import Home from './pages/Home';

function App() {
  const [displayWatchList, setWatchList] = useState([])
  const addToWatchList = (param) => {
    console.log(param)
    setWatchList(arr => [...arr, param])
    console.log(displayWatchList)
  }
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={"/watchlist"} element={<WatchList data={displayWatchList} />} />
          <Route path={"/*"} element={<Home addToWatchList={addToWatchList} />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
