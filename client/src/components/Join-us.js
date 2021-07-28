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

    if (formState.password !== formState.confirmPassword){
      alert('Please reconfirm your password is correct.')
    } else {
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
        console.log(data)
        Auth.login(data.addUser.token);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section className="sign-up">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign.Up</h3>

        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            className="form-control"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleChange}
            // {e => this.firstName = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={handleChange}
            // {e => this.lastName = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            // {e => this.email = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Password"
            value={formState.password}
            onChange={handleChange}
            // {e => this.password = e.target.value}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={handleChange}
            // {e => this.confirmPassword = e.target.value}
          />
        </div>

        <button className="btn btn-primary btn-block">Join Us</button>
      </form>
    </section>
  );
};

export default Signup;
