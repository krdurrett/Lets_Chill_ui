import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import '../styles/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      feelings: []
    }
  }

  render() {
    return (
      <h1>This is the main page</h1>
    )
  }
}

export default App
