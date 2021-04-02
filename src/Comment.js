import React, { Component } from 'react'
import './index.css'

export default class Comment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="comment">
                <p>{this.props.commentText}</p>
            </div>
        )
    }
}
