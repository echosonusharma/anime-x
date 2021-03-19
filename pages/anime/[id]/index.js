import Link from "next/link"
import Anime from "../../../components/anime";

const AnimePage = ({ animeInfo }) => {

    return (
        <>
            <Anime animeInfo={animeInfo} />

            <div className="pl-16 pb-24">
                <Link href='/'>Go Back</Link>
            </div>

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

