import React, {useContext, useEffect, useReducer} from 'react';
import axios from 'axios';
import reducer from '../reducer/products_reducer';
import {products_url as url} from '../utils/constants'

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESSS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCTS_BEGIN,
    GET_SINGLE_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCTS_ERROR
} from '../actions';

const initialState = {
    isSideBarOpen : false,
    products_loading : false,
    products_error : false,
    products : [],
    featured_products : [],
    single_product_loading : false,
    single_product_error : false,
    single_product : []
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const openSideBar = () => {
        dispatch({type : SIDEBAR_OPEN})
    }
    const closeSideBar = () => {
        dispatch({type : SIDEBAR_CLOSE})
    }

    const fetchProducts = async (url) => {
        dispatch({type : GET_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url)
            const products = response.data
            dispatch({type : GET_PRODUCTS_SUCCESSS, payload:products})
        } catch(error) {
            dispatch({type : GET_PRODUCTS_ERROR})
        }
    
    }

    const fetchSingleProduct = async(url) => {
        dispatch ({type : GET_SINGLE_PRODUCTS_BEGIN})
        try {
            const response = await axios.get(url) 
            const singleProduct = response.data
            dispatch({type : GET_SINGLE_PRODUCTS_SUCCESS, payload:singleProduct})
        } catch(error) {
            dispatch({type:GET_SINGLE_PRODUCTS_ERROR})
        }
    }

    useEffect (() => {
        fetchProducts(url);
    },[])

    return (
        <ProductsContext.Provider value={{...state, openSideBar, closeSideBar, fetchSingleProduct}}>{ children }</ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}


