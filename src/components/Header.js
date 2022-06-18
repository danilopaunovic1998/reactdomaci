import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.jpg"
export default function Header() {
    
        
    
    return (
        <div>
            <img src={logo}></img>
            <Link to= "/"><p>Home</p></Link>
            <Link to="/watchlist"><p>My Watch List</p></Link>
        </div>
    )
}
