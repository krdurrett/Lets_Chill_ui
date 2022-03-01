import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import ChillLogLink from './ChillLogLink'
import '../styles/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      feelings: [],
      selectedFeeling: {}
    }
  }

  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/'>
            <Nav />
            <ChillLogLink />
          </Route>
        </Switch>
      </section>
    )
  }
}

export default App
