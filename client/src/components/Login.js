import React, { useState} from "react";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {

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
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"
                placeholder="Email" value={formState.email}
                onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                placeholder="Password" value={formState.password}
                onChange={handleChange}
                />
            </div>

            <button className="submit btn">Login</button>

        </form>
    );
};

export default Login;