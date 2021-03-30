import Bookmark from '../../../components/bookmark';
import Link from 'next/link';

const index = ({ genreRes }) => {

    return (
        <div className="flex justify-center pt-20 mx-40">
            <div className="grid grid-cols-2 gap-4 " >
                {
                    genreRes.anime?.map((items) => {
                        const { mal_id, synopsis, title, image_url, episodes, airing_start, score } = items;
                        return (
                            <Link href="/anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-gray-200 rounded shadow-lg p-4 mb-8 w-full cursor-pointer" >
                                    <div className="flex " >
                                        <div className="w-64">
                                            <img src={image_url} alt={title} width="230px" className="rounded-lg" />
                                        </div>
                                        <div className="pl-10">
                                            <h2 className="text-2xl py-5">{title}</h2>
                                            <h2>Episodes : {episodes}</h2>
                                            <h4>Aired : {airing_start?.slice(0, -15)} </h4>
                                            <h3 className="text-2xl font-semibold text-violet-700 pt-5">{score}</h3>
                                            <div className="w-108 pt-5">
                                                <p className="text-xs">{synopsis.slice(0, 200)}...</p>
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

export default index;



export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.jikan.moe/v3/genre/anime/${context.params.id}/1`, {
        header: 'Access-Control-Allow-Origin: *'
    });
    const genreRes = await res.json()

    return {
        props: {
            genreRes
        }
    }
}

