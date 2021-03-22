const SearchCategory = ({ setOptions, setPage, setChangeURL }) => {

    const setProps = () => {
        setPage(1);
        setChangeURL(true);
    };


    return (
        <div className="flex justify-center content-center pb-7">
            <div className="flex gap-4">
                <button onClick={() => { setChangeURL(false), setPage(1) }}
                    className="btn-select btn-yellow">All Anime</button>
                <button onClick={() => { setOptions('bypopularity'), setProps() }}
                    className="btn-select btn-yellow">Most popular</button>
                <button onClick={() => { setOptions('airing'), setProps() }}
                    className="btn-select btn-yellow">Top airing</button>
                <button onClick={() => { setOptions('upcoming'), setProps() }}
                    className="btn-select btn-yellow">Top upcoming</button>
                <button onClick={() => { setOptions('tv'), setProps() }}
                    className="btn-select btn-yellow">Top Tv Series</button>
                <button onClick={() => { setOptions('movie'), setProps() }}
                    className="btn-select btn-yellow">Top movie</button>
                <button onClick={() => { setOptions('ova'), setProps() }}
                    className="btn-select btn-yellow">Top ova</button>
                <button onClick={() => { setOptions('special'), setProps() }}
                    className="btn-select btn-yellow">Top special</button>
                <button onClick={() => { setOptions('favorite'), setProps() }}
                    className="btn-select btn-yellow">Most Favorite</button>
            </div>
        </div>
    )
};

export default SearchCategory;