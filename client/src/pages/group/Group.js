import ChannelList from "./ChannelList.js"
import ChatWindow from "../../components/ChatWindow"

import styles from "./Group.module.css"

import Feed from "../../components/Feed.js"
import Post from "../../components/Post.js"
import WindowHeader from "../../components/WindowHeader.js"

function GroupFeed(props) {
    return (
        <WindowHeader>
            <div className={styles.window}>
                <Feed>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </Feed>
            </div>
        </WindowHeader>
    )
}

export default function Group(props) {
    let window = <div></div>

    if (false) {
        window = <ChatWindow />
    } else {
        window = <GroupFeed />
    }

    return (
        <div className={styles.group}>
            <ChannelList />
            {window}
        </div>
    )
}