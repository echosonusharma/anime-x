import React from "react";
import AnimeEps from "./anime-ep";
import AnimeRecommendations from "./anime-recommendations";


const Anime = ({ animeInfo }) => {
    const { mal_id, image_url, title, title_japanese, type, episodes, status, aired, duration, rating, score, synopsis } = animeInfo;


    return (
        <div>
            <div className="pt-40 pl-16 flex gap-10">
                <img src={image_url} width="250px" />
                <div>
                    <h1>{title}</h1>
                    <h2>{title_japanese}</h2>
                    <div className="pt-5">
                        <h1>score: {score}</h1>
                    </div>
                    <div className="pt-7">
                        <h1>Type: {type}</h1>
                        <h1>rating : {rating}</h1>
                        <h1>Status: {status}</h1>
                        <h1>Aired: {aired.string}</h1>
                        <h1>Episodes: {episodes}</h1>
                        <h1>duration: {duration}</h1>
                    </div>
                </div>
            </div>
            <div className="w-1/2 py-16 pl-16">
                <p>{synopsis}</p>
            </div>
            <AnimeEps animeID={mal_id} />
            <div className="flex overflow-auto w-3/4 ml-16">
                <AnimeRecommendations animeID={mal_id} />
            </div>
        </div>
    )
};

export default Anime;