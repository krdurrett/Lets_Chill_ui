import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNav from './MainNav'
import DetailNav from './DetailNav'
import ActionDetailContainer from './ActionDetailContainer'
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
            <MainNav setSelectedFeeling={this.setSelectedFeeling}/>
            {this.state.selectedFeeling ? <ActionsContainer selectedFeeling={this.state.selectedFeeling}/> : null}
          </Route>
          <Route exact path='/:id/action_detail' render={({ match }) => {
            return [<DetailNav key={match.params.id + 'detail_nav'} id={match.params.id}/>, <ActionDetailContainer id={match.params.id} key={match.params.id + 'action_detail'}/>]
          }} />
        </Switch>
      </section>
    )
  }
}

export default App
