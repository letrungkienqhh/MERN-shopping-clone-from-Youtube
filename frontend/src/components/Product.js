import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
const Product = ({imageUrl,name,price,description,productId}) => {
    console.log(productId)
    return (
        <div className="product">
            <img src={imageUrl} alt="" />
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__description">
                    {description}
                </p>
                <p className="info__price">{`${price} $`}</p>
                <Link to={`/products/${productId}`} className="btn btn-primary">View</Link>
            </div>
        </div>
    
    )
 
}
export default Product
