import { Link } from "react-router-dom"

import styles from "./Auth.module.css"

export function Signup(props) {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h1>Sign Up</h1>
                <form className={styles.form}>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
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
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <h1>Log In</h1>
                <form className={styles.form}>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
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