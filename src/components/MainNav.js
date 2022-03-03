import React, {Component} from 'react'
import FeelingsForm from './FeelingsForm'
import ChillLogLink from './ChillLogLink'
import '../styles/MainNav.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainNav = ({ setSelectedFeeling, resetSelectedFeeling }) => {
    return (
      <section className='main-nav-bar'>
        <Link to='/' className='nav-title' onClick={resetSelectedFeeling}>Let's Chill</Link>
        <FeelingsForm setSelectedFeeling={setSelectedFeeling}/>
        <ChillLogLink />
      </section>
    )
}

export default MainNav 

MainNav.propTypes = {
  setSelectedFeeling: PropTypes.func,
  resetSelectedFeeling: PropTypes.func
}