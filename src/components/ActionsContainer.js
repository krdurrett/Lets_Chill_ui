import React, { Component } from 'react'
import '../styles/ActionsContainer.css'
import Action from './Action'
import PropTypes from 'prop-types'

const ActionsContainer = ({ selectedFeeling }) => {
  const actions = selectedFeeling.actions.map(action => {
    return <Action 
            key={action.id}
            actionId={action.id}
            feelingId={selectedFeeling.id}
            name={action.action}
          />
  })

  return (
    <section className='actions-container'>
      {actions}
    </section>
  )
}

export default ActionsContainer

ActionsContainer.propTypes = {
  selectedFeeling: PropTypes.object
}