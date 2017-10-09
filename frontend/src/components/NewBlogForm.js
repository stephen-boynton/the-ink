import React, { Component } from "react";

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

	_handleSubmit () {
		const post = {
			title: this.ref.title,
			image: this.ref.image,
			body: this.ref.body,
			tags: this.ref.tags
		};
		this.props.submit(post);
	}

	render() {
		return (
			<form className="blogPost" onSubmit={this._}>
				<h2>New Blog Post</h2>
				<hr />
				<input type="text" ref="title" placeholder="Blog Title" />
				<input type="text" ref="image" placeholder="Main Image URL" />
				<textarea
					rows="8"
					ref="body"
					placeholder="Write down your thoughts.."
				/>
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
		);
	}
}
