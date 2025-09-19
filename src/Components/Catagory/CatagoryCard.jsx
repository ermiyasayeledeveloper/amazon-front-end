import React from 'react'
import Catagoryy from './Catagoryy'
import classes from './Catagory.module.css'
import { Link } from 'react-router-dom'


function Catagorycard({data}) {
  return (
    <secction className={classes.catagory}>
      <Link to={`category/${data.Name}`}>
        <span>
            <h4>{data.title}</h4>
        </span>
        <img src={data.imgLink} alt="cataas" />
        

      </Link>
    </secction>
  )
}

export default Catagorycard
