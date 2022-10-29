import React from 'react';
import CartColumns from '../components/CartColumns'
import CartItem from '../components/CartItem'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartTotals from './CartTotals'

const CartContent = () => {
    const {cart, clearCart} = useCartContext()
    return(
        <>
            <div className="container my-5">
                <CartColumns />
                {cart.map((item) => {
                    return (
                        <CartItem key={item.id} {...item} />
                    )
                }
                )}
                <hr />
                <div className='row cart-content-middle'>
                    <div className="col-md-6 continue-shipping">
                        <Link to='/products' className='btn-black'>
                            Continue Shipping
                        </Link>
                    </div>
                    <div className="col-md-6 clear-cart">
                        <button type='button' onClick={clearCart} className='btn-black'>
                            Clear Shopping Cart
                        </button>
                    </div>
                </div>

                <div className='row cartContent-cartTotal mt-5'>
                    <CartTotals />
                </div>
                
            </div>
        </>
    )
}

export default CartContent