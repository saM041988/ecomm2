import React from 'react';
import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {formatPrice} from '../utils/helper'


const Product = ({image, name, price, id}) => {
  return (
    <>
        <div className = 'container product-container'>
            <img src={image} alt='product' className='product-grid-image'/>
            <Link to={`/products/${id}`} className='product-link'>
            <FaSearch />
            </Link>
            <div className="row mt-3">
              <div className="col-md-6"><Link to={`/singleproduct/${id}`}><h5>{name}</h5></Link></div>
              <div className="col-md-6 product-price"><p>{formatPrice(price)}</p></div>
            </div>
        </div>
    </>
    
  )
}

export default Product