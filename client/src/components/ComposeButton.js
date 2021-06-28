import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import styles from "./ComposeButton.module.css"

export default function ComposeButton(props) {
    return (
        <Link to="/compose" className={styles.composeButton}>
            <FontAwesomeIcon icon={faPen} />
        </Link>
    )
}