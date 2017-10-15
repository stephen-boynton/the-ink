import React, { Component } from "react";
import axios from "axios";
import MainNav from "../components/MainNav";
import NewBlogForm from "../components/NewBlogForm";
import BlogDisplay from "../components/BlogDisplay";
import "../styles/NewView.css";

export default class NewView extends Component {
  constructor() {
    super();
    this.state = {
      post: {}
    };
  }
  _handleSubmission = post => {
    axios.post("/newpost", post).then(console.log);
  };

  _handlePreview = post => {
    this.setState = {
      post: {
        title: post.title,
        image: post.image,
        body: post.body,
        tags: post.tags
      }
    };
  };

  render() {
    return (
      <div className="NewView col-4-4">
        <NewBlogForm
          preview={this._handlePreview}
          submit={this._handleSubmission}
        />
        <BlogDisplay post={this.state.post} />
      </div>
    );
  }
}
