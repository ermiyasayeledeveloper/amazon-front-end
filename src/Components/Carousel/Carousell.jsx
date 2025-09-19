import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import classes from './Carousel.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carousell() {
  return (
    <>
    <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
    >
        {
            img.map((imageItem) => {
                return <img src= {imageItem} />
            })
        }
       
    </Carousel>
       <div className={classes.hero__img}>
           
        </div>
    </>
  )
}

export default Carousell
