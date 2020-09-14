<<<<<<< HEAD
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
 return (this.props.opacity >= 0.2 ? 
  (<div className="color-box" style={{opacity: this.props.opacity}}> 
   <ColorBox opacity={this.props.opacity - 0.1}/></div>)
    :'gdf');

}
}
=======
import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
 return (this.props.opacity >= 0.2 ? 
  (<div className="color-box" style={{opacity: this.props.opacity}}> 
   <ColorBox opacity={this.props.opacity - 0.1}/></div>)
    :'gdf');

}
}
>>>>>>> f5f4041d01b23293c0cd037bd3ae12bafbde355d
