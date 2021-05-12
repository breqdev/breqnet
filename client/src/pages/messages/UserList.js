import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Avatar from "../../components/Avatar.js"

import styles from "./UserList.module.css"

function User(props) {
    return (
        <Link to="/messages/1" className={styles.user}>
            <span className={styles.avatar}>
                <Avatar hash="bfd63b4c9574d59b8108f31a52da17c8" />
            </span>
            <span className={styles.name}>
                Brooke
            </span>
        </Link>
    )
}

function Header(props) {
    return (
        <div className={styles.header}>
            <span>Users</span>
            <FontAwesomeIcon icon={faPlusSquare} />
        </div>
    )
}


export default function UserList(props) {
    return (
        <div className={styles.userList}>
            <Header />
            <User />
            <User />
            <User />
        </div>
    )
}