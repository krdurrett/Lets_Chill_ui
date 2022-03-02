import React from 'react'
import '../styles/Action.css'
import { Link } from 'react-router-dom'

const Action = ({ id, name }) => {
  return (
    <Link to={`/${id}/action_detail`} id={id} className='action-card'>{name}</Link>
  )
}

export default Action 