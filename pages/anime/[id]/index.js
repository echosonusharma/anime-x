import Link from "next/link"
import Anime from "../../../components/anime";

const AnimePage = ({ animeInfo }) => {

    return (
        <>
            <div className="pl-16 pt-5">
                <button className="btn bg-indigo-900 text-white">
                    <Link href='/' className="p-10">
                        Home </Link>
                </button>
            </div>
            <Anime animeInfo={animeInfo} />
        </>
    )
};

export default AnimePage;


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.jikan.moe/v3/anime/${context.params.id}`)
    const animeInfo = await res.json()

    return {
        props: {
            animeInfo
        }
    }
}

