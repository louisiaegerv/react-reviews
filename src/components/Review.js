import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

import reviews from '../data'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { image, name, job, text } = reviews[index]

  const nextReview = () => {
    setIndex((index) => {
      return checkIndex(index + 1)
    })
  }

  const prevReview = () => {
    setIndex((index) => {
      return checkIndex(index - 1)
    })
  }

  const checkIndex = (num) => {
    if (num > reviews.length - 1) {
      return 0
    }
    if (num < 0) {
      return reviews.length - 1
    }
    return num
  }

  const getRandom = () => {
    let randomNum = Math.floor(Math.random() * reviews.length)
    if (randomNum === index) {
      randomNum += 1
    }
    console.log(randomNum)
    setIndex(checkIndex(randomNum))
  }

  return (
    <>
      <section className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt='' />
          <div className='quote-icon'>
            <FaQuoteRight />
          </div>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className='random-btn' onClick={getRandom}>
            Suprise Me
          </button>
          <button className='next-btn' onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  )
}

export default Review
