import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {
  return (
    <div className="container col-lg-6 mt-5">
      <h2 className="text-center">Sign Up</h2>
      <form>
        <div className="form-group mt-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            className="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="phone">Phone No.</label>
          <input
            type="number"
            name="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Phone No."
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            name="work"
            className="form-control"
            id="work"
            placeholder="Your Profession"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>

        <div className="form-group mt-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            className="form-control"
            id="cpassword"
            placeholder="Enter Password Again"
          />
        </div>

        <div class="d-grid gap-2 mt-3">
          <button
            type="submit"
            name="signup"
            id="signup"
            className="btn btn-primary"
            value="register"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
