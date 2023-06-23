import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utilities/mutation';
import Auth from '../utilities/auth';
import PageLayout from '../components/layout';


function SignIn() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
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
            <div className='vh-100 d-flex align-items-center'>
                
                <div className='container d-flex justify-content-center'>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group mb-3">
                                <label style={{ fontWeight: "bolder" }} htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="your email"
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
                                <button className='btn btn-primary' type="submit">Sign In</button>
                            </div>
                        </form>
                        <div className='text-center' style={{ marginTop: "30px" }}>
                            <h6>Don't have an account?</h6>
                            <Link style={{ fontWeight: "bolder" }} to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default SignIn;