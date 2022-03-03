import React, { Component } from 'react'
import '../styles/FeelingsForm.css'
import PropTypes from 'prop-types'

class FeelingsForm extends Component {
  constructor(props) {
    super(props)
  }

  handleMouseEnter = event => {
   this.props.setSelectedFeeling(parseInt(event.target.value))
  }

  handleMouseLeave = () => {
    console.log('no longer on a button')
  }

  render() {
    return (
      <section className='feelings-form'>
        <p className='feelings-form-title'>How are you feeling?</p>
        <div className='feelings-form-buttons'>
          <button onMouseEnter={event => this.handleMouseEnter(event)} onMouseLeave={() => this.handleMouseLeave()} value='1'>I'M GONNA DIE!!</button>
          <button onMouseEnter={event => this.handleMouseEnter(event)} onMouseLeave={() => this.handleMouseLeave()} value='2'>ALERT</button>
          <button onMouseEnter={event => this.handleMouseEnter(event)} onMouseLeave={() => this.handleMouseLeave()} value='3'>Uncomfortable</button>
          <button onMouseEnter={event => this.handleMouseEnter(event)} onMouseLeave={() => this.handleMouseLeave()} value='4'>Something's off...</button>
          <button onMouseEnter={event => this.handleMouseEnter(event)} onMouseLeave={() => this.handleMouseLeave()} value='5'>Calm</button>
        </div>
      </section>
    )
  }
}

export default FeelingsForm

FeelingsForm.propTypes = {
  setSelectedFeeling: PropTypes.func
}