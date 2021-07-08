import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import './CartScreen.css'
 const CartScreen = () => {
    const items =useSelector((state)=>state.CartItem)
    console.log(items)
    const {sanpham}=items
    console.log(sanpham)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {items? items.map((item,id)=><CartItem key={id}></CartItem>):items}
                </div>
                <div className="col-md-4 container ">
                    <div className="container p-3 my-3 ">
                        <p className="alert alert-success"> TOTAL</p>
                        <p className="ml5">5000$</p>
                        <button type='button' className="btn btn-outline-primary ">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartScreen   
