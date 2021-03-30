import React, { useEffect, useState } from "react";
import Link from 'next/link';


const AnimeRecommendations = ({ animeID }) => {

    const [rec, setRec] = useState(null)

    const data = async () => {
        const res = await fetch(`/api/recommendations/${animeID}`);
        const animeRec = await res.json();
        setRec(animeRec.recommendations);
    };

    useEffect(async () => {
        await data();
    }, [animeID]);


    return (
        <div className="pb-24">
            {
                rec?.length !== 0 &&
                <h1 className="text-4xl text-gray-500 pb-20">Recommendations</h1>
            }

            <div className="flex overflow-auto w-full pr-20">
                {rec &&
                    rec.map(item => {
                        const { image_url, title, mal_id } = item;
                        return (
                            <Link href="[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-gray-100 rounded-xl mr-7  pt-7 cursor-pointer mb-5">
                                    <div className="w-72 flex justify-center items-center">
                                        <img src={image_url} width="250px" className="rounded-md" />
                                    </div>
                                    <h1 className="text-center mt-3 text-lg font-medium px-4 text-gray-600">{title}</h1>
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
