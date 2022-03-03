import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNav from './MainNav'
import DetailNav from './DetailNav'
import Nav from './Nav'
import ChillLogContainer from './ChillLogContainer'
import ActionDetailContainer from './ActionDetailContainer'
import ActionsContainer from './ActionsContainer'
import Error404 from './Error404'
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

  resetSelectedFeeling = () => {
    this.setState({ selectedFeeling: ''})
  }

  render() {
    return (
      <section className='App'>
        <Switch>
          <Route exact path='/'>
            <MainNav setSelectedFeeling={this.setSelectedFeeling} resetSelectedFeeling={this.resetSelectedFeeling}/>
            {this.state.selectedFeeling ? <ActionsContainer selectedFeeling={this.state.selectedFeeling}/> : null}
          </Route>
          <Route exact path='/:feelingId/:actionId/action_detail' render={({ match }) => {
            return [<DetailNav key={match.params.actionId + 'detail_nav'} actionId={match.params.actionId} feelingId={match.params.feelingId} resetSelectedFeeling={this.resetSelectedFeeling} />, <ActionDetailContainer id={match.params.actionId} key={match.params.actionId + 'action_detail'}/>]
          }} />
          <Route exact path='/chill_log' render={() => {
            return [<Nav key='nav' resetSelectedFeeling={this.resetSelectedFeeling} />, <ChillLogContainer key='chill_log' />]
          }}/>
          <Route>
            <Nav />
            <Error404 />
          </Route>
        </Switch>
      </section>
    )
  }
}

export default App
