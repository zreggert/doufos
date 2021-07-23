import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'


import Auth from '../utils/auth';

const Signup = () => {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword:''
    });

    const [addUser] = useMutation(ADD_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        // const data = {
        //     first_name: this.firstName,
        //     last_name: this.lastName,
        //     email: this.email,
        //     password: this.password,
        //     password_confirm: this.confirmPassword
        // };

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (err) {
            console.log(err)
        }
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" value={formState.firstName} onChange={handleChange} 
                // {e => this.firstName = e.target.value} 
                />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" value={formState.lastName} onChange={handleChange}
                // {e => this.lastName = e.target.value} 
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" value={formState.email} onChange={handleChange}
                // {e => this.email = e.target.value} 
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value={formState.password} onChange={handleChange}
                // {e => this.password = e.target.value} 
                />
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" value={formState.confirmPassword} onChange={handleChange}
                // {e => this.confirmPassword = e.target.value} 
                />
            </div>

            <button className="btn btn-primary btn-block">Sign Up</button>
        </form>
    ); 
};

export default Signup;