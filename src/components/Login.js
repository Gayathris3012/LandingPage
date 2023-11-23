import React from "react";

const Login = () => {
  return (
    <div className="container mt-3">
      <h2>Login Form</h2>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          />
        </div>
        <center>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </center>
      </form>
    </div>
  );
};

export default Login;
