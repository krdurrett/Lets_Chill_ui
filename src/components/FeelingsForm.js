import React, { Component } from 'react'
import '../styles/FeelingsForm.css'

class FeelingsForm extends Component {
  constructor() {
    super()
    this.state = {
      feeling: ''
    }
  }

  render() {
    return (
      <section className='feelings-form'>
        <p className='feelings-form-title'>How are you feeling?</p>
        <div className='feelings-form-buttons'>
          <button>I'M GONNA DIE!!</button>
          <button>ALERT</button>
          <button>Uncomfortable</button>
          <button>Something's off...</button>
          <button>Calm</button>
        </div>
      </section>
    )
  }
}

export default FeelingsForm