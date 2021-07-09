import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
const SideDrawer = ({show,click}) => {
    const cart= useSelector(state => state.cart)
    const {cartItem}=cart
    const getCountCart=()=>{
        cartItem.reduce((item,totalqty)=>Number(item.qty)+totalqty,0)
    }
    const sideDrawerClass=["sidedrawer"]
    
    if(show){
         sideDrawerClass.push("show")
    }
    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className={"sidedrawer__link"}>
                <li>
                    <Link onClick={click}>Profile</Link>
                </li>
                <li>
                    <Link to={"/cart"} onClick={click}>
                        <i className="fa fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__carbadge">{getCountCart()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to={"/"} onClick={click} >Shop</Link>

                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
