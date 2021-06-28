import styles from "./Messages.module.css"

import UserList from "./UserList.js"
import WindowHeader from "../../components/WindowHeader.js"
import ChatWindow from "../../components/ChatWindow.js"

import { getPathParameter } from "../../utils"

export default function Messages(props) {
    let id = getPathParameter()

    if (id === undefined) {
        return (
            <div className={styles.messages}>
                <UserList />
            </div>
        )
    }

    return (
        <div className={styles.messages}>
            <UserList />
            <WindowHeader id={id}>
                <ChatWindow id={id} />
            </WindowHeader>
        </div>
    )
}