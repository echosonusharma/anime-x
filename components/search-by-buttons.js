import React from "react";

const SearchOptions = ({ setOptions, setPage }) => {




    return (
        <div className="flex justify-center content-center pb-7">
            <div className="flex gap-4">
                <button onClick={() => { setOptions('bypopularity'), setPage(1) }}
                    className="btn btn-yellow">by-popularity</button>
                <button onClick={() => { setOptions('airing'), setPage(1) }}
                    className="btn btn-yellow">airing</button>
                <button onClick={() => { setOptions('upcoming'), setPage(1) }}
                    className="btn btn-yellow">upcoming</button>
                <button onClick={() => { setOptions('tv'), setPage(1) }}
                    className="btn btn-yellow">tv</button>
                <button onClick={() => { setOptions('movie'), setPage(1) }}
                    className="btn btn-yellow">movie</button>
                <button onClick={() => { setOptions('ova'), setPage(1) }}
                    className="btn btn-yellow">ova</button>
                <button onClick={() => { setOptions('special'), setPage(1) }}
                    className="btn btn-yellow">special</button>
                <button onClick={() => { setOptions('favorite'), setPage(1) }}
                    className="btn btn-yellow">favorite</button>
            </div>
        </div>
    )
};

export default SearchOptions;