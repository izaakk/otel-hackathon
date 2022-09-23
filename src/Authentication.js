import React, { PureComponent } from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Verify from "./Verify";
import Dashboard from "./Dashboard";

import { Auth } from "aws-amplify";

export default class Authentication extends PureComponent {
  state = {
    username: "",
    email: "",
    password: "",
    geo: "",
    role: "",
    businessunit: "",
    code: "",
    user: null, // will contain our user data object when signed in
    status: "SignUp"
  };

  componentDidMount() {
    Auth.currentAuthenticatedUser({
      bypassCache: true // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(data => {
        let user = {username:data.username,...data.attributes}
        if(user.email_verified) this.setState({user, status:"Welcome"})
      })
      .catch(err => console.log(err));
  }

  // Handle changes to form inputs on sign-up, verification and sign-in
  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  AuthComponent = () => {
    switch (this.state.status) {
      case "SignUp":
        return (
          <SignUp
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
        
      case "Verify":
        return (
          <Verify
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
        
      case "SignIn":
        return (
          <SignIn
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
        
      case "Welcome":
        return <Dashboard />;
      default:
        return (
          <SignUp
            switchComponent={this.switchComponent}
            handleFormInput={this.handleFormInput}
            inputs={this.state}
          />
        );
    }
  };
  switchComponent = status => {
    this.setState({ status });
  };
  render() {
    console.log(this.state)
    return <div>{this.AuthComponent()}</div>;
  }
}