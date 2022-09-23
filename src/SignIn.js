import React, { Component } from "react";
import { Auth } from "aws-amplify";

export default class SignIn extends Component {
  handleSignIn = event => {
    event.preventDefault();
    const { username, password } = this.props.inputs;
    // You can pass an object which has the username, password and validationData which is sent to a PreAuthentication Lambda trigger
    Auth.signIn({ username, password })
      .then(user => console.log(user))
      .then(() => this.props.switchComponent("Welcome"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="authentication__form">
        <input
          type="text"
          name="username"
          value={this.props.username}
          placeholder="Username"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="password"
          name="password"
          value={this.props.password}
          placeholder="Password"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="submit"
          value="SIGN IN"
          onClick={this.handleSignIn}
          className="authentication__button"
        />
      </form>
    );
  }
}