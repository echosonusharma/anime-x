import AnimeCharacters from "./anime/characters";
import AnimeEps from "./anime/episodes";
import AnimeRecommendations from "./anime/recommendations";
import Stats from "./anime/stats";
import Link from 'next/link';
import Reviews from "./anime/reviews";


const Anime = ({ animeInfo }) => {
    const { mal_id, image_url, title, title_japanese, type, episodes, status, aired, duration, rating, score, synopsis, studios, genres } = animeInfo;

    return (
        <>
            <div className="pt-40 pl-16 flex gap-10">
                <div>
                    <img src={image_url} width="250px" />
                </div>
                <div className="flex gap-5">
                    <div>
                        <div className="flex gap-2">
                            <h1 className="text-xl text-gray-700">{title}</h1>
                            <h2 className="text-lg text-gray-700">{title_japanese}</h2>
                        </div>
                        <div className="btn w-16 text-center bg-violet-light opacity-90 text-white h-10 absolute top-56 left-44">
                            <h1 className="text-lg">{score}</h1>
                        </div>
                        <div className="pt-7">
                            <div>
                                {
                                    studios?.map(item => {
                                        const { name, mal_id } = item;
                                        return (
                                            <div key={mal_id}>
                                                <h1 className=""> studio : {name}</h1>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <h1>Type: {type}</h1>
                            <h1>rating : {rating}</h1>
                            <h1>Status: {status}</h1>
                            <h1>Aired: {aired.string}</h1>
                            <h1>Episodes: {episodes}</h1>
                            <h1>duration: {duration}</h1>
                        </div>
                    </div>
                    <Stats animeID={mal_id} />
                </div>
            </div>
            <div>
                <div className="flex gap-3 pl-16">
                    {
                        genres?.map(item => {
                            const { mal_id, name } = item;
                            return (
                                <Link href="/genre/[id]" as={`/genre/${mal_id}`} key={mal_id} >
                                    <h1 className="btn-select btn-yellow cursor-pointer">{name}</h1>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>

            <div className="w-1/2 py-16 pl-16">
                <h1 className="text-3xl text-gray-500 pb-5">Synopsis</h1>
                <p className="pl-4">{synopsis}</p>
            </div>
            <AnimeCharacters animeID={mal_id} />
            <AnimeEps animeID={mal_id} />
            <AnimeRecommendations animeID={mal_id} />
            <Reviews animeID={mal_id} />
        </>
    )
};

export default Anime;