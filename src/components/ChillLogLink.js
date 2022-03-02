import React from 'react'
import '../styles/ChillLogLink.css'
import { Link } from 'react-router-dom'

const ChillLogLink = () => {
  return (
    <section className='chill-log-link'>
      <Link to='/chillLog' className='chill-log-title'>Chill Log</Link>
    </section>
  )
}

export default ChillLogLink 