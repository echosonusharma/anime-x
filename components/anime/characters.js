import React, { useEffect, useState } from "react";

const AnimeCharacters = ({ animeID }) => {
    const [char, setChar] = useState(null);
    const data = async () => {
        const res = await fetch(`/api/character/${animeID}`);
        const animeChar = await res.json();
        setChar(animeChar.characters);
    };

    useEffect(async () => {
        await data();
    }, [animeID]);




    return (
        <div className="py-24 ">
            {
                char?.length !== 0 &&
                <h1 className="text-4xl text-gray-500 pb-5">Characters</h1>
            }
            <div className="flex flex-row overflow-auto w-full h-96 pr-20">
                {
                    char &&
                    char.map(item => {
                        const { mal_id, image_url, name, role } = item;
                        return (
                            <div key={mal_id} >
                                <div className="w-64">
                                    <img src={image_url} width="170px" className="rounded-md" />
                                </div>
                                <h1 className='py-1 text-lg font-medium text-gray-700'>{name.split(/\s/).reverse().join(" ").replace(",", '')}</h1>
                                <h1 className="pb-2 text-lg">Role: {role}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AnimeCharacters;