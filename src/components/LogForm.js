import React, {Component} from 'react'
import { getSpecificAction } from '../apiCalls'
import '../styles/LogForm.css'

class LogForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: '',
      helped: true
    }
  }

   componentDidMount = () => {
    getSpecificAction(parseInt(this.props.id))
      .then(data => this.setState({ action: data}))
  }

  render() {
    return (
      <section className='log-form-container'>
        <p className='log-form-title'>Did this help?</p>
        <div className='helped-buttons'>
          <button className='helped-button'>Yes</button>
          <button className='helped-button'>No</button>
        </div>
        <button className='add-to-log-button'>Add This To Your Log!</button>
      </section>
    )
  }
}

export default LogForm