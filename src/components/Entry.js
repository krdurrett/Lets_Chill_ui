import React from 'react'
import '../styles/Entry.css'

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