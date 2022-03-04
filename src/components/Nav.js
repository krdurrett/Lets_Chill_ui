import React, {Component} from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ resetSelectedFeeling }) => {
    return (
      <section className='log-nav-bar'>
        <Link to='/' className='log-nav-title' onClick={resetSelectedFeeling}>Let's Chill</Link>
      </section>
    )
}

export default Nav 

Nav.propTypes = {
  resetSelectedFeeling: PropTypes.func
}