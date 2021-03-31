const SearchCategory = ({ setOptions, setPage, setChangeURL }) => {

    const setProps = () => {
        setPage(1);
        setChangeURL(true);
    };


    return (
        <div className="flex justify-center content-center pb-7">
            <div className="flex gap-4">
                <button onClick={() => { setChangeURL(false), setPage(1) }}
                    className="btn-select btn-indigo">All Anime</button>
                <button onClick={() => { setOptions('bypopularity'), setProps() }}
                    className="btn-select btn-indigo">Most popular</button>
                <button onClick={() => { setOptions('airing'), setProps() }}
                    className="btn-select btn-indigo">Top airing</button>
                <button onClick={() => { setOptions('upcoming'), setProps() }}
                    className="btn-select btn-indigo">Top upcoming</button>
                <button onClick={() => { setOptions('tv'), setProps() }}
                    className="btn-select btn-indigo">Top Tv Series</button>
                <button onClick={() => { setOptions('movie'), setProps() }}
                    className="btn-select btn-indigo">Top movie</button>
                <button onClick={() => { setOptions('ova'), setProps() }}
                    className="btn-select btn-indigo">Top ova</button>
                <button onClick={() => { setOptions('special'), setProps() }}
                    className="btn-select btn-indigo">Top special</button>
                <button onClick={() => { setOptions('favorite'), setProps() }}
                    className="btn-select btn-indigo">Most Favorite</button>
            </div>
        </div>
    )
};

export default SearchCategory;