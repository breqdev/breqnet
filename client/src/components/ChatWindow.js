import Messages from "./Messages.js"
import styles from "./ChatWindow.module.css"

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