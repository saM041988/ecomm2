import React from 'react';

const CartColumns = () => {
    return(
        <>
            <div className="container my-5">
            
                <div className='row'>
                    <ul className='cartColumn'>
                        <li className='cartColumn-item'>Item</li>
                        <li className='cartColumn-price'>Price</li>
                        <li className='cartColumn-qty' >Quantity</li>
                        <li className='cartColumn-total'>SubTotal</li>
                        <li className='cartColumn-action'>Action</li>
                    </ul>
                    
                </div>
                
            </div>
        </>
    )
}

export default CartColumns