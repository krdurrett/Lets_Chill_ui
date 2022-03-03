import React from 'react'
import '../styles/Entry.css'
import PropTypes from 'prop-types'

const Entry = ({ id, date, action, feeling, helped}) => {
  return (
    <section className='entry'>
      <p>Date: {date}</p>
      <p>Feeling: {feeling}</p>
      <p>Action: {action}</p>
      <p>Did it help? {helped ? 'yes' : 'no'}</p>
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