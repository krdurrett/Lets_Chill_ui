import React from 'react'
import '../styles/Entry.css'
import PropTypes from 'prop-types'

const Entry = ({ id, date, action, feeling, helped}) => {
  return (
    <section className='entry'>
      <p className='entry-details'>Date: {date}</p>
      <p className='entry-details'>Feeling: {feeling}</p>
      <p className='entry-details'>Action: {action}</p>
      <p className='entry-details'>Did it help? {helped ? 'yes' : 'no'}</p>
    </section>
  )
}

export default Entry

Entry.propTypes = {
  date: PropTypes.string,
  action: PropTypes.string,
  feeling: PropTypes.string,
  helped: PropTypes.bool
}