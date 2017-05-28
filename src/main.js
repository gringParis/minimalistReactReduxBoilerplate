import React from 'react'
import Dummy from './components/dummy.jsx'

export default class Main extends React.Component {
  render () {
    return (
      <div class='main row'>
        <header class='bs-docs-nav navbar navbar-static-top'>
          <h1>This is a minimalist react redux boilerplate</h1>
        </header>
        <div class='col-xs-12 col-md-12'>
          <Dummy dummy_action={this.props.dummy_action} />
        </div>
      </div>

    )
  }
}
