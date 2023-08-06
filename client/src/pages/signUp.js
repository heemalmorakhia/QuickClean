import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { ADD_USER } from "../utilities/mutation";
import Auth from "../utilities/auth";
import PageLayout from "../components/layout";

function SignUp() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    userName: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          phone: formState.phone,
          userName: formState.userName,
          email: formState.email,
          password: formState.password,
        },
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
      <br />
      <br />
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <h1 className="text-center">Sign Up</h1>
          <br />
          <div className="container">
            <div>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group mb-3">
                  <label className="fw-bold ms-1 mb-1" htmlFor="firtName">
                    First Name:
                  </label>
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
                  <label className="fw-bold ms-1 mb-1" htmlFor="lastName">
                    Last Name:
                  </label>
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
                  <label className="fw-bold ms-1 mb-1" htmlFor="userName">
                    User Name:
                  </label>
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
                  <label className="fw-bold ms-1 mb-1" htmlFor="phone">
                    Phone Number:
                  </label>
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
                  <label className="fw-bold ms-1 mb-1" htmlFor="email">
                    Email Address:
                  </label>
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
                  <label className="fw-bold ms-1 mb-1" htmlFor="pwd">
                    Password:
                  </label>
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
                    <p className="error-text">
                      The provided credentials are incorrect
                    </p>
                  </div>
                ) : null}
                <div className="text-center mt-4">
                  <button className="btn btn-primary" type="submit">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="text-center mt-2">
                <span>Already have an account? </span>
                <Link className="ms-1 mb-1" to="/signin">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </PageLayout>
  );
}

export default SignUp;
