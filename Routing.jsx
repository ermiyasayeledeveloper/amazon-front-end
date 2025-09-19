import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './src/Pages/Landing/Landing'
import Signup from './src/Pages/Auth/Signup'
import Payment from './src/Pages/Payment/Paymentt'
import Order from './src/Pages/Order/Order'
import Cart from './src/Pages/Cart/Cart'
import Results from './src/Pages/Reasults/Results'
import ProductDetail from './src/Pages/ProductDetail/ProdctDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './src/Components/ProtectedRoute/ProtectedRoute'
const stripePromise = loadStripe('pk_test_51S4zY41PkZgKRslJ3AlvH9lF5fFxi8F0EDgVinP0oJxcWXNIR4rT4TMvSAToMsfJ3rXXx7OyxbbiRKEUvs01xEWd00Ge8dozGE');

// import Rating from '@mui/material/Rating'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/auth' element={<Signup />}/>
            <Route path='/payment' element={<ProtectedRoute msg={"you must login to pay"} redirect={"/payment"}><Elements stripe={stripePromise}><Payment /></Elements></ProtectedRoute>}/>
            <Route path='/orders' element={<ProtectedRoute msg={"you must login to see your orders"} redirect={"/orders"}><Order /></ProtectedRoute>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/products/:productid' element={<ProductDetail />}/>
            <Route path='/category/:categoryname' element={<Results />}/>
            
        </Routes>
      
    </Router>
  )
}

export default Routing
