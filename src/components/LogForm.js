import React, {Component} from 'react'
import '../styles/LogForm.css'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: '',
      helped: true
    }
  }

  render() {
    return (
      <h2>This is the Log Form</h2>
    )
  }
}

export default LogForm