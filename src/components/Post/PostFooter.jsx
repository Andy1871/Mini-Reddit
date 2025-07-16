import { MessageSquare } from "lucide-react"

const PostFooter = ({ author, created_utc, num_comments}) => {
    const formattedDate = new Date(created_utc * 1000).toLocaleString()

    return (
        <footer className="flex justify-between items-center border-t pt-2 text-sm text-muted-foreground absolute bottom-0 left-0 right-0">
            <p>Posted by: {author}</p>
            <p>{formattedDate}</p>
            <div className="flex">
                <button className="mx-1 hover:bg-gray-200">
                    <MessageSquare />
                </button>
                <p>{num_comments}</p>
            </div>
        </footer>
    )
}

export default PostFooter