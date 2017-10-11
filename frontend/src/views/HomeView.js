import React, { Component } from "react";
import SideNav from "../components/SideNav";
import LatestBlog from "../components/LatestBlog";
import FeaturedBlog from "../components/FeaturedBlog";
import FeaturedComments from "../components/FeaturedComments";
import SmallBlog from "../components/SmallBlog";
import "../styles/HomeView.css";

export default class MainView extends Component {
	constructor() {
		super();
		this.state = {
			latest: [],
			featured: [],
			featuredCom: [],
			smallBlogs: [1, 2, 3, 4]
		};
	}
	render() {
		return (
			<div className="main-view container">
				<SideNav />
				<LatestBlog />
				<FeaturedBlog />
				<FeaturedComments />
				{this.state.smallBlogs.map((blog, ind) => {
					return <SmallBlog content={blog} key={ind} />;
				})}
			</div>
		);
	}
}
