import React, { useContext } from 'react'
import classes from './Header.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import auth from '../../Utility/firebase';


function Header() {
    const [{user, basket}, dispatch] = useContext(DataContext)

  return (
    <section className={classes.fixed}>
      <section   className={classes.header__container} >
            <div className={classes.logo__container}>
                {/* logo */}
                
                <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />

                </Link>
                
                {/* delivery */}
                <div className={classes.delivery}>
                    <span>
                        {/* icon */}
                        <FaLocationDot size={25}/>
                    </span>
                    <div>
                        <p>Delivered to</p>
                        <span>Ethiopia</span>
                    </div>
                </div>
                

            </div>

            <div className={classes.search}>
                {/* search */}
                <select name="" id="">
                    <option value="">all</option>
                </select>
                <input type="text" placeholder='search product'/>
                {/* icon */}
                <FaSearch size={46}/>
            </div>

            <div className={classes.order__container}>
                <Link to="/" className={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_United_States_%28Web_Colors%29.svg/1024px-Flag_of_the_United_States_%28Web_Colors%29.svg.png" alt="" />
                    <select name="" id="">
                        <option value="">EN</option>
                    </select>
                </Link>
                <Link to={!user && "/auth"}>
                    <div>
                        {
                            user ? (<><p style={{ fontSize: "15px", marginRight: "8px" }}>Hello {user?.email?.split("@")[0]}</p><span onClick={()=>auth.signOut()}>Sign Out</span> </>) : (<><p>Hello, sign In</p> <span>Account & Lists</span></>)
                        }


                    </div>


                    
                        


                        
                    
                </Link>
                {/* orders */}
                <Link to="/orders">
                    <p>returns</p>
                    <span>% orders</span>
                </Link>
                <Link to="/cart" className={classes.cart}>
                    {/* icon */}
                    <FaCartPlus size={35}/>
                    <span>{basket.length}</span>
                </Link>
            </div>
      </section>

      
    </section>
  )
}

export default Header
