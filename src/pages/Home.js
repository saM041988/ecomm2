import React from 'react';
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Service from '../components/Service'
import StayUpdated from '../components/StayUpdated';


const Home = () => {
    return(
        <>
            <div className="container">
                
                <Hero />
                <FeaturedProducts />

                <Service />
                <StayUpdated />
                
            </div>
            
        </>
    )
}

export default Home