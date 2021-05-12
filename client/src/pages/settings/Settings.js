import { Switch, Route } from "react-router"
import styles from "./Settings.module.css"

import { Login, Signup } from "./Auth.js"

export default function Settings(props) {
    return (
        <Switch>
            <Route path="/settings/login" component={Login} />
            <Route path="/settings/signup" component={Signup} />
        </Switch>
    )
}