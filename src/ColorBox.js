import React, { Component } from 'react';

export default class ColorBox extends Component {

  // state = {
  //   todos: [
      
  //   ]
  // }

  render() {
    return (
      <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
        {/* your conditional code here! */}
        this.props.value > 2 ? null : ( <div>
        <colorBox value={opacity} />  
      </div>
    )
  }

}

