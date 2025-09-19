import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { producturl } from '../../Api/endpoint';
import classes from '../Reasults/results.module.css/results.module.css'
import ProductCard from '../../Components/Product/ProductCard'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../../Components/CurrencyFormatt/CurrencyFormat'
import Loader from '../../Components/Loader/Loader';
// import classes from '../../Components/Product/product.module.css'

function Results() {
  const [results,setResults] = useState([]);
  const [isLoding, setIsLoading] = useState(false)
    const {categoryname} = useParams()
    // console.log(categoryname);
    useEffect(()=>{
      setIsLoading(true)
      axios.get(`${producturl}/${categoryname}`)
      .then((res)=>{
        // console.log(res)
        setResults(res.data)
        setIsLoading(false)
      }).catch((err)=>{
        console.log(err)
        setIsLoading(false)
      })

    }, [])
    

  return (
  <Layout>
    {isLoding? (<Loader />): (<section>
         <div className = {`${classes.card__container}`}>
      
      <a href="/">
        <img src={results.image} alt="" />
      </a>
      <div>
        <h7>{results.title}</h7>
        
        <div className={classes.pricee}>
            {/* price */}
            <CurrencyFormat amount={results.price}/>
        </div>
          <button className={classes.btn}>Add to cart</button>
      </div>

    </div>
      
    </section>)}
    
   
  </Layout>
  )
}

export default Results
