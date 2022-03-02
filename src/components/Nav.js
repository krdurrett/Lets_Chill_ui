import React, {Component} from 'react'
import FeelingsForm from './FeelingsForm'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

const Nav = ({ setSelectedFeeling }) => {
    return (
      <section className='nav-bar'>
        <Link to='/' className='nav-title'>Let's Chill</Link>
        <FeelingsForm setSelectedFeeling={setSelectedFeeling}/>
      </section>
    )
}

export default Nav 