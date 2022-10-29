import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({stars, reviews}) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
          <span className='starsSpan' key={index}>
            {stars >= index + 1 ? (
              <BsStarFill />
            ) : stars >= number ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        )
      })

    return (
        <>
            <div className='stars'>{tempStars}</div>
            <p className='reviews'>({reviews} customer reviews)</p>
        </>
    )
}

export default Stars