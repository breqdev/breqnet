import Name from "./Name.js"

import styles from "./WindowHeader.module.css"

export default function Header(props) {
    let HeaderComponent = props.headerComponent || Name

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderComponent {...props} />
            </div>
            {props.children}
        </div>
    )
}