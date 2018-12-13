import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <h1 className="welcome">Welcome to Bank of the People</h1>
            <div class="card text-center loginContainer">
                <div class="card-header login-header">
                    Login
                </div>
                <form class="loginForm">
                    <label>User:</label>
                    <input name="user" type="text" placeholder="Enter Username"></input>
                    <label>Password:</label>
                    <input name="password" type="password" placeholder="Password"></input>
                    <Link to="/account"><button type="button" class="btn btn-success lButton">Login</button></Link>
                </form>
                <p>Don't have an Account?</p>
                <Link to="/enroll"><h5><u>Enroll Now</u></h5></Link>
            </div>
        </div>

    )
}

export default Login