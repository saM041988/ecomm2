import React from 'react';
import {useCartContext} from '../context/cart_context';
import {Link} from 'react-router-dom';
import PageHero from '../components/PageHero';
import CartContent from '../components/CartContent';

const Cart = () => {
    const {cart} = useCartContext()
    if(cart.length < 1) {
        return (
            <>
            
                <div className='container my-5 page-100'>
                    <div className='cart-empty'>
                        <h3>Your Cart is Empty</h3>
                        <Link to ='/products'>Fill it</Link>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>  
        <div>
            <PageHero title='Cart' />
            <div className="container">
            <CartContent />
            </div>
            
        </div>
            
            
        </>
    )
}

export default Cart