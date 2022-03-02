import React, { Component } from 'react'
import '../styles/ActionsContainer.css'
import Action from './Action'

const ActionsContainer = ({ selectedFeeling }) => {
  const actions = selectedFeeling.actions.map(action => {
    return <Action 
            key={action.id}
            id={action.id}
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