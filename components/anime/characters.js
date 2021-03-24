import React, { useEffect, useState } from "react";

const AnimeCharacters = ({ animeID }) => {
    const [char, setChar] = useState([])
    const data = async () => {
        const res = await fetch(`https://api.jikan.moe/v3/anime/${animeID}/characters_staff`, {
            header: 'Access-Control-Allow-Origin: *'
        });
        const animeChar = await res.json();
        setChar(animeChar.characters);
    };

    useEffect(() => {
        data();
    }, [animeID])


    return (
        <div className="py-24">
            {
                char.length !== 0 &&
                <h1 className="text-5xl text-gray-500 pb-5 pl-16">Characters</h1>
            }
            <div className="flex overflow-auto w-3/4 ml-20">
                {
                    char?.map(item => {
                        const { mal_id, image_url, name, role } = item;
                        return (
                            <div key={mal_id} className="p-2">
                                <div className="w-80 ">
                                    <img src={image_url} width="170px" className="rounded-md" />
                                </div>
                                <h1>{name.split(/\s/).reverse().join(" ").replace(",", '')}</h1>
                                <h1>Role: {role}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AnimeCharacters;