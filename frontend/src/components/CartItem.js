import React from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
const CartItem = ({item,qtyChangeHandler,removeHandler}) => {
    console.log(item)
    return (
        <div className="container p-3 my-3 border">
            <div className="row  align-items-center ">
                <div className="col-sm-5">
                <img className="img-fluid"src={item.imageUrl} alt="item"></img>    
                </div>    
                <Link to={`/product/`} className="col-sm-2">
                    <p>{item.name} </p>
                </Link>
                <p className="col-sm-1">${item.price}</p>
                
                <select className="col-sm-1 px1 r" value={item.qty} onChange={(e)=>qtyChangeHandler(item.product,e.target.value)}>
                    {[...Array(item.countInStock).keys()].map(
                        x => <option key={x+1} value={x+1}>
                                {x+1}
                            </option>)}

                </select>
                <button className="col-sm-2 btn btn-outline-danger" onClick={()=>removeHandler(item.product)}>
                    <i className="fa fa-trash" >Remove item</i>
                </button>
            </div> 
            <p></p>          
        </div>
    )
}

export default CartItem
