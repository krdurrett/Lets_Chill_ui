import React, {Component} from 'react'
import { getSpecificAction, getSpecificFeeling, postToLog } from '../apiCalls'
import '../styles/LogForm.css'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: '',
      helped: '',
      feeling: ''
    }
  }

   componentDidMount = () => {
    getSpecificAction(parseInt(this.props.actionId))
      .then(data => this.setState({ action: data.action, helped: ''}))
    getSpecificFeeling(parseInt(this.props.feelingId))
      .then(data => this.setState({ feeling: data.feeling, helped: ''}))
  }

  handleClick = event => {
    event.preventDefault()
    let value;
    if (event.target.value === 'yes') {
      value = true
    } else if (event.target.value === 'no') {
      value = false
    }
    this.setState({ helped: value })
  }

  addToLog = () => {
    let entry = {date: new Date(Date.now()).toLocaleString().split(',')[0], feeling: this.state.feeling, action: this.state.action, helped: this.state.helped}
    console.log(entry)
    postToLog(entry)
  }

  render() {
    return (
      <section className='log-form-container'>
        <p className='log-form-title'>Did this help?</p>
        <div className='helped-buttons'>
          <button className='helped-button' value='yes' onClick={event => this.handleClick(event)}>Yes</button>
          <button className='helped-button' value='no' onClick={event => this.handleClick(event)}>No</button>
        </div>
        {!(this.state.helped === '') && <button className='add-to-log-button' onClick={this.addToLog}>Add This To Your Log!</button>}
      </section>
    )
  }
}

export default LogForm