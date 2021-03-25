import React, { useState, useEffect } from "react";
import useStore from '../../store/store';
import Link from 'next/link';
import useFetch from '../../hooks/useFetch'

const AnimeSearch = () => {

    const input = useStore(state => state.input);

    // const [search, setSearch] = useState([]);

    // const data = async () => {
    //     const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`)
    //     const searchRes = await res.json()
    //     setSearch(searchRes.results)

    // };

    // useEffect(() => {
    //     data();
    // }, [])

    const { data, loading } = useFetch(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`)

    return (
        <>
            <div className="p-10 pl-16">
                <button className="btn bg-indigo-800 text-white">  <Link href='/' >
                    Home
                </Link>
                </button>
            </div>
            <div className="flex justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-4 " >
                    {
                        data.results?.map((items) => {
                            const { mal_id, synopsis, title, image_url, episodes, start_date, end_date, score } = items;
                            return (
                                <Link href="anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                    <div className="bg-gray-200 rounded shadow-lg p-4 mb-8 w-156 cursor-pointer" >
                                        <div className="flex gap-1 ">
                                            <img src={image_url} alt={title} width="250px" className="rounded-lg" />
                                            <div className="pl-10">
                                                <h2 className="text-2xl pb-5">{title}</h2>
                                                <h2>Episodes : {episodes}</h2>
                                                {
                                                    (start_date || end_date) &&
                                                    <h4>Aired : {start_date?.slice(0, -15)} to {end_date?.slice(0, -15)}</h4>

                                                }
                                                <h3 className=" btn  w-16 text-center bg-purple-600 text-white h-10 my-3">{score}</h3>
                                                <div className="w-48 pt-3">
                                                    <p className="text-xs">{synopsis}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
};

export default AnimeSearch;

