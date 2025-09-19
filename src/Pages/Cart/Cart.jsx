import React, { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormatt/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from '../Cart/cart.module.css'


function Cart() {
  const [{basket, user}, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount,item)=>{
    return item.price + amount
  },0)
  return (
  <Layout>
    <section className={classes.container}>
    <div className={classes.cart__container}>
      <h2>Hello</h2>
       <h3>Your Shopping basket</h3>
       <hr />
       {
        basket?.length==0?(<p>Opps! No items in your cart</p>):(basket?.map((item, i)=>{
          return <ProductCard product={item} renderDesc={true} flex={true} renderAdd={false} remover={true}/>
        }))
       }
    </div>
    {
      basket?.length !==0 && (
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal ({basket?.length} items)</p>
            <CurrencyFormat amount={total}/>
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/payment">Continue to Checkout</Link>


        </div>
        

      )
    }
    
  </section>
  </Layout>
  )
}

export default Cart
