import React, { useState } from 'react';
import Link from 'next/link';
import useStore from '../../store/store';

const SearchInput = () => {
  const [input, setInput] = useState('');

  const data = useStore((state) => state.setSearchResult);

  const getVal = async () => {
    const x = await fetch(`https://animex-backend.herokuapp.com/api/anime/search/${input}`);
    const res = await x.json();
    data(res);
  };

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      getVal();
    }
  };

  return (
    <div className="flex w-full sm:w-full lg:w-full">
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Search Anime"
          onInput={(e) => setInput(e.target.value.trim().replace(/\s+/g, '&'))}
          onKeyDown={handleKeypress}
          className="p-2 pl-5 border-gray-500 border-2 rounded-full focus:outline-none focus:border-gray-600 lg:w-120"
        />
        <button type="button" className="btn-sty-1 lg:w-24" onClick={getVal}><Link href="/search"> Search</Link></button>
      </div>
    </div>
  );
};

export default SearchInput;
