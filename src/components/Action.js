import React from 'react'
import '../styles/Action.css'
import { Link } from 'react-router-dom'

const Action = ({ actionId, feelingId, name }) => {
  return (
    <Link to={`/${feelingId}/${actionId}/action_detail`} className='action-card'>{name}</Link>
  )
}

export default Action 