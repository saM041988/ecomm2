import React from 'react';
import {Link} from 'react-router-dom';


const PageHero = ({title, product}) => {
    return(
        <>
            <div className='container-fluid bg-primary py-5'>
                <div className='container pagehero'>
                    <h4><Link to='/'>Home</Link>
                        {product && <Link to='/products'> / Products</Link>} / {title}</h4>
                </div>
                
            </div>
        </>
    );
}

export default PageHero