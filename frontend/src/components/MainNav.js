import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/MainNav.css";

export default class MainNav extends Component {
  _isLoggedIn = () => {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to="/">Profile</Link>
          <Link to="/newblog">New Post</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="MainNav col-4-4">
        <h1>THE INK</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Archive</Link>
          <Link to="/">Featured</Link>
        </nav>
        {this._isLoggedIn()}
      </div>
    );
  }
}
