import React, { useEffect, useState } from "react";

const AnimeEps = ({ animeID }) => {

    const [eps, setEps] = useState([])

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/episodes`)
        const animeEpisodes = await res.json()
        setEps(animeEpisodes.episodes)

    };

    useEffect(() => {
        data();
    }, [animeID])



    return (
        <div className="w-full">
            {
                eps.length !== 0 &&
                <h1 className="text-4xl text-gray-500 pl-16 pb-16">Episodes</h1>
            }
            <div className="grid grid-cols-3 gap-4 pb-12 pl-20 ">
                {
                    eps?.map(ep => {
                        const { episode_id, title, title_japanese, title_romanji, aired } = ep;

                        return (
                            <div key={title} >
                                <div className="flex items-center pl-7 w-120 rounded-lg bg-indigo-100  p-2">
                                    <div className="text-3xl pr-4" >
                                        <h1>{episode_id}</h1>
                                    </div>
                                    <div>
                                        <h1>{title}</h1>
                                        {
                                            (title_japanese ?? title_romanji) &&
                                            <h1>{`${title_japanese}  (${title_romanji})`}</h1>

                                        }
                                        <h1>{aired?.slice(0, -15)}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
};

export default AnimeEps;
