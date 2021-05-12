import React from "react"

import { Link } from "react-router-dom"

import styles from "./Auth.module.css"

import AuthContext from "../../context/AuthContext.js"

export function Signup(props) {
    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    const [token, setToken] = React.useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        let formdata = new FormData()
        formdata.append("name", name)
        formdata.append("email", email)
        formdata.append("password", password)

        fetch("http://localhost:5000/signup", {
            method: "POST",
            body: formdata
        }).then(response => response.json()).then(data => setToken(data.auth_token))
    }

    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h1>Sign Up</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Sign Up" />
                </form>
                <p className={styles.link}>
                    <Link to="/settings/login" className={styles.link}>
                        already have an account?
                    </Link>
                </p>
            </div>
        </div>
    )
}

export function Login(props) {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    const [token, setToken] = React.useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        let formdata = new FormData()
        formdata.append("email", email)
        formdata.append("password", password)

        fetch("http://localhost:5000/login", {
            method: "POST",
            body: formdata
        }).then(response => response.json()).then(data => setToken(data.auth_token))
    }

    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h1>Log In</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Log In" />
                </form>
                <p className={styles.link}>
                    <Link to="/settings/signup" className={styles.link}>
                        need an account?
                    </Link>
                </p>
            </div>
        </div>
    )
}