import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'
const SideDrawer = ({show,click}) => {
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
                            Cart <span className="sidedrawer__carbadge">0</span>
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
