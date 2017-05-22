
import React from 'react'

export default class Dummy extends React.Component {
  constructor (props)	{
    super(props)
  }

  render ()	{
    return (
      <button class='btn btn-default' onClick={(e) => { this.props.dummy_action('param') }}>Click Me</button>
    )
  }
}
