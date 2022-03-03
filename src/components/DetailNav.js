import React, {Component} from 'react'
import ChillLogLink from './ChillLogLink'
import LogForm from './LogForm'
import '../styles/DetailNav.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DetailNav = ({ actionId, feelingId, resetSelectedFeeling }) => {
    return (
      <section className='detail-nav-bar'>
        <Link to='/' className='nav-title' onClick={resetSelectedFeeling}>Let's Chill</Link>
        <LogForm actionId={actionId} feelingId={feelingId}/>
        <ChillLogLink />
      </section>
    )
}

export default DetailNav 

DetailNav.propTypes = {
  actionId: PropTypes.string,
  feelingId: PropTypes.string,
  resetSelectedFeeling: PropTypes.func
}