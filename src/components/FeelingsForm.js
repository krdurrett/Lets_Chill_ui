import React, { Component } from 'react'
import '../styles/FeelingsForm.css'
import PropTypes from 'prop-types'

class FeelingsForm extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = event => {
   this.props.setSelectedFeeling(parseInt(event.target.value))
  }

  render() {
    return (
      <section className='feelings-form'>
        <p className='feelings-form-title'>How are you feeling?</p>
        <div className='feelings-form-buttons'>
          <button className='feeling-button' onClick={event => this.handleClick(event)} value='1'>I'M GONNA DIE!!</button>
          <button className='feeling-button' onClick={event => this.handleClick(event)} value='2'>ALERT</button>
          <button className='feeling-button' onClick={event => this.handleClick(event)} value='3'>Uncomfortable</button>
          <button className='feeling-button' onClick={event => this.handleClick(event)} value='4'>Something's off...</button>
          <button className='feeling-button' onClick={event => this.handleClick(event)} value='5'>Calm</button>
        </div>
      </section>
    )
  }
}

export default FeelingsForm

FeelingsForm.propTypes = {
  setSelectedFeeling: PropTypes.func
}