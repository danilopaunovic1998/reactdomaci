import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Sidemenu from '../components/Sidemenu';
import Display from '../components/Display';
import api from '../services/api';
import "../CSS/style.css"
export default function Home({addToWatchList}){

    const [displaySingle, setDisplaySingle] = useState("Naruto")

    useEffect(() => {
      generate("/random/anime")
    },[])
    const random = () =>{
      //.log(Math.floor(Math.random()*100) + 1)
      return Math.floor(Math.random()*100) + 1

    }
    const generateRandomManga = async(param) =>{
      var data = await api.GET(param)
      var rand = random()
      var id = data[rand].entry[0].mal_id
      data = await api.GetMangaById(id)
      setDisplaySingle({
        id : data.mal_id,
        titleE : data.title_english,
        titleJ : data.title_japanese,
        episodes : data.episodes,
        image : data.images.jpg.image_url
      })
    }
    const generateRandom = async(param) =>{
      var data = await api.GET(param)
      var rand = random()
      //console.log(rand);
      var id = data[rand].entry[0].mal_id
      //console.log(id)
      data = await api.GetById(id)
      //console.log(data)
      setDisplaySingle({
        id : data.mal_id,
        titleE : data.title_english,
        titleJ : data.title_japanese,
        episodes : data.episodes,
        image : data.images.jpg.image_url
      })

    }
    const generate = async(param) =>{
      var data = await api.GET(param)
       setDisplaySingle({
        id : data.mal_id,
        titleE : data.title_english,
        titleJ : data.title_japanese,
        episodes : data.episodes,
        image : data.images.jpg.image_url
      })
    }
    return (
        <div id="blok1" className='Home'>
            <Sidemenu generate={generateRandom} generateManga={generateRandomManga} />
            <Display data={displaySingle} addToWatchList = {addToWatchList} />
        </div>
    )
}
