import React, { useEffect, useState, useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import ProductCard from '../../Components/Product/ProductCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/endpoint'
import classes from './ProDet.module.css'
import CurrencyFormat from '../../Components/CurrencyFormatt/CurrencyFormat'
import Rating from '@mui/material/Rating'
import Loader from '../../Components/Loader/Loader'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'


function ProdctDetail() {
  const {productid} = useParams()
  // console.log(productid)
  const [isLoding, setIsLoading] = useState(false)
  const [productt, setProductt] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${producturl}/${productid}`)
    .then((res)=>{
      console.log(res)
      setProductt(res.data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])

  const [state, dispatch]=useContext(DataContext)
  console.log(state)
  
      const addToCart = () => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    item: {
      image: productt.image,
      title: productt.title,
      id: productt.id,
      rating: productt.rating,
      price: productt.price,
      description: productt.description
    }
  });
}


  return (
    <Layout>
      {isLoding? (<Loader />):(  <section>
         <div className = {`${classes.card__container} ${classes.product__flexed}`}>
      
      <a href="/">
        <img src={productt.image} alt="" />
      </a>
      <div>
        <h3>{productt.title}</h3>
        <div style={{maxWidth:"750px"}}>{productt.description}</div>
        {/* <div className={classes.rating}>
            
            <Rating value={productt.rating.rate} precision={0.1}/>
           
            <small>{productt.rating.count}</small>
            
        </div> */}
        
        <div className={classes.pricee}>
            {/* price */}
            <CurrencyFormat amount={productt.price}/>
        </div>
          <button className={classes.btn} onClick={addToCart}>Add to cart</button>
      </div>

    </div>
      
    </section>)}
   
    </Layout>
)}

export default ProdctDetail
