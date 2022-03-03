import React, {Component} from 'react'
import { getSpecificAction, getSpecificFeeling, postToLog } from '../apiCalls'
import '../styles/LogForm.css'
import ErrorModal from './ErrorModal'
import PropTypes from 'prop-types'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: '',
      helped: '',
      feeling: '',
      error: ''
    }
  }

   componentDidMount = () => {
    getSpecificAction(parseInt(this.props.actionId))
      .then(data => this.setState({ action: data.action, helped: ''}))
      .catch(error => this.setState({ error: error.message }))
    getSpecificFeeling(parseInt(this.props.feelingId))
      .then(data => this.setState({ feeling: data.feeling, helped: ''}))
      .catch(error => this.setState({ error: error.message }))
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
    postToLog(entry)
      .then(() => this.setState({ helped: ''}))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
      <section className='log-form-container'>
        <p className='log-form-title'>Did this help?</p>
        <div className='helped-buttons'>
          <button className='helped-button' value='yes' onClick={event => this.handleClick(event)}>Yes</button>
          <button className='helped-button' value='no' onClick={event => this.handleClick(event)}>No</button>
        </div>
        {!(this.state.helped === '') && <button className='add-to-log-button' onClick={this.addToLog}>Add This To Your Log!</button>}
        {errorModal}
      </section>
    )
  }
}

export default LogForm

LogForm.propTypes = {
  actionId: PropTypes.string,
  feelingId: PropTypes.string
}