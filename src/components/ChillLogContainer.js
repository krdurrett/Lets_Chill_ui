import React, { Component } from 'react'
import '../styles/ChillLogContainer.css'
import { getLog } from '../apiCalls'
import Entry from './Entry'
import Loading from './Loading'
import ErrorModal from './ErrorModal'
import { cleanLogData } from '../utils'

class ChillLogContainer extends Component {
  constructor() {
    super()
    this.state = {
      log: '', 
      error: '', 
      isLoading: true
    }
  }

  componentDidMount = () => {
    getLog()
      .then(data => {
        const sortedEntries = cleanLogData(data)
        this.setState({ log: sortedEntries.map(entry => {
          return <Entry 
                  key={entry.id}
                  id={entry.id}
                  date={entry.date}
                  feeling={entry.feeling}
                  action={entry.action}
                  helped={entry.helped}
              />
      }), isLoading: false })})
      .catch(error => this.setState({ error: error.message, isLoading: false}))
  }

  determineRender = () => {
    if (this.state.error) {
      return <ErrorModal message={this.state.error}/>
    } else if (this.state.isLoading) {
      return <Loading />
    } else {
      return <section className='chill-log-container'>
                {this.state.log}
              </section>
    }
  }

  render() {
    return (
      this.determineRender()
    )
  }
}

export default ChillLogContainer