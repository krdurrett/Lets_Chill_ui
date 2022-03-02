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
        <h2>{this.state.action.action}</h2>
        <p>{this.state.action.description}</p>
        <img src={this.state.action.img} alt={`${this.state.action.action} gif`}/>
        <a href={this.state.action.link} target="_blank" rel="noopener noreferrer">Reference Link</a>
      </section>
    )
  }
}

export default ActionDetails