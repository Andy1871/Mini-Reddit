import { MoveUp, MoveDown } from "lucide-react"
import { useState } from "react"

const PostVote = ({votes}) => {
    const [vote, setVote] = useState(null)

    const handleUpVote = () => {
        setVote(prev => (prev === 'up' ? null : 'up'))
    }

    const handleDownVote = () => {
        setVote(prev => (prev === 'down' ? null : 'down'))
    }

    return (
        <div className="mr-6 flex flex-col items-center">

            <button onClick={handleUpVote}>
                <MoveUp 
                    className={`mb-1 hover:text-green-400 ${vote === 'up' ? 'text-green-400' : ''}`}
                    size={20} 
                    strokeWidth={3} 
                />
            </button>

            <p className={`font-semibold ${
                vote === 'up' ? 'text-green-400' :
                vote === 'down' ? 'text-red-400' :
                ''
            }`}>{votes}</p>

            <button onClick={handleDownVote}>
                <MoveDown 
                    className={`mt-1 hover:text-red-400 ${vote === 'down' ? 'text-red-400' : ''}`}
                    size={20} 
                    strokeWidth={3} 
                /> 
            </button>

        </div>
    )
}

export default PostVote