import React, { Component } from "react";
import MainNav from "../components/MainNav";
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
      smallBlogs: [1, 2, 3, 4],
      featuredComments: [1, 2, 3]
    };
  }
  render() {
    return (
      <div className="HomeView container">
        <FeaturedBlog image="http://uvmbored.com/wp-content/uploads/2015/05/blog.jpg" />
        <div className="row">
          <LatestBlog />
          <FeaturedComments comments={this.state.featuredComments} />
        </div>
        <div className="row">
          {this.state.smallBlogs.map((blog, ind) => {
            return <SmallBlog content={blog} key={ind} />;
          })}
        </div>
      </div>
    );
  }
}
