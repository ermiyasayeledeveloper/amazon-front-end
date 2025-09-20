import React, {useContext, useState} from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './payment.module.css'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Components/CurrencyFormatt/CurrencyFormat'
import { axiosInstance } from '../../Api/axioss'
import axios from 'axios'
import { ClipLoader } from 'react-spinners'
import {db} from '../../Utility/firebase'
import { Type } from '../../Utility/action.type'
// import { useNavigate } from 'react-router-dom'


function Paymentt() {
  const [{user, basket}, dispatch] = useContext(DataContext)
  const stripe = useStripe();
  const elements = useElements();
  const [carderr, setCarderr]=useState(null)
  const [proccessing, setProccessing] = useState(false)
  const [errore, myErrore] = useState("")
  const [success, setSuccess]= useState(false)

  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message? setCarderr( e?.error?.message):setCarderr("")
  }
const total = basket.reduce((amount,item)=>{
    return item.price + amount
  },0)

  const handlePayment = async(e) => {
    e.preventDefault();
    try {
      setProccessing(true)
      //1.contact client secret
      const response = await axiosInstance({
        method:"POST",
        url:`/payment/create?total=${total *100}`,
      })
      // console.log(response.data)
      const clientSecret = response.data?.clientSecret
      //2.client side confirmation
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });
      // console.log(paymentIntent);
      

      //after confirmation -> store in the firebase
    await db 
          .collection("user")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount / 100,
            created: paymentIntent.created,
          });
          //empty the basket
          dispatch({type:Type.EMPTY_BASKET})
          setProccessing(false);
          setSuccess(true)
          myErrore(null)
          // Navigate("/orders", {state: {msg: "you have palced new order"}});

    }catch (error) {
      console.log(error)
      error?myErrore(error.message):myErrore("")
      setProccessing(false)
      setSuccess(false)
      // setSuccess && (myErrore(""))

    }
    
  }

  return (
   <Layout>
  {/* header */}
  <div className={classes.payment__header}>Checkout {basket.length} items</div>
  {/* payment method */}
  <section className={classes.payment}>
    {/* address */}
    <div className={classes.flex}>
      <h3>Delivery address</h3>
      <div>
        <div>{user?.email}</div>
        <div>123 React Lane</div>
        <div>AA, ETHIOPIA</div>
      </div>
    </div>
    <hr />

    {/* product */}
    <div className={classes.flex}>
      <h3>Review items and Delivery</h3>
      <div>
        {
          basket?.map ((item, i)=><ProductCard product={item} flex={true} remover={true}/> )
        }
      </div>
    </div>
    <hr />

    {/* card form */}
    <div className={classes.flex}>
      <h3>Payment method</h3>
      <div className={classes.payment__card__container}>
        <div className={classes.payment__detail}>
          <form action="" onSubmit={handlePayment}>
            {/* error */}
            {carderr && <small style={{color:"red"}}>{carderr}</small>}
            {/* payment element */}
            <CardElement onChange={handleChange}/>
            {/* price */}
            <div className={classes.payment__price}>
              <div>
                <span style={{display:"flex", gap:"10px"}}>
                  <p>total order|</p>  <CurrencyFormat amount={total}/>
                </span>
              </div>
              <button type='submit'>
                {
                  proccessing? (<div className={classes.loader}><ClipLoader color='grey' size={15}/><p>please wait ...</p></div>):"paynow"
                }
                
              </button>
              {
                  errore ?(<div style={{color:"red"}}>error when proccessing payment !!!</div>):""
              }
              {
                success && (<div style={{color:"green"}}>payment successful</div> )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    </Layout>
  )
}

export default Paymentt
