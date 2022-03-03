import React from 'react'
import '../styles/ActionDetailContainer.css'
import ActionDetails from './ActionDetails'
import PropTypes from 'prop-types'

const ActionDetailContainer = ({ id }) => {
  return (
    <section className='action-detail-container'>
      <ActionDetails id={id} />
    </section>
    )
}

export default ActionDetailContainer

ActionDetailContainer.propTypes = {
  id: PropTypes.string
}