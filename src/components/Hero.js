import React from 'react';
import {Link} from 'react-router-dom'

const Hero = () => {
    return(
        <>
            <div className="container my-5">
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='hero-section py-5'>
                            <h2>
                            Design Your Comfort Zone
                            </h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, 
                                aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                            <Link to='/products' className='btn hero-btn'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='col-md-6'>
                    <img src='https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000' alt='img' className='w-100' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero