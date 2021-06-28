import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faBookmark, faShareSquare, faComment } from "@fortawesome/free-regular-svg-icons"

import Avatar from "./Avatar.js"
import Name from "./Name.js"

import styles from "./Post.module.css"

function Header(props) {
    return (
        <div className={styles.header}>
            <Avatar id={props.id} />
            <Name id={props.id} />
        </div>
    )
}

function Body(props) {
    return (
        <div className={styles.body}>
            <p>{props.content}</p>
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
            <Header id={props.user} />
            <hr />
            <Body content={props.content} />
            <hr />
            <Footer />
        </div>
    )
}