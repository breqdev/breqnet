import React from "react"

import { Switch, Route } from "react-router"
import styles from "./Settings.module.css"

import { Login, Signup } from "./Auth.js"

import AuthContext from "../../context/AuthContext.js"


function UserSettings(props) {
    const token = React.useContext(AuthContext)

    return <p>Token: {token}</p>
}


export default function Settings(props) {
    return (
        <Switch>
            <Route path="/settings/login" component={Login} />
            <Route path="/settings/signup" component={Signup} />
            <Route path="/settings" component={UserSettings} />
        </Switch>
    )
}