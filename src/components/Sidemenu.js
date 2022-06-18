import React from 'react'

export default function Sidemenu({generate}) {
  return (
    <div>
        <button onClick={e=>{e.preventDefault(); generate("/recommendations/anime")}}>Recomend Anime</button>
        <button>Recomend Manga</button>
    </div>
  )
}
