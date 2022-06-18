import React, { useState } from 'react'

export default function Display({data}) {
    return (
    <div>
        <h5>{data.id}</h5>
        <h4>{data.titleE}</h4>
        <h4>{data.titleJ}</h4>
        <h4>{data.episodes}</h4>
        <img src={data.image}></img>
        <button>Add to my WatchList</button>
    </div>
  )
}
