import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utilities/mutation";
import Auth from "../utilities/auth";
import PageLayout from "../components/layout";

function SignIn() {
  const [formState, setFormState] = useState({ email: "", password: "" });
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
      <br />
      <br />
      <div className="d-flex align-items-center">
        <div className="container d-flex justify-content-center">
          <div>
            <h1 className="text-center">Sign In</h1>
            <br />
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mb-3">
                <label className="fw-bold ms-1 mb-1" htmlFor="email">
                  Email Address:
                </label>
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
              <div className="text-center">
                <button className="btn btn-primary" type="submit">
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <span>Don't have an account?</span>
              <Link className="ms-1 mb-1" to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </PageLayout>
  );
}

export default SignIn;
