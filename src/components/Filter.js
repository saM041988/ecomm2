import React from 'react';
import {useFilterContext} from '../context/filter_context';
import { getUniqueValues, formatPrice } from '../utils/helper';
import { FaCheck } from 'react-icons/fa'

const Filter = () => {

    const {
        filters: {
            text,
            company,
            category,
            color,
            min_price,
            max_price,
            price,
            shipping
        },
        updateFilters, clearFilters, all_products

    } = useFilterContext();

    const categories = getUniqueValues(all_products, 'category')
    const companies = getUniqueValues(all_products, 'company')
    const colors = getUniqueValues(all_products, 'colors')

    return(
        <>  
            
            <div className="container my-5 filter-section">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='row'>
                        <input type='text' className='form-control search-input' 
                        name='text' placeholder='Search' 
                        value={text} onChange={updateFilters} />
                    </div>
                    <div className='row mt-3'>
                        <h5>Categories</h5>
                        <div className='row categories-new-sec'>
                        {categories.map((c, index) => {
                            return (
                            <button
                                key={index}
                                onClick={updateFilters}
                                type='button'
                                name='category'
                                className={`${
                                category === c.toLowerCase() ? 'active' : null
                                }`}
                            >
                                {c}
                            </button>
                            )
                        })}
                        </div>
                        
                    </div>
                    <div className='row mt-3 filter-company'>
                        <h5>Company</h5>
                        <select
                        name='company'
                        value={company}
                        onChange={updateFilters}
                        className='company'
                        >
                        {companies.map((c, index) => {
                            return (
                            <option key={index} value={c}>
                                {c}
                            </option>
                            )
                        })}
                        </select>
                    </div>
                    <div className='row mt-3'>
                        <h5>colors</h5>
                        <div className='colors colors-new-inner'>
                            {colors.map((c, index) => {
                                if (c === 'all') {
                                return (
                                    <button
                                    key={index}
                                    name='color'
                                    onClick={updateFilters}
                                    data-color='all'
                                    className={`${
                                        color === 'all' ? 'all-btn active' : 'all-btn'
                                    }`}
                                    >
                                    all
                                    </button>
                                )
                                }
                                return (
                                <button
                                    key={index}
                                    name='color'
                                    style={{ background: c }}
                                    className={`${
                                    color === c ? 'color-btn active' : 'color-btn'
                                    }`}
                                    data-color={c}
                                    onClick={updateFilters}
                                >
                                    {color === c ? <FaCheck /> : null}
                                </button>
                                )
                            })}
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <h5>price</h5>
                        <p className='price'>{formatPrice(price)}</p>
                        <input
                            type='range'
                            name='price'
                            min={min_price}
                            max={max_price}
                            onChange={updateFilters}
                            value={price}
                        />
                    </div>
                    <div className='row mt-3 shipping-product'>
                        <div className='col-md-9'><label htmlFor='shipping'> free shipping</label></div>
                        <div className='col-md-3'>
                            <input
                                type='checkbox'
                                name='shipping'
                                id='shipping'
                                onChange={updateFilters}
                                checked={shipping}
                            />
                        </div>
                        
                        
                    </div>
                    <div className='row btn-filter mt-3'>
                        <button type='button' className='clear-btn btn' onClick={clearFilters}>Clear Filters</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Filter