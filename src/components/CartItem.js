import React from 'react';
import { useCartContext } from '../context/cart_context'
import {formatPrice} from '../utils/helper'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({id, image, name, color, price, amount}) => {

    const {removeItem, toggleAmount} = useCartContext();

    const increase = () => {
        toggleAmount(id, 'inc')
    }

    const decrease = () => {
        toggleAmount(id, 'dec')
    }

    return(
        <>
            <div className='row'>
                <ul className='cartColumn cartColumnInner'>
                    <li className='cartColumn-item cartColumn-item-inner'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <img src={image} alt={name} className='w-100' />
                            </div>
                            <div className='col-md-9'>
                                <h5>{name}</h5>
                                <p>Color : <span style={{ background: color }}></span></p>
                            </div>
                        </div>
                        
                    </li>
                    <li className='cartColumn-price cartColumn-price-inner'>{formatPrice(price)}</li>
                    <li className='cartColumn-qty cartColumn-qty-inner' >
                        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
                    </li>
                    <li className='cartColumn-total cartColumn-total-inner'>{formatPrice(price * amount)}</li>
                    <li className='cartColumn-action cartColumn-action-inner'>
                        <button type='button' className='remove-btn'onClick={() => removeItem(id)}>
                            <FaTrash />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CartItem;