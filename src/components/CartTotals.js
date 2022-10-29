import React from 'react';
import { useCartContext } from '../context/cart_context'
import {formatPrice} from '../utils/helper'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const CartTotal = () => {

    const {total_amount, shipping_fee} = useCartContext();
    const {loginWithRedirect, myUser} = useUserContext()
    return(
        <>
            <div className='row cart-content-footer'>
                    <div className='col-md-12'>
                        <div className='row cart-content-subtotals'>
                            <h5>SubTotal : <span>{formatPrice(total_amount)}</span></h5>
                            <p>Shipping Fee: <span>{formatPrice(shipping_fee)}</span></p>
                            <hr />
                            <h4>Order Total : <span>{formatPrice(total_amount + shipping_fee)}</span></h4>
                        </div>
                        
                        
                    </div>
                    <div className='proceed-checkOut'>
                        {
                            myUser ? (
                                <Link to='/checkOut' className='btn-black'>Proceed to CheckOut</Link>
                            ) : (
                            <button type='button' className='btn btn-cart-login' onClick={loginWithRedirect}>
                                login Here
                            </button>
                            )
                        }
                        
                    </div>
                </div>
        </>
    )
}

export default CartTotal;