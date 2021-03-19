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
        <>
            { eps &&
                eps.map(ep => {
                    const { episode_id, title, title_japanese, title_romanji, aired } = ep;

                    return (
                        <>
                            <div key={episode_id}>
                                <div className="flex pb-6 pl-7 ">
                                    <div className="text-3xl p-5" >
                                        <h1>{episode_id}</h1>
                                    </div>
                                    <div>
                                        <h1>{title}</h1>
                                        {
                                            (title_japanese || title_romanji) &&
                                            <h1>{`${title_japanese}  (${title_romanji})`}</h1>

                                        }

                                        {
                                            aired &&
                                            <h1>{aired.slice(0, -15)}</h1>
                                        }

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })

            }
        </>
    )
};

export default AnimeEps;
