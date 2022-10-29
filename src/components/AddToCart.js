import React, {useState} from 'react';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons'
import {Link} from 'react-router-dom'
import {useCartContext} from '../context/cart_context'

const AddToCart = ({product}) => {

    const{addToCart} = useCartContext()

    const {id, colors, stock} = product;

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    
    const increase = () => {
        setAmount((oldAmount)=>{
            let tempAmount = oldAmount + 1;
            if(tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setAmount((oldAmount)=>{
            let tempAmount = oldAmount - 1;
            if(tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    return (
        <>  
        <div className='colors'>
            <span className='colorsI'>Colors : </span>
            <div>
                {colors.map((color, index) => {
                    return (
                        <>
                        <button key={index}
                        style= {{background : color}}
                        onClick = {() => setMainColor(color)}
                        className = {`${mainColor === color ? 'color-btn active' : 'color-btn'}`}>
                            {mainColor === color ? <FaCheck /> : null}
                        </button>
                        <h1>jhghj</h1>
                        </>
                    )
                })}
            </div>
            
        </div>
        <div className="amount-btn-container mt-4">
            <AmountButtons increase={increase} decrease={decrease} amount={amount} />
            <Link to='/cart' className='btn btn-dark'
            onClick={()=> addToCart(id, mainColor, amount,product)}
            >Add to Cart</Link>
        </div>
        </>
    )
}

export default AddToCart