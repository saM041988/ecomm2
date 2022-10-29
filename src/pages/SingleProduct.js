import React, {useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {useProductsContext} from '../context/products_context';
import { formatPrice } from '../utils/helper'
import PageHero from '../components/PageHero'
import { single_product_url as url } from '../utils/constants'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Stars from '../components/Stars'
import ProductImages from '../components/ProductImages'
import AddToCart from '../components/AddToCart'

const SingleProduct = () => {

    const params = useParams();
    console.log(params.id)
    const navigate = useNavigate();
    const {
        single_product_loading: loading,
        single_product_error: error,
        single_product: product,
        fetchSingleProduct
      } = useProductsContext()

      useEffect(() => {
        fetchSingleProduct(`${url}${params.id}`)
      }, [params.id])
      
      useEffect(() => {
        if (error) {
          setTimeout(() => {
            navigate('/error')
          }, 3000)
        }
      }, [error])

      if(loading) {
        return <Loading />
      }
      if(error) {
        return <Error />
      }
      console.log(product);

      const { name,price,description,stock,stars,reviews,id:sku,company,images, } = product

    return(
        <>  
            <div>
                <PageHero title={name} product />
            </div>
            <div className="container my-5">
                <Link to='/products' className='back-products btn btn-danger mb-5'>Back to Products</Link>
                <div className="row">
                    <div className="col-md-6">
                        <ProductImages images = {images} />
                    </div>
                    <div className="col-md-6 px-3">
                        <h5 className='single_product_name_section'>{name}</h5>
                        <p className='single_product_price_section'>{formatPrice(price)}</p>
                        <p className='single_product_star_section'><Stars stars={stars} reviews = {reviews} /> </p>
                        <p className='single_product_description_section'>{description}</p>
                        <p className='stock'><span>Available</span> : {stock>0 ? 'Instock' : 'Out of Stock'}</p>
                        <p className='sku'><span>SKU</span> : {sku}</p>
                        <p className='brand'><span>Brand</span> : {company}</p>
                        <hr />
                        {stock > 0 && <AddToCart product={product} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct