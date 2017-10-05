import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../views/HomeView";
import BlogView from "../views/BlogView";
import NewView from "../views/NewView";
import ProfileView from "../views/ProfileView";
import "../styles/App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}
	componentDidMount() {
		fetch("/posts")
			.then(res => res.json())
			.then(posts => this.setState({ posts: posts }));
	}
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/blog/:id" component={BlogView} />
					<Route exact path="/author" component={ProfileView} />
					<Route exact path="/newblog" component={NewView} />
					<Route exact path="/" component={HomeView} />
				</Switch>
			</div>
		);
	}
}

export default App;
