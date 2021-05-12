import Stories from "./Stories.js"
import Post from "../../components/Post.js"
import Feed from "../../components/Feed.js"

export default function HomeFeed(props) {
    return (
        <Feed>
            <Stories />
            <Post />
            <Post />
        </Feed>
    )
}