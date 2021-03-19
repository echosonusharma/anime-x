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
        <>
            {rec &&
                rec.map(item => {
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

        </>
    )
};

export default AnimeRecommendations;
