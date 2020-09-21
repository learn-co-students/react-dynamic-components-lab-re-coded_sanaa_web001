import React, { Component } from 'react';
import Comment from './Comment'

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    return (
      <div className="color-box"  style={{opacity: this.props.opacity}}>
        {if (this.props.opacity>=0.2) {
      return(<ColorBox opacity={this.props.opacity-0.1} />

      }})
        else {
          return null
        }
      </div>
    )
  }

}
