import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({increase, decrease, amount}) => {
    return (
        <>
            <div className='amount-btns mb-4'>
                <button type='button' className='amount-btn' onClick={decrease}><FaMinus /></button>
                <h5>{amount}</h5>
                <button className='amount-btn' onClick={increase}><FaPlus /></button>
            </div>
        </>
    )
}

export default AmountButtons
