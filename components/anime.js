import AnimeCharacters from "./anime/characters";
import AnimeEps from "./anime/episodes";
import AnimeRecommendations from "./anime/recommendations";
import Stats from "./anime/stats";
import Link from 'next/link';
import Reviews from "./anime/reviews";


const Anime = ({ animeInfo }) => {
    const { mal_id, image_url, title, title_japanese, type, episodes, status, aired, duration, rating, score, synopsis, studios, genres } = animeInfo;

    return (
        <div >

            <div className="mx-32">
                <div className="flex mt-20 gap-5">
                    <div className=" flex gap-10 w-1/2 pb-5  bg-indigo-100 rounded-xl">
                        <div className="pl-10 py-10">
                            <img src={image_url} width="250px" className="rounded-lg" />
                        </div>
                        <div className="text-gray-600 text-lg pt-10">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl text-gray-700 font-semibold">{title}</h1>
                                <h2 className="text-lg text-gray-700">{title_japanese}</h2>
                            </div>
                            <div className="btn w-16 text-center bg-purple-600 mt-1 text-white">
                                <h1 className="text-lg">{score}</h1>
                            </div>
                            <div className="pt-4">
                                <div className="flex gap-20 ">
                                    <div>
                                        {
                                            studios?.map(item => {
                                                const { name, mal_id } = item;
                                                return (
                                                    <div key={mal_id}>
                                                        <h1 className=""> Studio : {name}</h1>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <h1>Type: {type}</h1>
                                </div>

                                <h1 className="py-4">Rating : {rating}</h1>
                                <h1>Status: {status}</h1>

                                <h1 className="py-4">Aired: {aired.string}</h1>
                                <div className="flex gap-5">
                                    <h1>Episodes: {episodes}</h1>
                                    <h1>Duration: {duration}</h1>
                                </div>

                                <div className="grid grid-cols-4 gap-2 pt-5 ">
                                    {
                                        genres?.map(item => {
                                            const { mal_id, name } = item;
                                            return (
                                                <Link href="/genre/[id]" as={`/genre/${mal_id}`} key={mal_id} >
                                                    <h1 className="btn-select btn-yellow cursor-pointer text-center">{name}</h1>
                                                </Link>
                                            )
                                        })

                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <Stats animeID={mal_id} />
                </div>
            </div>

            <div className="w-4/5 py-16 mx-32">
                <h1 className="text-3xl text-gray-500 pb-5">Synopsis</h1>
                <p className="pl-4">{synopsis}</p>
            </div>
            <div className="mx-32">
                <AnimeCharacters animeID={mal_id} />
                <AnimeEps animeID={mal_id} />
                <AnimeRecommendations animeID={mal_id} />
                <Reviews animeID={mal_id} />
            </div>
        </div>
    )
};

export default Anime;