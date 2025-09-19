import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/Carousell'
import Catagory from '../../Components/Catagory/Catagoryy'
import Product from '../../Components/Product/Product'


function Landing() {
  return (
    <Layout>
      <Carousel />
      <Catagory />
      <Product />
    </Layout>
  )
}

export default Landing
