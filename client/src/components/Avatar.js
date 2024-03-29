import styles from "./Avatar.module.css"

export default function Avatar(props) {
    // return <img className={styles.avatar} alt="avatar" src={`https://www.gravatar.com/avatar/${props.hash}`} />

    let avatars = {
        1: "/pansexual.cropped.png",
        2: "/billy-b-head.png"
    }

    return <img className={styles.avatar} alt="avatar" src={avatars[props.id]} />
}