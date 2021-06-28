import React from "react"

import { Switch, Route } from "react-router"
import styles from "./Settings.module.css"

import { Login, Signup } from "./Auth.js"

import AuthContext from "../../context/AuthContext.js"


function UserSettings(props) {
    const token = React.useContext(AuthContext)

    return (
        <div className={styles.settings}>
            <h1>User Settings</h1>
            <h2>Profile</h2>
            <form className={styles.form}>
                <label>
                    Name
                    <input type="text" value="Brooke" />
                </label>
                <label>
                    Bio
                    <textarea value="hello, this is my bio, i hope you like it" />
                </label>
                <input type="submit" value="Save changes" />
            </form>
            <h2>Account</h2>
            <form className={styles.form}>
                <label>
                    Email
                    <input type="email" value="breq@breq.dev" />
                </label>
                <label>
                    Old Password
                    <input type="password" />
                </label>
                <label>
                    New Password
                    <input type="password" />
                </label>
                <button>Update Email</button>
                <button>Change Password</button>
                <button>Forgot Password?</button>
                <button>Delete Account</button>
            </form>
        </div>
    )
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