import React from 'react'

export default function Sidemenu({ generate, generateManga }) {
  return (
    <div class="side-menu">
      <ul>
        <li class="menu-item">
          <button onClick={e => { e.preventDefault(); generate("/recommendations/anime") }}>Recomend Anime</button>
        </li>
        <li class="menu-item">
          <button onClick={e=>{e.preventDefault(); generateManga("/recommendations/manga")}}>Recomend Manga</button>
        </li>
      </ul>
    </div>
  )
}
