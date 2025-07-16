import React from "react"
import Post from "../Post/Post"
import { dummyPosts } from "../Post/Post"

const PostSection = () => {
    return (
        <div className="space-y-6">
            {dummyPosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostSection