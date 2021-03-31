import useStore from '../../store/store';
import Link from 'next/link';
import Image from 'next/image';
import Bookmark from '../../components/bookmark';

const AnimeSearch = () => {
    const data = useStore(state => state.searchResult)

    if (data.status === 404) {
        return (
            <div>
                <h1>{data.message}</h1>
            </div>
        )
    }
    if (data.status >= 400) {
        return (
            <div>
                <h1>Unable to fetch data</h1>
            </div>
        )
    }


    return (
        <div className="flex justify-center pt-10 mx-40">
            <div className="grid grid-cols-2 gap-4 " >
                {
                    data.results?.map((items) => {
                        const { mal_id, synopsis, title, image_url, episodes, start_date, end_date, score } = items;
                        return (
                            <Link href="anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-gray-200 rounded shadow-lg p-4 mb-8 w-full cursor-pointer" >
                                    <div className="flex gap-1 ">
                                        <Image src={image_url} alt={title} width={230} height={360} quality={30} className="rounded-lg" />
                                        <div className="pl-10">
                                            <h2 className="text-2xl pb-5">{title}</h2>
                                            <h2>Episodes : {episodes}</h2>
                                            {
                                                (start_date || end_date) &&
                                                <h4>Aired : {start_date?.slice(0, -15)} to {end_date?.slice(0, -15)}</h4>

                                            }
                                            <h3 className="text-2xl font-semibold text-violet-700 pt-5">{score}</h3>
                                            <div className="w-108 pt-3">
                                                <p className="text-xs">{synopsis}</p>
                                            </div>
                                            <Bookmark />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default AnimeSearch;

