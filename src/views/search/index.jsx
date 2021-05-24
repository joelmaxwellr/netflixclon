import { useState } from "react"
import SearchBox from "./SearchBox"
import "./styles.css"
import data from "../../data/users.json"

export default function Search() {
    const [isAtTop, setIsAtTop] = useState(false)
    const [usersData, setUsersData] = useState(data)

    const handleCloseOpenSearch = () => setIsAtTop(!isAtTop);
 console.log(usersData)
    return (
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleCloseOpenSearch} onClose={handleCloseOpenSearch} />
        </div>
    )
}