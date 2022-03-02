import React, { Component } from 'react'
import '../styles/ChillLog.css'

class ChillLog extends Component {
  constructor() {
    super()
    this.state = {
      log: ''
    }
  }

  render(){
    return (
      <h2>This is the chill log</h2>
    )
  }
}

export default ChillLog