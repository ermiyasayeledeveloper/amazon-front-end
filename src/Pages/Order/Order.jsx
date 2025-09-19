import React , {useContext, useEffect, useState}from 'react'
import Layout from '../../Components/Layout/Layout'
import classes from './order.module.css'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from "../../Components/Product/ProductCard"

function Order() {
  const [{user}, dispatch] = useContext(DataContext)
  const [order,SetOrder]= useState([])
  useEffect(()=>{
    if(user){
      db.collection("user").doc(user.uid).collection("orders").orderBy("created", "desc").onSnapshot((snapshot)=>{
      console.log(snapshot);
      SetOrder(
        snapshot.docs.map((doc)=>({
           
          id:doc.id,
          data:doc.data()
        }))
       
      )
      

    })

    }else{
      SetOrder([])
    }
    

  },[])
  return (
    <Layout>
    <section className={classes.container}>
      <div className={classes.order__container}>
        <h2>Your orders</h2>
        {order?.length == 0 && <div style={{padding:"20px"}}>you don't have orders</div>}
        {/* ordered items */}
        <div>
          {order?.map((eachOrder, i) => {
            return (
              <div key={i}>
                <hr />
                <p>OrderID: {eachOrder.id}</p>
                {eachOrder?.data?.basket?.map((orderrr) => {
                 return (
                  <ProductCard flex={true} product={orderrr} key={order.id}/>
                 ) 
          })}

              </div>
            )
          })}
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Order
