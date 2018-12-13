import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./login.jsx";
import Account from "./account.jsx";
import Transactions from "./transactions.jsx";

class Router extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            accounts: [],
            user: "",
            password: ""
        }
    }

    async componentDidMount() {
        const userResponse = await fetch('https://peoples-db.herokuapp.com/users')
        const userJson = await userResponse.json()
        const accountsResponse = await fetch('https://peoples-db.herokuapp.com/accounts')
        const accountsJson = await accountsResponse.json()
        this.setState({
            users: userJson,
            accounts: accountsJson
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.user)
    }

    render() {

        console.log(this.state.accounts)

        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact render={() => <Login handleInput={this.handleInput}></Login>}></Route>
                    <Route path="/account" component={() => <Account users={this.state.users} accounts={this.state.accounts}></Account>}></Route>
                    <Route path="/transactions" component={() => <Transactions></Transactions>}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router