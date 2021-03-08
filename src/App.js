import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Error from './components/Error'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
