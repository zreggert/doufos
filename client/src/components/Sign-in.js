import { Link } from "react-router-dom";
import React, { useState} from "react";

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

// Importing a CSS file
import "../css/sign-up.css";

export default function SigninC() {
  return (
    <section className="sign-up">
      <div className="exit">
        <Link className="exit-link" to="/">
          &#10006;
        </Link>
      </div>
      <form onSubmit="#">
        <h3>Sign.In</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button className="btn btn-primary btn-block">Sign In</button>
      </form>
    </section>
  );
}
