import React, {Component} from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
      <section className='nav-bar'>
        <Link to='/' className='nav-title'>Let's Chill</Link>
      </section>
    )
}

export default Nav 