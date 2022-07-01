import React from 'react'
import Display from '../components/Display'
import Sidemenu from '../components/Sidemenu'

//document.getElementById('recommendButton').disabled = true
const emptyFunction = () => void undefined

export default function WatchList({data}) {
  return (
    <div className="WatchList">
      <Sidemenu generate= {emptyFunction} generateManga={emptyFunction}/>
      <Display data = {data} addToWatchList={emptyFunction}/>
    </div>
  )
}


