import Avatar from "../../components/Avatar.js"
import Name from "../../components/Name.js"

import styles from "./Stories.module.css"

function Story(props) {
    return (
        <div className={styles.story}>
            <span className={styles.storyAvatar}>
                <Avatar hash="bfd63b4c9574d59b8108f31a52da17c8" />
            </span>
            <span className={styles.storyName}>
                <Name name="Brooke" id="1" />
            </span>
        </div>
    )
}

export default function Stories(props) {
    return (
        <div className={styles.stories}>
            <Story />
            <Story />
            <Story />
        </div>
    )
}