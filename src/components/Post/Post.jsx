import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import PostVote from "./PostVote"


export const dummyPosts = [
    {
        id: 1,
        title: 'I need more bones',
        votes: 25,
        image: '',
        author: 'Benjy',
        created_utc: 1721000000,
        num_comments: 12,
    },
    {
        id: 2,
        title: 'How do I stop stinking the house out?',
        votes: -16,
        image: '',
        author: 'Natasha',
        created_utc: 1721000500,
        num_comments: '40,000',
    },
    {
        id: 3,
        title: 'Testing Card Heading 3',
        votes: 220,
        image: '',
        author: 'Andy',
        created_utc: 1721001000,
        num_comments: 0,
    },
]

const Post = ({ post }) => {
    return (
        <div className="pl-4">
            <div className="bg-stone-50 rounded shadow-xl h-[500px] p-6 flex relative">
                <PostVote votes={post.votes}/>
                <div className="flex flex-col flex-1 relative">
                    <PostHeader title={post.title} />
                    <div className="flex-1 text-sm text-muted-forground mb-14 mt-2 bg-white rounded"> 
                        Image goes here
                    </div>
                    <PostFooter 
                        author={post.author}
                        created_utc={post.created_utc}
                        num_comments={post.num_comments}
                    />
                </div>
            </div>
        </div>
    )
}


export default Post

