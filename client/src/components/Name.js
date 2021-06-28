import { Link } from "react-router-dom"

import styles from "./Name.module.css"

export default function Name(props) {

    let idToName = {
        1: "Brooke",
        2: "Max Michael"
    }

    return (
        <Link to={`/profile/${props.id}`} className={styles.name}>
            {idToName[props.id]}
        </Link>
    )
}
