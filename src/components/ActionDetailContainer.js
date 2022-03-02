import React from 'react'
import '../styles/ActionDetailContainer.css'
import ActionDetails from './ActionDetails'

const ActionDetailContainer = ({ id }) => {
  return (
    <section className='action-detail-container'>
      <ActionDetails id={id} />
    </section>
    )
}

export default ActionDetailContainer