import ChannelList from "./ChannelList.js"
import ChatWindow from "../../components/ChatWindow"

import styles from "./Group.module.css"

import Feed from "../../components/Feed.js"
import Post from "../../components/Post.js"
import WindowHeader from "../../components/WindowHeader.js"
import ComposeButton from "../../components/ComposeButton.js"

function GroupHeader(props) {
    return (
        <span>{props.name}</span>
    )
}

function GroupFeed(props) {

    let groupPosts = {
        3: {
            20: [
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
            ]
        },
        4: {
            25: [
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
    }

    let posts = groupPosts[props.groupId][props.id].map(post => <Post key={post.id} {...post} />)

    return (
        <WindowHeader headerComponent={GroupHeader} name={props.name}>
            <div className={styles.window}>
                <Feed>
                    {posts}
                </Feed>
                <ComposeButton />
            </div>
        </WindowHeader>
    )
}

function GroupChat(props) {
    return (
        <WindowHeader headerComponent={GroupHeader} name={props.name}>
            <ChatWindow />
        </WindowHeader>
    )
}

export default function Group(props) {
    let pane = <div></div>

    let groupId = new Number(window.location.href.split("/")[4])
    let channelId = new Number(window.location.href.split("/")[6])

    console.log({groupId, channelId})

    let channels = {
        3: {
            20: {
                groupId: 3,
                id: 20,
                type: "feed",
                name: "Share Your Stuff"
            },
            21: {
                groupId: 3,
                id: 21,
                type: "chat",
                name: "General"
            }
        },
        4: {
            25: {
                groupId: 4,
                id: 25,
                type: "feed",
                name: "New Music"
            },
            26: {
                groupId: 4,
                id: 26,
                type: "chat",
                name: "Discuss"
            }
        }
    }

    if (isNaN(channelId)) {
        pane = <></>
    } else {
        let channel = channels[groupId][channelId]

        if (channel.type == "feed") {
            pane = <GroupFeed {...channel} />
        } else {
            pane = <GroupChat {...channel} />
        }
    }

    return (
        <div className={styles.group}>
            <ChannelList groupId={groupId} />
            {pane}
        </div>
    )
}