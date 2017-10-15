import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/BlogContent.css";

export default class BlogContent extends Component {
  _leaveComment = () => {};
  render() {
    return (
      <div className="BlogContent col-3-4">
        <h2>{this.props.post.title}</h2>
        <img src={this.props.post.image} />
        <p>{this.props.post.body}</p>
        <Link to="/blog/comments/new">Add comment...</Link>
      </div>
    );
  }
}
