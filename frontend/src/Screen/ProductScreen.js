import React, { useEffect, useState } from 'react'
import './ProductScreen.css'
import { useSelector,useDispatch } from 'react-redux'
import { getProductDetails } from '../redux/actions/productAction'
import { addToCart } from '../redux/actions/cartAction'
import Product from '../components/Product'
import { useParams } from 'react-router-dom'
const ProductScreen=({history})=> {   
    const {id} =useParams();
    console.log(id)
                                                                                          
    const [qty,setQty]=useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state=>state.getProductDetails)
    const {product,error,loading} =productDetails
    useEffect(() => {
        if (product && id!==product._id  ) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch,product])
    
    const addToCartHandler =()=>{
        console.log(`dang dispatch`)
        console.log(addToCart(product._id,qty))
        dispatch(addToCart(product._id,qty))
      
       
    }
    return (
        <div className="productscreen">
            {loading? (
                <h3 className="alert alert-info">Loading...</h3>
            ):error?(
                <h3 className="alert alert-danger">{error}</h3>
            ):(<><div className="container">
                    <div className="row">
                            <div className="col-sm-8  justify-content-center card p-2">
                                
                                    
                                    <img className="img-fluid" src={product.imageUrl}/>
                                    
                                    <div className="left__info">
                                        <p className="left__name">{product.name}</p>
                                        <p className="left__price">Price: {product.price}</p>
                                        <p className="left__description">{product.description}</p>
                                  
                                </div>
                            </div>
                            <div className="col-sm-4">
                                
                                    <div className="card justify-content-center  p-2">
                                    <p>
                                        Status  {product.countInStock>0? "In Stock":"Out of Stock"}
                                    </p>
                                    <p>
                                        Quantity
                                        <select value={qty} onChange={e=>setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x)=>
                                                <option value={x+1}>{x+1}</option>)
                                            }  
                                        </select>
                                    </p>
                                    
                                    <p>
                                        <button type="button" onClick={addToCartHandler}>Add to cart</button>
                                    </p>
                                    
                                

                                    </div>
                            
                            </div>
                    </div>
                </div>
            </>
            )}
        </div>    
    )
}

export default ProductScreen
