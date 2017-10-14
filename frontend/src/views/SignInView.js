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
    axios.post("/users/login").then(response => console.log(response));
  };
  render() {
    return (
      <div className="SignInView">
        <MainNav />
        <SignInForm />
      </div>
    );
  }
}
