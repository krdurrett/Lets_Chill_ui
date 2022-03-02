import React, { Component } from 'react'
import '../styles/ActionDetails.css'

class ActionDetails extends Component {
  constructor(props) {
    super()
    this.state = {
      action: ''
    }
  }

  render() {
    return (
      <h2>These are action details</h2>
    )
  }
}

export default ActionDetails