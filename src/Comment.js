const { Component } = require("react");
const React = require("react");
// import React, { Component } from "react";
//your code here

export default class Comment extends Component {
  render() {
    return <div className="comment">{this.props.commentText}</div>;
  }
}
