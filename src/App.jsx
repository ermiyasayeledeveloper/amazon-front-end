import { useContext, useEffect, useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Lowerheader from './Components/Header/Lowerheader'
// import Carousel from './Components/Carousel/Carousell'
import Carousell from './Components/Carousel/Carousell'
import Catagoryy from './Components/Catagory/Catagoryy'
import Catagorycard from './Components/Catagory/CatagoryCard'
import Product from './Components/Product/Product'
import Landing from './Pages/Landing/Landing'
import Routing from '../Routing'
import auth from './Utility/firebase'
import { Type } from './Utility/action.type'
import { DataContext } from './Components/DataProvider/DataProvider'



function App() {
  // const [count, setCount] = useState(0)
  const [{user}, dispatch] = useContext(DataContext)
  useEffect(()=>{
     auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user:authUser,
        })
      }else{
        dispatch({
          type: Type.SET_USER,
          user:null,
        })
      }
     })

  }, [])


  return (
    <>
      
      <Routing />
    </>
  )
}

export default App
