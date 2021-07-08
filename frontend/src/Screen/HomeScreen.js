import React from 'react'
import './HomeScreen.css'
import Product from '../components/Product'
import  {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import {getProducts } from '../redux/actions/productAction'

const HomeScreen=() =>{
    const dispatch = useDispatch();
    const getSanpham=useSelector(state=>state.getProducts)
    
    const {products,loading,error}=getSanpham
   
    useEffect(() => {
        dispatch(getProducts())
        
    }, [dispatch])
    return (
        <div className="container">
            <h2 className="alert alert-primary">Welcome to Kien Le Trung' Shop</h2>
            <div className="homescreen__products">
                {loading ? 
                    <h3 className="alert alert-info">Loading...</h3>: 
                        error ? <h3 className="alert alert-danger"></h3>:
                        products.map((x)=>  <Product
                                                key={x._id}
                                                productId={x._id}
                                                price={x.price}
                                                description={x.description}
                                                imageUrl={x.imageUrl}

                                            ></Product>)

                }

            </div>
        </div>
    )
}
export default HomeScreen
