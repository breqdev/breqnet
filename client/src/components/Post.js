import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faBookmark, faShareSquare, faComment } from "@fortawesome/free-regular-svg-icons"

import Avatar from "./Avatar.js"
import Name from "./Name.js"

import styles from "./Post.module.css"

function Header(props) {
    return (
        <div className={styles.header}>
            <Avatar hash="bfd63b4c9574d59b8108f31a52da17c8" />
            <Name name="Brooke" id="1" />
        </div>
    )
}

function Body(props) {
    return (
        <div className={styles.body}>
            <h1>Hello!</h1>
            <p>This is post content</p>
        </div>
    )
}

function Footer(props) {
    return (
        <div className={styles.footer}>
            <FontAwesomeIcon icon={faHeart} title="Like" />
            <FontAwesomeIcon icon={faComment} title="Comment" />
            <div className={styles.filler} />
            <FontAwesomeIcon icon={faShareSquare} title="Share" />
            <FontAwesomeIcon icon={faBookmark} title="Save" />
        </div>
    )
}


export default function Post(props) {
    return (
        <div className={styles.post}>
            <Header />
            <hr />
            <Body />
            <hr />
            <Footer />
        </div>
    )
}