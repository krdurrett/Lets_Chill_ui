import React from 'react'
import '../styles/Action.css'

const Action = ({ id, name }) => {
  return (
    <h2 id={id}>{name}</h2>
  )
}

export default Action 