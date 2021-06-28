import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHashtag, faPen } from "@fortawesome/free-solid-svg-icons"
import styles from "./ChannelList.module.css"

function Header(props) {

    let groups = {
        3: {
            name: "Code Gang",
            bio: "Talk about code or something"
        },
        4: {
            name: "29 Joules",
            bio: "The music band"
        }
    }

    let group = groups[props.id]

    return (
        <Link className={styles.header} to={`/group/${props.id}`}>
            <h1>{group.name}</h1>
            <p>{group.bio}</p>
        </Link>
    )
}

function Channel(props) {

    let icon = <FontAwesomeIcon icon={faHashtag} />

    if (props.type === "feed") {
        icon = <FontAwesomeIcon icon={faPen} />
    }

    return (
        <Link className={styles.channel} to={`/group/${props.groupId}/channel/${props.id}`}>
            {icon}
            <span>{props.name}</span>
        </Link>
    )
}


export default function ChannelList(props) {

    let groupChannels = {
        3: {
            20: {
                id: 20,
                type: "feed",
                name: "Share Your Stuff"
            },
            21: {
                id: 21,
                type: "chat",
                name: "General"
            }
        },
        4: {
            25: {
                id: 25,
                type: "feed",
                name: "New Music"
            },
            26: {
                id: 26,
                type: "chat",
                name: "Discuss"
            }
        }
    }

    let channels = Object.values(groupChannels[props.groupId]).map(channel => <Channel groupId={props.groupId} key={channel.id} {...channel} />)

    return (
        <div className={styles.channelList}>
            <Header id={props.groupId} />
            <div className={styles.channels}>
                {channels}
            </div>
        </div>
    )
}