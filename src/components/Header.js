import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.png"
export default function Header() {



    return (
        <div class="header">
            <nav>
                <img class="logo-image" src={logo}></img>
                <ul class = "nav-links">
                    <li>
                        <Link to="/"><a class="nav-item">Home</a></Link>
                    </li>
                    <li>
                        <Link to="/watchlist"><a class="nav-item">My Watch List</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
