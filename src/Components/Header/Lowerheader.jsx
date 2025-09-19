import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import classes from './Header.module.css'

function Lowerheader() {
  return (
    <>
    <div className={classes.lower__container}>
        <ul>
            <li><a href="/"><GiHamburgerMenu /></a></li>
            <li><a href="/">all</a></li>
            <li><a href="/">Todays deals</a></li>
            <li><a href="/">Customer Service</a></li>
            <li><a href="/">registry</a></li>
            <li><a href="/">Gift Cards</a></li>
            <li><a href="/">Sell</a></li>
        </ul>
    </div>
      
    </>
  )
}

export default Lowerheader
