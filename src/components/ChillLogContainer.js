import React, { Component } from 'react'
import '../styles/ChillLogContainer.css'
import { getLog } from '../apiCalls'
import Entry from './Entry'

class ChillLogContainer extends Component {
  constructor() {
    super()
    this.state = {
      log: ''
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
  }

  render() {
    return (
      this.state.log
    )
  }
}

export default ChillLogContainer