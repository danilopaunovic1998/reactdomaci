import React, { useState } from 'react'
import DisplayElement from './DisplayElement'

export default function Display({ data, addToWatchList}) {
  if(data == null || Array.isArray(data))
  {
    return( <div class="display-div">
            </div>
          )
  }else{
  return (
    <div class="display-div">
        <DisplayElement data = {data} addToWatchList = {addToWatchList}/>
    </div>
  )}
  
}
