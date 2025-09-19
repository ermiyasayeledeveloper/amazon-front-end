import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './product.module.css'
import Loader from '../Loader/Loader'


function Product() {
    const [products, setProduct] = useState([])
    const [isLoding, setIsLoading] = useState(false)

useEffect(() => {
  setIsLoading(true)
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        setProduct(res.data)
        // console.log(res)
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err)
        setIsLoading(false)
    })

}, [])

    
  return (
    <>
    {isLoding? (<Loader />) : (<div className={classes.product__container}>
      {
        products.map((singleProduct)=>{
            return <ProductCard product={singleProduct}  key={singleProduct.id} renderAdd={true}/>
        })
      }
    </div>)}
    
    
    </>
  )
}

export default Product
