import Avatar from "../../components/Avatar"
import Feed from "../../components/Feed"
import Post from "../../components/Post"

import styles from "./Profile.module.css"

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>
                <Avatar hash="bfd63b4c9574d59b8108f31a52da17c8" />
            </div>
            <h1>Brooke</h1>
            <p>This is bio text</p>
            <button>Follow</button>
        </div>
    )
}

export default function Profile(props) {
    return (
        <div className={styles.profile}>
            <Header />
            <Feed>
                <Post />
                <Post />
                <Post />
            </Feed>
        </div>
    )
}