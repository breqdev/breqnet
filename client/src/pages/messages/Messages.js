import styles from "./Messages.module.css"

import UserList from "./UserList.js"
import WindowHeader from "../../components/WindowHeader.js"
import ChatWindow from "../../components/ChatWindow.js"

export default function Messages(props) {
    return (
        <div className={styles.messages}>
            <UserList />
            <WindowHeader>
                <ChatWindow />
            </WindowHeader>
        </div>
    )
}