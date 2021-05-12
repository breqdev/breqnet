import Avatar from "./Avatar"
import Name from "./Name"

import styles from "./Message.module.css"

export default function Message(props) {
    return (
        <div className={styles.message}>
            <span className={styles.avatar}>
                <Avatar hash="bfd63b4c9574d59b8108f31a52da17c8" />
            </span>
            <div className={styles.contentColumn}>
                <Name name="Brooke" id="1" />
                <span className={styles.content}>
                    Hello World!
                </span>
            </div>
        </div>
    )
}