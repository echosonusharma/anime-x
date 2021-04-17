import React, { useState } from 'react';
import Image from 'next/image';
import AnimeList from './anime-list/anime-list-item';
import SearchCategory from './anime-list/search-category';
import useFetch from '../hooks/useFetch';
import useStore from '../store/store';

const AnimeHomepage = () => {
  const animeStore = useStore((state) => state.setAnime);
  const animeArray = useStore((state) => state.anime);

  const [options, setOptions] = useState('bypopularity');
  const [page, setPage] = useState(1);

  const [changeURL, setChangeURL] = useState(true);

  const prev = () => {
    if (page === 1) {
      return setPage(page);
    }
    return setPage(page - 1);
  };

  const baseURL = `https://animex-backend.herokuapp.com/api/anime/all/${page}`;
  const optionsURl = `https://animex-backend.herokuapp.com/api/anime/top/${page}/${options}`;

  let URL = '';
  // eslint-disable-next-line no-unused-expressions
  changeURL ? URL = optionsURl : URL = baseURL;

  const { data, loading } = useFetch(URL);
  animeStore(data?.top);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-56">
        <div className="flex gap-5 items-center">
          <Image src="/static/loading.svg" height={50} width={50} className="animate-spin" priority="eager" />
          <h1 className="text-3xl text-gray-500 font-medium">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full">
      <div className="flex lg:flex-col lg:items-start pt-5 lg:pt-20 mx-5 lg:mx-48">
        <SearchCategory setOptions={setOptions} setPage={setPage} setChangeURL={setChangeURL} />
      </div>
      <AnimeList anime={animeArray} setPage={setPage} prev={prev} />
    </main>
  );
};

export default AnimeHomepage;
