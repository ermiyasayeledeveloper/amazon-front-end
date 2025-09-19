import React, { useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrencyFormatt/CurrencyFormat'
import classes from './product.module.css'
import { Link } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'


function ProductCard({product, renderAdd, renderDesc, flex, remover}) {
    const{image, title, id, rating, price, description} = product

    const [state, dispatch]=useContext(DataContext)
    // console.log(state)


    const addToCart = ()=>{
      dispatch({
        type: Type.ADD_TO_BASKET,
        item:{
            image, title, id, rating, price, description
        }
      })
    }
    const removeFromCart = () => {
    dispatch({
      type: Type.REMOVE_BASKET,
      id: id, // 🔹 pass the id to reducer
    });
  };



  return (
    <div className = {`${classes.card__container} ${flex?classes.product__flexed: ''}`}>
      
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h7>{title}</h7>
        {
          renderDesc && <div style={{maxWidth:"750px" }  } className={classes.desc_fin}>{product.description}</div>
        }
        <div className={classes.rating}>
            
            <Rating value={rating.rate} precision={0.1}/>
           
            <small>{rating.count}</small>
        </div>
        <div className={classes.pricee}>
            {/* price */}
            <CurrencyFormat amount={price}/>
        {
          renderAdd &&  <button className={classes.btn} onClick={addToCart}>Add to cart</button>
        }
        {
          remover && <button className={classes.btn_2} onClick={removeFromCart}>Remove From Cart</button>
        }
        </div>
         
      </div>

    </div>
  )
}

export default ProductCard
