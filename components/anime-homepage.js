import React, { useEffect, useState } from "react";
import AnimeList from "./anime-list/anime-list-item";
import SearchOptions from "./anime-list/search-category";
import SearchInput from "./anime-list/search-input";

import useFetch from '../hooks/useFetch'

const AnimeHomepage = () => {

    const [options, setOptions] = useState('bypopularity');
    const [page, setPage] = useState(1);
    // const [anime, setAnime] = useState([]);



    const [changeURL, setChangeURL] = useState(true)

    const prev = () => {
        page === 1 ? setPage(page) : setPage(page - 1)
    };

    const baseURL = `https://api.jikan.moe/v3/top/anime/${page}`
    const optionsURl = `/${options}`;

    let URL = "";
    changeURL ? URL = baseURL + optionsURl : URL = baseURL;


    // useEffect(() => {
    //     // const getAnime = async () => {
    //     //     const x = await fetch(URL, {
    //     //         header: 'Access-Control-Allow-Origin: *'
    //     //     });
    //     //     const res = await x.json();
    //     //     setAnime(res);
    //     // }

    //     getAnime();

    // }, [URL]);

    const { data, loading } = useFetch(URL);


    return (
        <main >
            <div className="fixed z-10 bg-white w-full">
                <div className="flex flex-col justify-center items-center">
                    <SearchInput />
                    <SearchOptions setOptions={setOptions} setPage={setPage} setChangeURL={setChangeURL} />
                </div>
            </div>
            <AnimeList anime={data?.top} setPage={setPage} prev={prev} />
        </main>
    )
};

export default AnimeHomepage;