import React from "react"
import Navbar from "./navbar.jsx"
import { Link } from 'react-router-dom'

const Account = (props) => {


    const accounts = props.accounts.map(account => {
        return (

            <h3>{account.acct_type}</h3>

        )
    })



    return (
        <div className="account">
            <Navbar users={props.users} />
            <div className="summary container">
                <h1>Accounts:</h1>
                {accounts}
                {/* <Link to="/transactions"><h3>Checking: $10,000,000.50</h3></Link>
                <Link to="/transactions"><h3>Savings: $0.29</h3></Link>
                <Link to="/transactions"><h3>Credit: $675.00</h3></Link>
                <Link><button className="accountButton">Create new account:</button></Link> */}
            </div>
        </div>

    )
}

export default Account