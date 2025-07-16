import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const SearchBar = () => {
    return (
        <div className="flex w-full max-w-sm items-center gap-2 shadow-md">
            <Input type="search" placeholder="Search current subreddit" />
            {/* <Button type="submit" variant="outline" >
                Search
            </Button> */}
        </div>
    )
}

export default SearchBar 