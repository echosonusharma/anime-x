import Anime from "../../../components/anime";

const AnimePage = ({ animeInfo }) => {

    return (
        <Anime animeInfo={animeInfo} />
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

