import React, { useState, useEffect } from "react";

const SearchInput = () => {

    const [input, setInput] = useState('');
    const [SearchedAni, setSearchedAni] = useState([]);

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`)
        const SearchedAnime = await res.json()
        setSearchedAni(SearchedAnime.results)

    };


    return (
        <div >
            <input
                type="text"
                placeholder="Search Anime"
                onInput={(e) => setInput(e.target.value.trim().replace(/\s+/g, '&'))}
                className="p-2 w-96 focus:border-yellow-700  border-yellow-300 border-2 rounded-md  hover:border-yellow-500 focus:outline-none" />
            <button
                className="btn-next-prev ml-5"
                onClick={() => data()}
            >Search</button>
        </div>
    )
};

export default SearchInput;