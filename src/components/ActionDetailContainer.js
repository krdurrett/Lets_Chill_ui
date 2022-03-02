import React from 'react'
import '../styles/ActionDetailContainer.css'
import ActionDetails from './ActionDetails'
import LogForm from './LogForm'

const ActionDetailContainer = ({ id }) => {
  return (
    <section className='action-detail-container'>
      <ActionDetails id={id} />
      <LogForm id={id} />
    </section>
    )
}

export default ActionDetailContainer