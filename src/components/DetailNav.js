import React, {Component} from 'react'
import ChillLogLink from './ChillLogLink'
import LogForm from './LogForm'
import '../styles/DetailNav.css'
import { Link } from 'react-router-dom'

const DetailNav = ({ id }) => {
    return (
      <section className='detail-nav-bar'>
        <Link to='/' className='nav-title'>Let's Chill</Link>
        <LogForm id={id} />
        <ChillLogLink />
      </section>
    )
}

export default DetailNav 