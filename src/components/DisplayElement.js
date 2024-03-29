import React from 'react'

export default function DisplayElement({ data, addToWatchList }) {
    return (
        <div className="inner-div">
            <h1 className='titleE'>English title: {data.titleE === null ? "/" : data.titleE}</h1>
            <h2 className='titleJ'>Japanese title: {data.titleJ === null ? "/" : data.titleJ}</h2>
            <h3 className='Episode'>Number of episodes: {data.episodes === null ? "/" : data.episodes}</h3>
            <img className='backGr' src={data.image}></img>
            <br></br>
            <button id='addTo' className='addOnCl' onClick={e => {e.preventDefault(); addToWatchList(data)}}>+</button>   
        </div>
    )
}
