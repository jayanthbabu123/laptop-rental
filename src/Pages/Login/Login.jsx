import React, { useState } from "react";
import Styles from "./Login.module.css";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Perform login logic here
    axios
      .post("http://localhost:5000/api/users/login", formData)
      .then((response) => {
        console.log(response);

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);

        setShowError(true);
        setError(err.response.data.message);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="login-form card shadow">
              <div className="card-body">
                <h3 className="card-title text-center">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={formData.email}
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={formData.password}
                      name="password"
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block w-100"
                  >
                    Login
                  </button>
                </form>
                {showError && <div className="alert alert-danger">{error}</div>}
                <div className="text-center mt-3">
                  <Link to="/register">Don't have an account? Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
