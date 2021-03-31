import useStore from '../../store/store';
import Link from 'next/link';
import { useState } from 'react';

const SearchInput = () => {
    const [input, setInput] = useState("");

    const handleKeypress = event => {
        if (event.keyCode == 13) {
            getVal()
        }
    };

    const data = useStore(state => state.setSearchResult)

    const getVal = async () => {
        const x = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`);
        const res = await x.json();
        data(res);
    }



    return (
        <div className="flex justify-end w-full">
            <div className="flex gap-5 " >
                <input
                    type="text"
                    placeholder="Search Anime"
                    onInput={(e) => setInput(e.target.value.trim().replace(/\s+/g, '&'))}
                    onKeyDown={handleKeypress}
                    className="p-2 pl-5 border-gray-900 border-2 rounded-full focus:outline-none focus:border-gray-600" />
                <button className="btn-sty-1" onClick={getVal}><Link href="/search"> Search</Link></button>
            </div>
        </div>
    )
};

export default SearchInput;