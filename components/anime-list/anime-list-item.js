import Link from 'next/link';
import Bookmark from '../bookmark';
import NextPrev from './next-prev-btn';

const AnimeList = ({ anime, setPage, prev }) => {

    return (
        <div className="flex justify-center pt-2 mx-48">
            <div>
                <div className="grid grid-cols-2 gap-10 " >
                    {
                        anime &&
                        anime.map((items) => {
                            const { mal_id, rank, title, image_url, episodes, start_date, end_date, score } = items;
                            return (
                                <Link href="anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                    <div className="bg-gray-200 rounded shadow-inner p-4 w-full cursor-pointer" >
                                        <div className="flex ">
                                            <img src={image_url} alt={title} width="240px" className="rounded-lg" />
                                            <div className="pl-10">
                                                <h2 className="text-2xl font-light py-5 text-gray-700 ">{title}</h2>
                                                <h3 className="text-3xl font-bold text-violet-700">{score === 0 ? "Unranked" : score}</h3>
                                                <h2 className="pt-4">Rank : {rank}</h2>
                                                <h2 className="py-4">Episodes : {episodes === null ? "Not Available" : episodes}</h2>
                                                {
                                                    (start_date || end_date) &&
                                                    <h4>Aired : {start_date} to {end_date}</h4>
                                                }
                                                <Bookmark />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <NextPrev setPage={setPage} prev={prev} />
            </div>
        </div>
    )
};

export default AnimeList;