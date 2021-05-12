import styles from "./Avatar.module.css"

export default function Avatar(props) {
    return <img className={styles.avatar} alt="avatar" src={`https://www.gravatar.com/avatar/${props.hash}`} />
}