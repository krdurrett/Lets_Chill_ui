import React, {Component} from 'react'
import ChillLogLink from './ChillLogLink'
import '../styles/DetailNav.css'
import { Link } from 'react-router-dom'

const DetailNav = () => {
    return (
      <section className='detail-nav-bar'>
        <Link to='/' className='nav-title'>Let's Chill</Link>
        <ChillLogLink />
      </section>
    )
}

export default DetailNav 