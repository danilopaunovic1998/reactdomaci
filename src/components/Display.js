import React, { useState } from 'react'
import { useEffect } from 'react';
import DisplayElement from './DisplayElement'
import WatchListElement from './WatchListElement';

export default function Display({ data, addToWatchList }) {
  const [watchlist, setWatchlist] = useState([])
  useEffect(() => {
     if (data != null && Array.isArray(data)) 
      setWatchlist(data.map((anime) => (<WatchListElement data={anime}/>)))
   }, [])

  return (
    <div>
      {
        data === null ?
          <div className="display-div">
            <span> Nista nije dodato u Watch List-u </span>
          </div>
          : Array.isArray(data) ?
            React.createElement("div", { className: "display-div watch-list-display" 
          }, watchlist)
          : <div className="display-div">
              <DisplayElement data={data} addToWatchList={addToWatchList} />
          </div>

      }
    </div>
  );

}
