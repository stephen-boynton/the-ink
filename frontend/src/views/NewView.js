import React, { Component } from "react";
import SideNav from "../components/SideNav";
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
		this.setState = {
			post: {
				title: post.title,
				image: post.image,
				body: post.body,
				tags: post.tags
			}
		};
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
			<div className="container">
				<SideNav />
				<NewBlogForm
					preview={this._handlePreview}
					submit={this._handleSubmission}
				/>
				<BlogDisplay post={this.state.post} />
			</div>
		);
	}
}
