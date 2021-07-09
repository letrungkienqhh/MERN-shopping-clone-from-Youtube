import React from 'react'
import { useSelector } from 'react-redux';
import './NavBar.css'
import {Link} from 'react-router-dom'
const  Navbar=({click}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItem } = cart;
 
  const getCartCount = () => {
    return cartItem.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <h2>Shop NGUYEN PHUONG THAO</h2>
        </div>

        <div className="navbar__search">
          <input placeholder="Search"></input>
          <i className="fa fa-search"></i>
        </div>

        <ul className="navbar__links">
          <li>
            <Link to="/cart" className="cart__link">
              <i className="fas fa-shopping-cart"></i>
              <span>
                Cart <span className="cartlogo__badge">  <span className="badge">{getCartCount()}</span></span>
              </span>
             </Link>
          </li>
          <li>
            <Link to="/" onClick={click}>Shop</Link>
          </li>
        </ul>
        
        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      );
    };
export default Navbar