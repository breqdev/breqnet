import { Link } from "react-router-dom"

import styles from "./Name.module.css"

export default function Name(props) {
    return (
        <Link to={`/users/${props.id}`} className={styles.name}>
            {props.name}
        </Link>
    )
}
