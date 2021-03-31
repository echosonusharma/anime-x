import { useState } from "react";
import AnimeList from "./anime-list/anime-list-item";
import SearchOptions from "./anime-list/search-category";

import useFetch from '../hooks/useFetch'
import useStore from "../store/store";

const AnimeHomepage = () => {
    const animeStore = useStore(state => state.setAnime);
    const animeArray = useStore(state => state.anime);

    const [options, setOptions] = useState('bypopularity');
    const [page, setPage] = useState(1);

    const [changeURL, setChangeURL] = useState(true)

    const prev = () => {
        page === 1 ? setPage(page) : setPage(page - 1)
    };

    const baseURL = `https://api.jikan.moe/v3/top/anime/${page}`
    const optionsURl = `/${options}`;

    let URL = "";
    changeURL ? URL = baseURL + optionsURl : URL = baseURL;


    const { data, loading } = useFetch(URL);
    animeStore(data.top)



    return (
        <main className="w-full">
            <div className="flex flex-col items-start pt-20 mx-48">
                <SearchOptions setOptions={setOptions} setPage={setPage} setChangeURL={setChangeURL} />
            </div>
            <AnimeList anime={animeArray} setPage={setPage} prev={prev} />
        </main >
    )
};

export default AnimeHomepage;