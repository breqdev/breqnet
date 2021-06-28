import Stories from "./Stories.js"
import Post from "../../components/Post.js"
import Feed from "../../components/Feed.js"

export default function HomeFeed(props) {

    let posts = [
        {
            user: 1,
            content: "Hello World",
            id: 9
        },
        {
            user: 2,
            content: "This app sucks",
            id: 10
        }
    ]

    posts = posts.map(post => <Post key={post.id} {...post} />)

    return (
        <Feed>
            <Stories />
            {posts}
        </Feed>
    )
}