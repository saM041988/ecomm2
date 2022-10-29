import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import {useProductsContext} from './context/products_context'

const Sidebar = () => {
    const data = useProductsContext()
    console.log(data)

    const isOpen = true
    return(
        <>
            <div className="container">
                <aside className={`${isOpen ? 'sidebar show-sidebar' : 'show-sidebar'}`}>
                    <div className='sidebar-header'>
                        <img src='https://seeklogo.com/images/E/e-commerce-concept-logo-5146F23CC5-seeklogo.com.png' alt='img' />
                        <button className='close-btn' type='button'><FaWindowClose />
                        </button>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Sidebar