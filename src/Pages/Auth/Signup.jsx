import React, { useState, useContext } from 'react'
import classes from "./auth.module.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import auth from '../../Utility/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';
import {ClipLoader} from 'react-spinners'

function Signup() {

const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const [error, seterror] = useState("");
const [Loading, setLoading] = useState({signin:false, signup:false})
const navigate = useNavigate();
const navStateData = useLocation();
// console.log(navStateData)
const [{user}, dispatch] = useContext(DataContext)
// console.log(user)

//firebase auth


const authHandler = async(e) => {
  e.preventDefault();
  console.log(e.target.name);
if (e.target.name == "signin"){
  setLoading({...Loading, signin:true})
  signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
    dispatch({
      type:Type.SET_USER,
      user:userInfo.user
    })
    setLoading({...Loading, signin:false})
    navigate(navStateData?.state?.redirect || "/")
    // console.log(userInfo)
  }).catch((err)=>{
    seterror(err.message)
    setLoading({...Loading, signin:false})
  })

}else{
  setLoading({...Loading, signup:true})
  createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
    dispatch({
      type:Type.SET_USER,
      user:userInfo.user
    })
    setLoading({...Loading, signup:false})
    navigate(navStateData?.state?.redirect || "/")
    // console.log(userInfo)
  }).catch((err)=>{
    seterror(err.message)
    setLoading({...Loading, signin:false})
  })

}

}


  return (
    <>
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
      
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="" />

      </Link>
      <div className={classes.login__container}>
        <h1>Sign in</h1>
        {navStateData?.state?.msg && (
          <small style={{padding:"5px", textAlign:"center", color:"red", fontWeight:"bold"}}>
            {navStateData.state.msg}
          </small>

        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" id="password" />
          </div>
          <button name='signin' type='submit' onClick={authHandler} className={classes.login__signInbtn}>
            {
              Loading.signin ? (<ClipLoader color='#000' size={20}/>) : ("signin")
            }
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & 
          Sale. Please see our Privacy Notice, our Cookies Notice and our 
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button name='signup' type='submit' onClick={authHandler} className={classes.login__registerBtn}>{
              Loading.signup ? (<ClipLoader color='#000' size={20}/>) : ("creat amazone account")
            }</button>
            

        {
          error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small>
        }
      </div>
    </section>
    </>
  )
}

export default Signup
