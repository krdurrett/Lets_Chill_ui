import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import ChillLogLink from './ChillLogLink'
import ActionsContainer from './ActionsContainer'
import { getSpecificFeeling } from '../apiCalls'
import '../styles/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      feelings: [],
      selectedFeeling: ''
    }
  }

  setSelectedFeeling = id => {
    getSpecificFeeling(id)
      .then(data => this.setState({ selectedFeeling: data}))
  }

  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/'>
            <Nav setSelectedFeeling={this.setSelectedFeeling}/>
            {this.state.selectedFeeling ? <ActionsContainer selectedFeeling={this.state.selectedFeeling}/> : null}
          </Route>
        </Switch>
      </section>
    )
  }
}

export default App
