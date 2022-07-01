import React from 'react'

export default function Sidemenu({ generate, generateManga }) {
  return (
    <div className="side-menu">
      <ul>
        <li class="menu-item">
          <button id='recommendButton' onClick={e => { e.preventDefault(); generate("/recommendations/anime") }}>Recomend Anime</button>
        </li>
        <li class="menu-item">
          <button id='recommendButton2' onClick={e=>{e.preventDefault(); generateManga("/recommendations/manga")}}>Recomend Manga</button>
        </li>
      </ul>
    </div>
  )
}
