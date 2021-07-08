import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
const CartItem = () => {
    return (
        <div className="container p-3 my-3 border">
            <div className="row  align-items-center ">
                <div className="col-sm-5">
                    <img className="img-fluid"src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="item"></img>    
                </div>    
                <Link to={`/product/`} className="col-sm-2">
                    <p>Product 1</p>
                </Link>
                <p className="col-sm-2 ">4999</p>
                <select className="col-sm-1 px1 r">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                </select>
                <button className="col-sm-2 btn btn-outline-danger">
                    <i className="fa fa-trash" ></i>
                </button>
            </div> 

        </div>
    )
}

export default CartItem
