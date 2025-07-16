import React from "react"
import { Code } from "lucide-react"
// FOR MOBILE - I CAN USE THE Combobox from shadcn: https://ui.shadcn.com/docs/components/combobox

// THE SIDEBAR - https://ui.shadcn.com/docs/components/sidebar

const dummySubreddits = [
    { name: 'javascript', icon: Code,},
    { name: 'Other stuff', icon: Code,},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
    { name: 'Even more stuff', icon: Code},
]

const SubredditsBar = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold">Subreddits Bar</h2>
            <ul className="mt-6">
                {dummySubreddits.map((subreddit, idx) => {
                    const Icon = subreddit.icon
                    return (
                        <li 
                            key="idx" 
                            className="flex items-center gap-3 py-4 px-4 rounded-md cursor-pointer hover:bg-stone-300 transition-colors"
                        >
                            <Icon className="w-4 h-4 text-muted-foreground" />
                            <span>r/{subreddit.name}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SubredditsBar