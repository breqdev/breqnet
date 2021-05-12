import Name from "./Name.js"

import styles from "./WindowHeader.module.css"

export default function Header(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <Name name="Brooke" id="1" />
            </div>
            {props.children}
        </div>
    )
}