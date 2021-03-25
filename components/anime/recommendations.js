import React, { useEffect, useState } from "react";
import Link from 'next/link';


const AnimeRecommendations = ({ animeID }) => {

    const [rec, setRec] = useState([])

    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/recommendations`);
        const animeRec = await res.json();
        setRec(animeRec.recommendations);
    };

    useEffect(() => {
        data();
    }, [animeID])

    return (
        <div className="pb-24 px-14">
            {
                rec.length !== 0 &&
                <h1 className="text-4xl text-gray-500 pb-20 pl-1">Recommendations</h1>
            }

            <div className="flex overflow-auto  w-full pr-20">
                {
                    rec?.map(item => {
                        const { image_url, title, mal_id } = item;
                        return (
                            <Link href="[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-indigo-50 rounded-xl ml-7  pt-7 cursor-pointer mb-5">
                                    <div className="w-72 h-72 flex justify-center items-center">
                                        <img src={image_url} width="200px" className="rounded-md" />
                                    </div>
                                    <h1 className="px-11 mt-3">{title}</h1>
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
