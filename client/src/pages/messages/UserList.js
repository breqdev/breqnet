import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Avatar from "../../components/Avatar.js"

import styles from "./UserList.module.css"

function User(props) {
    let idToName = {
        1: "Brooke",
        2: "Max Michael"
    }

    return (
        <Link to={`/messages/${props.id}`} className={styles.user}>
            <span className={styles.avatar}>
                <Avatar id={props.id} />
            </span>
            <span className={styles.name}>
                {idToName[props.id]}
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
            <User id={1} />
            <User id={2} />
        </div>
    )
}