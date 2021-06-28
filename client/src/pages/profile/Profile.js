import Avatar from "../../components/Avatar"
import Feed from "../../components/Feed"
import Post from "../../components/Post"
import ComposeButton from "../../components/ComposeButton"

import { getPathParameter } from "../../utils"

import styles from "./Profile.module.css"

function Header(props) {

    let userInfo = {
        1: {
            name: "Brooke",
            bio: "This is bio text",
        },
        2: {
            name: "Max Michael",
            bio: "Graphene II"
        }
    }

    let user = userInfo[props.id]

    return (
        <div className={styles.header}>
            <div className={styles.avatar}>
                <Avatar id={props.id} />
            </div>
            <h1>{user.name}</h1>
            <p>{user.bio}</p>
            <button>Follow</button>
        </div>
    )
}

export default function Profile(props) {
    let id = getPathParameter(1)

    let usersPosts = {
        1: [
            {
                user: 1,
                content: "Hello World!",
                id: 11
            },
            {
                user: 1,
                content: "Just setting up my breqnet",
                id: 12
            },
            {
                user: 1,
                content: "i hate this app",
                id: 13
            }
        ],
        2: [
            {
                user: 2,
                content: "Stream Graphene II",
                id: 14
            },
            {
                user: 2,
                content: "hi",
                id: 15
            }
        ]
    }

    let posts = usersPosts[id].map(post => <Post key={post.id} {...post} />)

    return (
        <div className={styles.profile}>
            <Header id={id} />
            <Feed>
                {posts}
            </Feed>
            <ComposeButton />
        </div>
    )
}