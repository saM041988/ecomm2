import React from 'react';
import PageHero from '../components/PageHero'
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'

const Products = () => {
    return(
        <>  
            <PageHero title='Product' />
            <div className="container my-5">
                <div className='row'>
                    <div className='col-md-2'>
                        <Filter />
                    </div>
                    <div className='col-md-10'>
                        <div className='row'>
                            <Sort />
                        </div>
                        <div className='row'>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products