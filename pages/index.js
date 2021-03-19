import React, { useEffect, useState } from "react";
import AnimeList from "../components/anime-list";
import NextPrev from "../components/next-prev";
import SearchOptions from "../components/search-by-buttons";
// import InfiniteScroll from 'react-infinite-scroll-component';


const index = () => {

  const [options, setOptions] = useState('bypopularity');
  const [page, setPage] = useState(1);
  const [anime, setAnime] = useState({});

  const prev = () => {
    page === 1 ? setPage(page) : setPage(page - 1)
  }

  const mainURl = `https://api.jikan.moe/v3/top/anime/${page}/${options}`;

  useEffect(() => {
    const getAnime = async () => {
      const x = await fetch(mainURl);
      const res = await x.json();
      setAnime(res);
    }

    getAnime();

  }, [mainURl]);


  return (
    <main >
      <div className="flex">
        <div className="fixed z-10 bg-white w-full">
          <NextPrev setPage={setPage} prev={prev} />
          <SearchOptions setOptions={setOptions} setPage={setPage} />
        </div>
        <div className="flex justify-center w-full pt-44">
          <div className="w-5/12 min-w-min">
            <AnimeList anime={anime.top} />
          </div>
        </div>
      </div>
    </main>
  )
};

export default index;