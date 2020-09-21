import React, { Component } from 'react'
import Comment from './Comment.js'


export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}//your code here
