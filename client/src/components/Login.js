import React from 'react'

const Login = () => {
    return (

        <div className="container col-lg-6 mt-5">
            <h2 className="text-center">Sign In</h2>
            <form>
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
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                    />
                </div>

                <div class="d-grid gap-2 mt-3">
                    <button
                        type="submit"
                        name="signin"
                        id="signin"
                        className="btn btn-primary"
                        value="Log In"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login