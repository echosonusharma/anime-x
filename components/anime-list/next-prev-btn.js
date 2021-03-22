import SearchAnime from "./search-input";

const NextPrev = ({ setPage, prev }) => {

    return (
        <div>
            <div className="flex gap-4 justify-center pt-8 pb-4">
                <button
                    onClick={() => prev()}
                    className="btn-next-prev"
                >Previous</button>
                <button
                    onClick={() => setPage(c => c + 1)}
                    className="btn-next-prev"
                >Next</button>
                <SearchAnime />
            </div>
        </div>
    )
};

export default NextPrev;