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
      console.log(data)
    }
    return (
        <div>
            <Sidemenu generate={generate} />
            <br />
            <Display data={displaySingle} />
        </div>
    )
}
