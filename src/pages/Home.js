import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Sidemenu from '../components/Sidemenu';
import Display from '../components/Display';
import api from '../services/api';
export default function Home(){
    const [displaySingle, setDisplaySingle] = useState("Naruto")

    useEffect(() => {
      generate("/random/anime")
    },[])
  
    const generate = async(param) =>{
      var data = await api.GET(param)
      await setDisplaySingle({
        id : data.mal_id,
        titleE : data.title_english,
        titleJ : data.title_japanese,
        episodes : data.episodes,
        image : data.images.jpg.image_url
      })
    }
    return (
        <div>
            <Sidemenu generate={generate} />
            <br />
            <Display data={displaySingle} />
        </div>
    )
}
