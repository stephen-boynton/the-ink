import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {connect} from "react-redux";
import HomeView from "../views/HomeView";
import BlogView from "../views/BlogView";
import NewView from "../views/NewView";
import ProfileView from "../views/ProfileView";
import "../styles/App.css";

class App extends Component {
	state = {
		posts: []
	}

	_getPosts = () => {
		fetch("/posts")
			.then(res => res.json())
			.then(posts => {
				this.setState({ posts: posts })
				})
	}

	componentDidMount() {
		this._getPosts();
	}

	render() {
		return (
			<BrowserRouter>
			<div className="app">
				<Switch>
					<Route exact path="/newblog" component={NewView} />
					<Route exact path="/" component={HomeView} />
				</Switch>
			</div>
			</BrowserRouter>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
   return {
      posts: state.posts
   }
}
// this.props = {
//    //whatever mapStateToProps returns
// }

export default connect(mapStateToProps)(App)

