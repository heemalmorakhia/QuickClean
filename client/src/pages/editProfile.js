import React, { useState, useEffect } from "react";
import PageLayout from "../components/layout";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utilities/queries";
import { UPDATE_USER } from "../utilities/mutation";
import { UPDATE_USER_PASSWORD } from "../utilities/mutation";
import Auth from "../utilities/auth";

function EditProfile() {
  const { loading, data } = useQuery(QUERY_USER);

  const user = data?.user || {};
  console.log(user);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (!loading && data?.user) {
      const { firstName, lastName, userName, phone, email } = data.user;
      setFormState({
        firstName: firstName || "",
        lastName: lastName || "",
        userName: userName || "",
        phone: phone || "",
        email: email || "",
      });
    }
  }, [loading, data]);
  console.log(formState);
  const [password, setPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const [updateUser, { error }] = useMutation(UPDATE_USER);
  const [updateUserPassword] = useMutation(UPDATE_USER_PASSWORD);

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserPassword({
        variables: { password: password },
      });
      setPassword("");
      setIsPasswordChanged(true);
    } catch (e) {
      console.log(e);
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUser({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      [name]: value,
    });
  };

  if (error) {
    return <div>404-ERROR!</div>;
  }

  return (
    <PageLayout>
      {Auth.loggedIn() ? (
        <>
          {loading ? (
            <div>loading....</div>
          ) : (
            <div className="container">
              <br />
              <h1>My Profile</h1>
              <br />
              <div>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group w-75 mb-3">
                    <label className="fw-bold mb-1 ms-1" htmlFor="firstName">
                      First Name:
                    </label>
                    <input
                      className="form-control"
                      placeholder="Update Your First Name"
                      name="firstName"
                      type="text"
                      id="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group w-75 mb-3">
                    <label className="fw-bold mb-1 ms-1" htmlFor="lastName">
                      Last Name:
                    </label>
                    <input
                      className="form-control"
                      placeholder="Update Your Last Name"
                      name="lastName"
                      type="text"
                      id="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group w-75 mb-3">
                    <label className="fw-bold mb-1 ms-1" htmlFor="userName">
                      User Name:
                    </label>
                    <input
                      className="form-control"
                      placeholder="Update Your User Name"
                      name="userName"
                      type="text"
                      id="userName"
                      value={formState.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group w-75 mb-3">
                    <label className="fw-bold mb-1 ms-1" htmlFor="phone">
                      Phone:
                    </label>
                    <input
                      className="form-control"
                      placeholder="Update Your Phone Number"
                      name="phone"
                      type="text"
                      id="phone"
                      value={formState.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group w-75 mb-3">
                    <label className="fw-bold mb-1 ms-1" htmlFor="email">
                      Email Address:
                    </label>
                    <input
                      className="form-control"
                      placeholder="email"
                      name="email"
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Update Profile
                  </button>
                </form>
                <div style={{ paddingTop: "20px" }}>
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="form-group w-75 mb-3">
                      <label className="fw-bold mb-1 ms-1" htmlFor="password">
                        New Password:
                      </label>
                      <input
                        className="form-control"
                        placeholder="********"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handlePasswordChange}
                      />
                    </div>

                    <button className="btn btn-primary mb-3" type="submit">
                      Update Password
                    </button>

                    {isPasswordChanged ? (
                      <div className="mb-5 pb-5">
                        <div className="alert alert-success" role="alert">
                          Password Has Been Updated!
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </form>
                  <br />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div>404 - PAGE DOES NOT EXIST</div>
        </div>
      )}
    </PageLayout>
  );
}

export default EditProfile;
