import Link from "next/link"
import Anime from "../../../components/anime";

const AnimePage = ({ animeInfo }) => {

    return (
        <>
            <Anime animeInfo={animeInfo} />
            <div className="p-10 pl-16">
                <button className="btn btn-yellow">  <Link href='/' >
                    Go Back
                </Link>
                </button>
            </div>

        </>
    )
};

export default AnimePage;


export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.jikan.moe/v3/anime/${context.params.id}`, {
        mode: 'no-cors'
    })
    const animeInfo = await res.json()

    return {
        props: {
            animeInfo
        }
    }
}

