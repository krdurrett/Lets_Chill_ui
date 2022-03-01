import React, {Component} from 'react'
import FeelingsForm from './FeelingsForm'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      feelings: []
    }
  }

  render() {
    return (
      <section className='nav-bar'>
        <Link to='/' className='nav-title'>Let's Chill</Link>
        <FeelingsForm />
      </section>
    )
  }
}

export default Nav 