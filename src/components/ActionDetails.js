import React, { Component } from 'react'
import { getSpecificAction, getSpecificFeeling } from '../apiCalls'
import '../styles/ActionDetails.css'

class ActionDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      action: ''
    }
  }

  componentDidMount = () => {
    getSpecificAction(parseInt(this.props.id))
      .then(data => this.setState({ action: data}))
  }

  render() {
    return (
      <section className='action-detail-card'>
        <h2 className='action-detail-title'>{this.state.action.action}</h2>
        <p className='action-detail-description'>{this.state.action.description}</p>
        <section className='image-and-link'>
          <img className='action-image' src={this.state.action.img} alt={`${this.state.action.action} gif`}/>
          <a className='action-link' href={this.state.action.reference} target="_blank" rel="noopener noreferrer">Reference Link</a>
        </section>
      </section>
    )
  }
}

export default ActionDetails