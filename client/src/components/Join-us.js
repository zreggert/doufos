import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
// Importing a CSS file
import "../css/sign-up.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [addUser] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="sign-up">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <form onSubmit={this.handleSubmit}>
        <h3>Sign.Up</h3>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={this.formState.firstName}
            onChange={this.handleChange}
            // {e => this.firstName = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={this.formState.lastName}
            onChange={this.handleChange}
            // {e => this.lastName = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={this.formState.email}
            onChange={this.handleChange}
            // {e => this.email = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.formState.password}
            onChange={this.handleChange}
            // {e => this.password = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={this.formState.confirmPassword}
            onChange={this.handleChange}
            // {e => this.confirmPassword = e.target.value}
          />
        </div>

        <button className="btn btn-primary btn-block">Join Us</button>
      </form>
    </section>
  );
};

export default Signup;
