import React, { Component } from "react";
import axios from "axios";
import "../styles/BlogView.css";

export default class BlogView extends Component {
  state = {
    post: {}
  };
  _retrievePost() {
    axios.get("/users/user/" + this.props.match.params).then(post => {
      console.log(post);
    });
  }
  render() {
    return (
      <div className="BlogView">
        <h2>{this.state.post.title}</h2>
      </div>
    );
  }
}
