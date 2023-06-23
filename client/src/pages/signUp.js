import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utilities/mutation';
import Auth from '../utilities/auth';
import PageLayout from '../components/layout';

function SignUp() {

    const [formState, setFormState] = useState({ firstName: '', lastName: '',phone:'',userName:'', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
        try {
            const mutationResponse = await addUser({
                variables: { firstName: formState.firstName, lastName: formState.lastName,phone:formState.phone, userName:formState.userName, email: formState.email, password: formState.password },
            });
            
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
            
        } catch (e) {
            console.log(e);
        }
        
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <PageLayout>
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <div>
                    <div className='text-center' style={{ paddingBottom: "70px" }}>
                        <h2>Create An Account With Us</h2>
                    </div>
                    <div className='container'>
                        <div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="firtName">First Name:</label>
                                    <input
                                        className="form-control"
                                        placeholder="first name"
                                        name="firstName"
                                        type="text"
                                        id="firstName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="lastName">Last Name:</label>
                                    <input
                                        className="form-control"
                                        placeholder="last name"
                                        name="lastName"
                                        type="text"
                                        id="lastName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="userName">User Name:</label>
                                    <input
                                        className="form-control"
                                        placeholder="user Name"
                                        name="userName"
                                        type="text"
                                        id="userName"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="phone">Phone Number:</label>
                                    <input
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phone"
                                        type="text"
                                        id="phone"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="email">Email address:</label>
                                    <input
                                        className="form-control"
                                        placeholder="email"
                                        name="email"
                                        type="email"
                                        id="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label style={{ fontWeight: "bolder" }} htmlFor="pwd">Password:</label>
                                    <input
                                        className="form-control"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        id="pwd"
                                        onChange={handleChange}
                                    />
                                </div>
                                {error ? (
                                    <div>
                                        <p className="error-text">The provided credentials are incorrect</p>
                                    </div>
                                ) : null}
                                <div className="text-center">
                                    <button className='btn btn-primary' type="submit">Create Account</button>
                                </div>
                            </form>
                            <div className='text-center' style={{ marginTop: "30px" }}>
                                <h6>Already have an account?</h6>
                                <Link style={{ fontWeight: "bolder" }} to="/signin">Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default SignUp;