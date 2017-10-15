import React, { Component } from "react";
import axios from "axios";
import BlogContent from "../components/BlogContent";
import BlogComment from "../components/BlogComment";
import "../styles/BlogView.css";

export default class BlogView extends Component {
  state = {
    post: {},
    comments: []
  };
  _retrievePost() {
    const { postId } = this.props.match.params;
    axios.get("/users/user/" + postId).then(post => {
      this.setState({
        post: post.data[0]
      });
    });
  }
  componentDidMount() {
    this._retrievePost();
  }
  render() {
    return (
      <div className="BlogView">
        <BlogContent post={this.state.post} />
        {this.state.comments.map(comment => {
          return <BlogComment comment={comment} />;
        })}
      </div>
    );
  }
}
