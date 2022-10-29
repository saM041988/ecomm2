import React from 'react';
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Sort = () => {
    const {
        filtered_products: products,
        grid_view,
        setGridView,
        setListView,
        sort,
        updateSort,
      } = useFilterContext()

    return(
        <>  
            
            <div className="container my-5">
                <div className='row'>
                    <div className='col-md-6 setView'>
                    <button
                        type='button'
                        className={`${grid_view ? 'active' : null}`}
                        onClick={setGridView}
                    >
                    <BsFillGridFill />
                    </button>
                    <button
                        type='button'
                        className={`${!grid_view ? 'active' : null}`}
                        onClick={setListView}
                    >
                    <BsList />
                    </button>
                    <span>{products.length} products found</span>
                    </div>
                    <div className='col-md-6 text-right'>
                        <form className='sortForm'>
                            <label htmlFor='sort'>sort by</label>
                            <select
                            name='sort'
                            id='sort'
                            className='sort-input'
                            value={sort}
                            onChange={updateSort}
                            >
                            <option value='price-lowest'>price (lowest)</option>
                            <option value='price-highest'>price (highest)</option>
                            <option value='name-a'>name (a-z)</option>
                            <option value='name-z'>name (z-a)</option>
                            </select>
                        </form>
                    </div>
                </div>
                
                <hr />
                
            </div>
        </>
    )
}

export default Sort