import Link from 'next/link';

const index = ({ genreRes }) => {

    return (
        <>
            <div className="p-10 pl-16">
                <button className="btn btn-yellow">  <Link href='/' >
                    Home
                </Link>
                </button>
            </div>
            <div className="flex justify-center w-full pt-10">
                <div className="grid grid-cols-2 gap-4 " >
                    {
                        genreRes.anime?.map((items) => {
                            const { mal_id, synopsis, title, image_url, episodes, airing_start, score } = items;
                            return (
                                <Link href="/anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                    <div className="bg-gray-200 rounded shadow-lg p-4 mb-8 w-132 cursor-pointer" >
                                        <div className="flex relative">
                                            <img src={image_url} alt={title} width="250px" className="rounded-lg" />
                                            <h3 className=" btn  w-16 text-center bg-green-400 text-white h-10 absolute top-56 left-44">{score}</h3>
                                            <div className="pl-10">
                                                <h2 className="text-2xl pb-5">{title}</h2>
                                                <h2>Episodes : {episodes}</h2>
                                                <h4>Aired : {airing_start?.slice(0, -15)} </h4>
                                                <div className="w-60 pt-4">
                                                    <p className="text-xs">{synopsis.slice(0, 180)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
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

