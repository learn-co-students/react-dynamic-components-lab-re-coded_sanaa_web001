import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  render() {
    let opacityValue = this.props.opacity;
    let newOpacity = opacityValue - 0.1;
    return (
         opacityValue < 0.2 ? null : (
            <div className="color-box" style={{opacity: {opacityValue}}}>
              <ColorBox opacity = {newOpacity} />
            </div> 
           )
        
      )    
  }
}

