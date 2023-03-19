import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method: "POST",
            Credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: password
            })
        })
        const data = res.json()
        if (res.status === 400 || !data) {
            window.alert("Invalid Login")
        } else {
            window.alert("Login Successful")
            navigate("/")
        }
    }

    return (
        <div className="container col-lg-6 mt-5">
            <h2 className="text-center">Sign In</h2>
            <form method="POST">
                <div className="form-group mt-2">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
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
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                    />
                </div>

                <div class="d-grid gap-2 mt-4">
                    <button
                        type="submit"
                        name="signin"
                        id="signin"
                        className="btn btn-primary"
                        value="Log In"
                        onClick={loginUser}
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login