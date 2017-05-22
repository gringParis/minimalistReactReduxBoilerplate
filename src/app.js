
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Container from './container'
import store from './store'

export default class App extends React.Component {
  constructor (props)	{
    super(props)
  }

  render ()	{
    return (
      <div class='app-container container'><Container /></div>
    )
  }
}

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app-container'))
