import styles from "./Compose.module.css"

export default function Compose(props) {
    return (
        <div className={styles.compose}>
            <h1>New Post</h1>
            <form className={styles.form}>
                <input type="text" name="title" placeholder="Title" />
                <input type="file" name="attachments" />
                <textarea placeholder="Content" />
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}