const NextPrev = ({ setPage, prev }) => {
    return (
        <div>
            <div className="flex gap-4 justify-center pt-8 pb-4">
                <button
                    onClick={() => prev()}
                    className="btn-sty-1"
                >Previous</button>
                <button
                    onClick={() => setPage(c => c + 1)}
                    className="btn-sty-1"
                >Next</button>
            </div>
        </div>
    )
};

export default NextPrev;