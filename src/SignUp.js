import React, { Component } from "react";
import { Auth } from "aws-amplify";

export default class SignUp extends Component {

  handleSignUp = event => {
    event.preventDefault();
    const { username, email, password, geo, role, businessunit } = this.props.inputs;
    Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        geo,
        role,
        businessunit
        // other custom attributes
      },
      validationData: [] //optional
    })
      .then(data => console.log(data))
      .then(()=>this.props.switchComponent("Verify")) // switches Sign Up to Verification
      .catch(err => console.log(err))
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
          type="email"
          name="email"
          value={this.props.email}
          placeholder="Email"
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
          type="text"
          name="geo"
          value={this.props.geo}
          placeholder="Geo"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="text"
          name="role"
          value={this.props.phone_numbroleer}
          placeholder="Role"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="text"
          name="businessunit"
          value={this.props.businessunit}
          placeholder="Business Unit"
          onChange={this.props.handleFormInput}
          className="authentication__input"
        />
        <input
          type="submit"
          value="SIGN UP"
          onClick={this.handleSignUp}
          className="authentication__button"
        />
      </form>
    );
  }
}