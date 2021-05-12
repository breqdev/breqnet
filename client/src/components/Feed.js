import styles from "./Feed.module.css"

export default function Feed(props) {
    return (
        <div className={styles.feedContainer}>
            {props.children}
        </div>
    )
}