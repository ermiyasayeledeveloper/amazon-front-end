import React from 'react'
import { CatagoryInfos } from './CatagoryInfos'
import Catagorycard from './CatagoryCard.jsx'
import classes from './Catagory.module.css'

function Catagoryy() {
  return (
    <section className={classes.catagory__container}>
      {
        CatagoryInfos.map((infos, i)=>{
           return  <Catagorycard data = {infos} key={i}/>
           
             
})
      }
    </section>
  )
}

export default Catagoryy
