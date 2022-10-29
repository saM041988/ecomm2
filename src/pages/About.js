import React from 'react';
import PageHero from '../components/PageHero'

const About = () => {
    return(
        <>
            <PageHero title='About' />
            <div className = 'container my-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src='https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000' alt='img' className='w-100' />
                    </div>
                    <div className='col-md-7 my-5'>
                        <div className='about-page'>
                            <div className='inner-section'>
                                <h3 className='mb-3'>Our Story</h3>
                                
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium 
                                sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error 
                                accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse 
                                recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem 
                                molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente 
                                consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam 
                                velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                                </p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default About