import React, { useState, useEffect } from 'react'
import data from './data'
import Review from './Review.js'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [reviews, setReviews] = useState(data)
  const [index, setIndex] = useState(0)

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
    <main>
      <div className='container'>
        <section className='title'>
          <h2>Our Reviews</h2>
          <div className='underline'></div>
        </section>
        <section className='review'>
          <div className='img-container'>
            <img className='person-img' src={reviews[index].image} alt='' />
            <div className='quote-icon'>
              <FaQuoteRight />
            </div>
          </div>
          <h4 className='author'>{reviews[index].name}</h4>
          <p className='job'>{reviews[index].job}</p>
          <p className='info'>{reviews[index].text}</p>
          <div className='btn-container'>
            <FaChevronLeft className='prev-btn' onClick={prevReview} />
            <FaChevronRight className='next-btn' onClick={nextReview} />
          </div>
          <button className='random-btn' onClick={getRandom}>
            Suprise Me
          </button>
        </section>
      </div>
    </main>
  )
}

export default App
