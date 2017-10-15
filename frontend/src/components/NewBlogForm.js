import React, { Component } from "react";
import Editor from "react-medium-editor";
import "../styles/NewBlogForm.css";
require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

export default class NewBlogForm extends Component {
  constructor() {
    super();
    this.state = {
      blog: {
        title: "",
        image: "",
        body: "",
        tags: []
      }
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    const post = {
      title: event.target[0].value,
      image: event.target[1].value,
      body: event.target[2].value,
      tags: event.target[3].value
    };
    console.log(post);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
    event.target[3].value = "";
    this.props.submit(post);
  };

  render() {
    return (
      <div className="NewBlogForm col-3-4">
        <form onSubmit={this._handleSubmit}>
          <h2>New Blog Post</h2>
          <hr />
          <input type="text" ref="title" placeholder="Blog Title" />
          <input type="text" ref="image" placeholder="Main Image URL" />
          <Editor />
          <input type="text" ref="tags" placeholder="select, tags, here..." />
          <div>
            <button type="submit">Submit</button>
            <button
              id="preview-button"
              onClick={this.props.preview}
              type="button"
            >
              Preview
            </button>
          </div>
        </form>
      </div>
    );
  }
}
