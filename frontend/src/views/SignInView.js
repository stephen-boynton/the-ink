import React, { Component } from "react";
import axios from "axios";
import SignInForm from "../components/SignInForm";
import MainNav from "../components/MainNav";
import "../styles/SignInView.css";

export default class SignInView extends Component {
  _handleLogIn = e => {
    e.preventDefault();
    e.persist();
    const login = {
      username: e.target[0].value,
      pass: e.target[1].value
    };
    console.log(login);
    axios.post("/users/signin", login).then(response => {
      window.localStorage.setItem("token", response.data.token);
      console.log(response.data);
      this.props.authenticate(response.data.user);
    });
  };
  render() {
    return (
      <div className="SignInView">
        <SignInForm submit={this._handleLogIn} />
      </div>
    );
  }
}
