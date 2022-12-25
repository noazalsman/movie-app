import React from "react";

function SearchBox(props) {
    return (
        <div className="mt-3 mb-5">
            <input 
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="search for a movie...">
            </input>
        </div>
    )
}

export default SearchBox;