import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '', email: '', phone: '', work: '', password: '', cpassword: ''
  })

  const handleInputs = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name, email: email, phone: phone, work: work, password: password, cpassword: cpassword
      })
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    } else {
      window.alert("Registration Successful")
      console.log("Registration Successful")
      navigate("/login")
    }
  }

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
            value={user.name}
            onChange={handleInputs}
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
            value={user.email}
            onChange={handleInputs}
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
            value={user.phone}
            onChange={handleInputs}
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
            value={user.work}
            onChange={handleInputs}
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
            value={user.password}
            onChange={handleInputs}
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
            value={user.cpassword}
            onChange={handleInputs}
            id="cpassword"
            placeholder="Enter Password Again"
          />
        </div>

        <div class="d-grid gap-2 mt-4 mb-5">
          <button
            type="submit"
            name="signup"
            id="signup"
            className="btn btn-primary"
            value="register"
            onClick={postData}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
