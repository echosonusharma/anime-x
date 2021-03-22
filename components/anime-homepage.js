import React, { useEffect, useState } from "react";
import AnimeList from "./anime-list/anime-list-item";
import NextPrev from "./anime-list/next-prev-btn";
import SearchOptions from "./anime-list/search-category";

const AnimeHomepage = () => {

    const [options, setOptions] = useState('bypopularity');
    const [page, setPage] = useState(1);
    const [anime, setAnime] = useState([]);



    const [changeURL, setChangeURL] = useState(true)

    const prev = () => {
        page === 1 ? setPage(page) : setPage(page - 1)
    };

    const baseURL = `https://api.jikan.moe/v3/top/anime/${page}`
    const optionsURl = `/${options}`;

    let URL = "";
    changeURL ? URL = baseURL + optionsURl : URL = baseURL;


    useEffect(() => {
        const getAnime = async () => {
            const x = await fetch(URL);
            const res = await x.json();
            setAnime(res);
        }

        getAnime();

    }, [URL]);







    return (
        <main >
            <div className="flex">
                <div className="fixed z-10 bg-white w-full">
                    <NextPrev setPage={setPage} prev={prev} />
                    <SearchOptions setOptions={setOptions} setPage={setPage} setChangeURL={setChangeURL} />
                </div>
                <AnimeList anime={anime.top} />
            </div>
        </main>
    )
};

export default AnimeHomepage;