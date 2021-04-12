import React from 'react';

const SearchCategory = ({ setOptions, setPage, setChangeURL }) => {
  const setProps = () => {
    setPage(1);
    setChangeURL(true);
  };

  return (
    <div className="pb-7 grid-flow-col grid-cols-3 grid-rows-3 lg:flex lg:justify-center lg:content-center ">
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => { setChangeURL(false); setPage(1); }}
          className="btn-select btn-indigo"
        >
          All Anime
        </button>
        <button
          type="button"
          onClick={() => { setOptions('bypopularity'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Most popular
        </button>
        <button
          type="button"
          onClick={() => { setOptions('airing'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top airing
        </button>
        <button
          type="button"
          onClick={() => { setOptions('upcoming'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top upcoming
        </button>
        <button
          type="button"
          onClick={() => { setOptions('tv'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top Tv Series
        </button>
        <button
          type="button"
          onClick={() => { setOptions('movie'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top movie
        </button>
        <button
          type="button"
          onClick={() => { setOptions('ova'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top ova
        </button>
        <button
          type="button"
          onClick={() => { setOptions('special'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Top special
        </button>
        <button
          type="button"
          onClick={() => { setOptions('favorite'); setProps(); }}
          className="btn-select btn-indigo"
        >
          Most Favorite
        </button>
      </div>
    </div>
  );
};

export default SearchCategory;
