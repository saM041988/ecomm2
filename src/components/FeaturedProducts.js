import React from 'react';
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

    return (
      <>
        <div className='my-5'>
          <div className='title text-center'>
            <h2>featured products</h2>
            <div className='underline'></div>
          </div>
          <div className='row mt-5'>
            
            {featured.slice(0, 3).map((product) => {
              return (
                <div className='col-md-4'>
                  <Product key={product.id} {...product} />
                </div>
              )
              
            })}
            <Link to='/products' className='all-products-btn btn btn-danger'>
              all products
            </Link>
            
          </div>
          
        </div>
      </>
        
        
      
    )
  }
  
  
  export default FeaturedProducts