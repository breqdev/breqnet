import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHashtag } from "@fortawesome/free-solid-svg-icons"
import styles from "./ChannelList.module.css"

function Header(props) {
    return (
        <Link className={styles.header} to="/group/1">
            <h1>Group Name</h1>
            <p>Group Bio</p>
        </Link>
    )
}

function Channel(props) {
    return (
        <Link className={styles.channel} to="/group/1/channel/1">
            <FontAwesomeIcon icon={faHashtag} />
            <span>Channel Name</span>
        </Link>
    )
}


export default function ChannelList(props) {
    return (
        <div className={styles.channelList}>
            <Header />
            <div className={styles.channels}>
                <Channel />
                <Channel />
                <Channel />
            </div>
        </div>
    )
}