import { useState } from "react"
import "./styles.css"
export default function SearchBox({onSearch, onClose}) {
const handleSearchClick = ()=>{
    setSearchText("")
    onClose()

}
    const [searchText, setSearchText] = useState()
    return (
        <div className="search-box">

            <h2 className="search-box-title">Buscador de Personal</h2>
            <div className="search-box-button">
                <label>
                    <input
                        value={searchText}
                        onChange={({ target: { value } }) => setSearchText(value)}
                        type="text"
                        className="search-box-input" />
                </label>
                <button onClick={onSearch}>Buscar</button>
                <button onClick={handleSearchClick}>Cerrar</button>
            </div>

        </div>
    )
}