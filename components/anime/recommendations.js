import React, { useEffect, useState } from "react";
import Link from 'next/link';


const AnimeRecommendations = ({ animeID }) => {

    const [rec, setRec] = useState([])

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/recommendations`)
        const animeRec = await res.json()
        setRec(animeRec.recommendations)
    };

    useEffect(() => {
        data();
    }, [animeID])

    return (
        <div className="cursor-pointer">
            {
                rec.length !== 0 &&
                <h1 className="text-5xl text-gray-500 pb-5 pl-16">Recommendations</h1>
            }

            <div className="flex overflow-auto w-3/4 ml-20">
                {
                    rec?.map(item => {
                        const { image_url, title, mal_id } = item;
                        return (
                            <Link href="[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div>
                                    <div className="w-96">
                                        <img src={image_url} width="200px" />
                                    </div>
                                    <h1>{title}</h1>
                                </div>
                            </Link>
                        )

                    })

                }
            </div>

        </div>
    )
};

export default AnimeRecommendations;
