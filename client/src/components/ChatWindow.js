import Message from "./Message.js"
import styles from "./ChatWindow.module.css"

function Messages(props) {
    return (
        <div className={styles.messages}>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

function ComposeBox(props) {
    return (
        <div className={styles.composeBox}>
            <input type="text" name="message" />
            <button>Send</button>
        </div>
    )
}

export default function ChatWindow(props) {
    return (
        <div className={styles.chatWindow}>
            <Messages />
            <ComposeBox />
        </div>
    )
}