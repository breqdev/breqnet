import Avatar from "../../components/Avatar.js"
import Name from "../../components/Name.js"

import styles from "./Stories.module.css"

function Story(props) {
    return (
        <div className={styles.story}>
            <span className={styles.storyAvatar}>
                <Avatar id={props.id} />
            </span>
            <span className={styles.storyName}>
                <Name id={props.id} />
            </span>
        </div>
    )
}

export default function Stories(props) {
    return (
        <div className={styles.stories}>
            <Story id={1} />
            <Story id={2} />
        </div>
    )
}