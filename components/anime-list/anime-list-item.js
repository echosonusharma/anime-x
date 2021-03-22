import Link from 'next/link';


const AnimeList = ({ anime }) => {

    return (
        <div className="flex justify-center w-full pt-44">
            <div className="grid grid-cols-2 gap-4 " >
                {
                    anime?.map((items) => {
                        const { mal_id, rank, title, image_url, episodes, start_date, end_date, score } = items;
                        return (
                            <Link href="anime/[id]" as={`/anime/${mal_id}`} key={mal_id} >
                                <div className="bg-gray-200 rounded shadow-lg p-4 mb-8 w-132 cursor-pointer" >
                                    <div className="flex relative">
                                        <img src={image_url} alt={title} width="200px" className="rounded-lg" />
                                        <h3 className=" btn  w-16 text-center bg-green-400 text-white h-10 absolute top-56 left-44">{score}</h3>
                                        <div className="pl-10">
                                            <h2 className="text-2xl pb-5">{title}</h2>
                                            <h2>Episodes : {episodes}</h2>
                                            <h2>Rank : {rank}</h2>
                                            {
                                                (start_date || end_date) &&
                                                <h4>Aired : {start_date} to {end_date}</h4>

                                            }
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

export default AnimeList;