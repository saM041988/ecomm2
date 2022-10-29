import React from 'react';
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'


const ListView = ({products}) => {

    
    return(
        <>  
            <div className="container">
                {products.map((product)=>{
                    const {id, image, name, description, price} = product
                    return (
                        <div className='row mb-4' key={id}>
                            <div className='col-md-3 product-list-image'>
                                <img src={image} alt={name} className='w-100' />
                            </div>
                            <div className='col-md-9 product-list-view'>
                                <ul>
                                    <li className='list-title'>{name}</li>
                                    <li className='list-price'>{formatPrice(price)}</li>
                                    <li className='list-desc'>{description.substring(0, 150)}...</li>
                                    <li className='list-btnview'>
                                    <Link to={`/singleproduct/${id}`} className='btn btn-black'>
                                        See Details
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListView