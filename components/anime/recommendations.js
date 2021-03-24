import React, { useEffect, useState } from "react";
import Link from 'next/link';


const AnimeRecommendations = ({ animeID }) => {

    const [rec, setRec] = useState([])

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/recommendations`, {
            header: 'Access-Control-Allow-Origin: *'
        })
        const animeRec = await res.json()
        setRec(animeRec.recommendations)
    };

    useEffect(() => {
        data();
    }, [animeID])

    return (
        <div className="pb-24">
            {
                rec.length !== 0 &&
                <h1 className="text-5xl text-gray-500 pb-20 pl-16">Recommendations</h1>
            }

            <div className="flex overflow-auto w-3/4 ml-10 h-auto">
                {
                    rec?.map(item => {
                        const { image_url, title, mal_id } = item;
                        return (
                            <Link href="[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-indigo-100 rounded-xl pt-7 ml-7 cursor-pointer">
                                    <div className="w-64 flex justify-center items-center">
                                        <img src={image_url} width="200px" className="rounded-md" />
                                    </div>
                                    <h1 className="pl-7">{title}</h1>
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
