import React from 'react'

export default function WatchListElement ({data}) {
    
    return (
        <div className='watch-list-element'>
            <h1 className='titleE'>English title: {data.titleE === null ? "/" : data.titleE}</h1>
            <h2 className='titleJ'>Japanese title: {data.titleJ === null ? "/" : data.titleJ}</h2>
            <h3 className='Episode'>Number of episodes: {data.episodes === null ? "/" : data.episodes}</h3>
            <img className='backGr' src={data.image}></img>
        </div>
    )
}
