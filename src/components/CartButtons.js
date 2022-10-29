import React from 'react';
import {Link} from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
    const { total_items, clearCart } = useCartContext()
    const {loginWithRedirect, myUser, logout} = useUserContext()
    return(
        <>
            <div className="container pt-2">
                <Link to='/cart' className='cart-btn'>Cart
                    <span className="cart-container">
                        <FaShoppingCart />
                        <span className="cart-value"><sup>{total_items}</sup></span>
                    </span>
                </Link>
                {myUser ? (
                    <button
                    type='button'
                    className='auth-btn'
                    onClick={() => {
                        clearCart()
                        localStorage.removeItem('user')
                        logout({ returnTo: window.location.origin })
                    }}
                    >
                    Logout <FaUserMinus />
                    </button>
                ) : (
                    <button type='button' className='auth-btn' onClick={loginWithRedirect}>
                        Login <FaUserPlus />
                    </button>
                )}
                
                
            </div>
        </>
    )
}

export default CartButtons