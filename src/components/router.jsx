import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./login.jsx";
import Account from "./account.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Login}></Route>
                <Route path="/account" component={() => <Account></Account>}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Router