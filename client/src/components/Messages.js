import Avatar from "./Avatar"
import Name from "./Name"

import styles from "./Messages.module.css"

function Message(props) {
    return (
        <span className={styles.content}>
            {props.message.content}
        </span>
    )
}

function MessageChunk(props) {
    let messages = props.messages.map(message => <Message message={message} key={message.timestamp} />)

    return (
        <div className={styles.message}>
            <span className={styles.avatar}>
                <Avatar id={props.messages[0].from} />
            </span>
            <div className={styles.contentColumn}>
                <Name id={props.messages[0].from} />
                {messages}
            </div>
        </div>
    )
}

export default function Messages(props) {
    let messages = [
        {
            from: 1,
            content: "Hello",
            timestamp: 0
        },
        {
            from: 1,
            content: "Hello",
            timestamp: 1
        },
        {
            from: 1,
            content: "Hello",
            timestamp: 2
        },
        {
            from: 1,
            content: "Hello",
            timestamp: 120
        },
        {
            from: 2,
            content: "Hello",
            timestamp: 121
        },
        {
            from: 1,
            content: "Hello",
            timestamp: 122
        },
        {
            from: 2,
            content: "Hello",
            timestamp: 125
        },
    ]

    let chunks = []
    let currentChunk = []
    let previous = {
        from: null,
        timestamp: 0
    }
    for (let message of messages) {
        if (message.from === previous.from && message.timestamp - previous.timestamp < 60) {
            currentChunk.push(message)
        } else {
            if (currentChunk.length > 0) {
                chunks.push(currentChunk)
            }
            currentChunk = [message]
        }
        previous = message
    }
    if (currentChunk.length > 0) {
        chunks.push(currentChunk)
    }

    let messageComponents = chunks.map(chunk => <MessageChunk messages={chunk} key={chunk[0].timestamp} />)

    return (
        <div className={styles.messages}>
            {messageComponents}
        </div>
    )
}