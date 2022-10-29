import React, {useState} from 'react';

const ProductImages = ({images = [{url :''}]}) => {

    const [main, setMain] = useState(images[0]);

    return (
        <>
            <div className='singlePageImage'>
                <img src = {main.url} alt='main image' />
                <div className='row gallery'>
                    
                    {
                        images.map((image, index) => {
                        return (
                            <div className='col-md mt-3'>
                                <img src = {image.url} 
                                    key={index} 
                                    onClick={() => setMain(images[index])}
                                    className={`${image.url} ? 'active' : null`}
                                    alt='image'
                                />
                            </div>
                            
                        )
                    
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default ProductImages