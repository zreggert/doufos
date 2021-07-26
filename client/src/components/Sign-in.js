import { Link } from "react-router-dom";
import React, { useState} from "react";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// Importing a CSS file
import "../css/sign-up.css";

export default function SigninC() {

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const [login] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
        ...formState,
        [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const { data } = await login({
            variables: { ...formState },
        });
        Auth.login(data.login.token);
    } catch (err) {
        console.log(err);
    }

    setFormState({
        email: '',
        password: ''
    });
};

  
  return (
    <section className="sign-up">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Sign.In</h3>

        <div className="form-group">
          <label>Email</label>
          <input 
            name="email" 
            type="email" className="form-control" 
            placeholder="Email"
            value={formState.email}
            onChange={handleChange} />
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
          />
        </div>

        <button className="btn btn-primary btn-block">Sign In</button>
      </form>
    </section>
  );
}
