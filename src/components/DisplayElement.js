import React from 'react'

export default function DisplayElement({ data }) {
    return (
        <div class="inner-div">
            <h1>English title: {data.titleE === null ? "/" : data.titleE}</h1>
            <h2>Japanese title: {data.titleJ === null ? "/" : data.titleJ}</h2>
            <h3>Number of episodes: {data.episodes === null ? "/" : data.episodes}</h3>
            <img src={data.image}></img>
            <br></br>
            <button id='addTo'>+</button>   
        </div>
    )
}
