import React from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Search } from "lucide-react"; 

const HeaderBar = () => {
    return (
        <header className="flex items-center justify-center"> 

            <div className="absolute left-12 flex items-center" >
                <h2 className="text-xl font-semibold">Mini Reddit</h2>
            </div>

            <div className="flex items-center gap-2 max-w-md w-full px-4">
                <SearchBar />
                <button type="button" className="active:scale-90 transition-transform duration-100">
                    <Search className="w-6 h-6 text-muted-foreground" />
                </button>
                
            </div>

        </header>
    )
}

export default HeaderBar