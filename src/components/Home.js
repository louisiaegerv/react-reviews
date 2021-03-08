import React from 'react'
import Review from './Review.js'

const Home = () => {
  return (
    <div className='container'>
      <section className='title'>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </section>
      <Review />
    </div>
  )
}
export default Home
