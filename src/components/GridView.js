import React from 'react';
import Product from './Product';

const GridView = ({products}) => {
    return(
        <>  
            
            <div className="container">
                <div className='row'>
                {products.map((product) => {
                    
                    return (
                        
                        <div className='col-md-4 mb-4'>
                            <Product key={product.id} {...product} />
                        </div>
                    )
                })}
                </div>
            </div>
        </> 
    )
}

export default GridView