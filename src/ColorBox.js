import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
        {/* your conditional code here! */}
        <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ?
          <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
      </div>
    )
  }

}

