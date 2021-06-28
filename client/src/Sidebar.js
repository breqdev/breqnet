import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPaperPlane, faUser, faUsers, faCog } from "@fortawesome/free-solid-svg-icons"

import styles from "./Sidebar.module.css"

function SidebarContainer(props) {
    return (
        <div className={styles.sidebar}>
            {props.children}
        </div>
    )
}

function SidebarItem(props) {
    let image = <span>...</span>
    if (props.icon) {
        image = <FontAwesomeIcon icon={props.icon} className={styles.sidebarIcon} />
    } else if (props.image) {
        image = <img src={props.image} alt="" />
    }

    return (
        <Link to={props.link}>
            <div className={styles.sidebarItem} title={props.title}>
                {image}
            </div>
        </Link>
    )
}

function GroupSection(props) {
    let groups = [3, 4]

    groups = groups.map(group => <SidebarItem icon={faUsers} title="Group" key={group} link={`/group/${group}`} />)

    return (
        <>
            {groups}
        </>
    )
}

export default function Sidebar(props) {
    return (
        <SidebarContainer>
            <SidebarItem icon={faHome} title="Feed" link="/" />
            <SidebarItem icon={faPaperPlane} title="Direct Messages" link="/messages" />
            <SidebarItem icon={faUser} title="My Profile" link="/profile" />
            <hr />
            <GroupSection />
            <div className={styles.filler} />
            <SidebarItem icon={faCog} title="Settings" link="/settings" />
        </SidebarContainer>
    )
}