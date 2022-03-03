import React, { Component } from 'react'
import '../styles/ChillLogContainer.css'
import { getLog } from '../apiCalls'
import Entry from './Entry'
import ErrorModal from './ErrorModal'

class ChillLogContainer extends Component {
  constructor() {
    super()
    this.state = {
      log: '', 
      error: ''
    }
  }

  componentDidMount = () => {
    getLog()
      .then(data => this.setState({ log: data.map(entry => {
        return <Entry 
                key={entry.id}
                id={entry.id}
                date={entry.date}
                feeling={entry.feeling}
                action={entry.action}
                helped={entry.helped}
            />
      })}))
      .catch(error => this.setState({ error: error.message}))
  }

  render() {
    const errorModal = this.state.error ? <ErrorModal message={this.state.error}/> : null
    return (
      <section className='chill-log-container'>
        {this.state.log}
        {errorModal}
      </section>
    )
  }
}

export default ChillLogContainer