import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import {addToCart,removeFromCart} from '../redux/actions/cartAction'


import { Redirect } from 'react-router-dom';
 const CartScreen = () => {
    const items =useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const {cartItem}=items
    const getTotalCartItems=(cart)=>{
        return cart.reduce((totalqty,item)=>Number(item.qty)+totalqty,0)
    }
    const getTotalCartPrice=(cart)=>{
        return cart.reduce((totalprice,item)=> Number(item.qty)*Number(item.price)+totalprice,0)
    }
    const qtyChangeHandler=(id, qty)=>{
        dispatch(addToCart(id, qty))
    }
    const removeHandler=(id)=>{
        dispatch(removeFromCart(id))
    }
    const sendOfferRequest=()=>{
        alert('YOu have done the check out')
        return<Redirect to="/" />
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {cartItem? cartItem.map((item,id)=> <CartItem key={id} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>):<div>No product found</div>}
                </div>
                <div className="col-md-4 container ">
                    <div className="container p-3 my-3 ">
                        <p className="alert alert-success"> TOTAL</p>
                        <p className="ml5">{getTotalCartItems(cartItem)}</p>
                        <p className="ml5">{getTotalCartPrice(cartItem)}</p>
                        <button type='button' className="btn btn-outline-primary " onClick={()=>sendOfferRequest()}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartScreen   
