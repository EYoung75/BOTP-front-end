import React from "react"
import Navbar from "./navbar.jsx"

const Account = () => {
    return (
        <div className="account">
            <Navbar/>
            <div className="summary container">
                <h1>Accounts:</h1>
                <h3>Checking: $10,000,000.00</h3>
                <h3>Savings: $0.29</h3>
                <h3>Credit: $675.00</h3>
                <button className="accountButton">Create new account:</button>
            </div>
        </div>

    )
}

export default Account