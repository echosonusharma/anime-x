import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Reviews = ({ animeID }) => {
  const [rew, setRew] = useState(null);

  useEffect(() => {
    const data = async () => {
      const response = await fetch(`https://animex-backend.herokuapp.com/api/anime/reviews/${animeID}`);
      const animeRew = await response.json();
      setRew(animeRew.reviews);
    };
    data();
  }, [animeID]);

  function ReadMore({ children }) {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);

    const resultingString = isTruncated ? text.slice(0, 400) : text.split('\\n').map((str) => <p>{str.endsWith('\\n') ? str.slice(0, -1) : str}</p>);

    const onEnter = (e) => {
      if (e.keyCode === 13) {
        setIsTruncated(!isTruncated);
      }
    };

    return (
      <div className="text-sm">
        { resultingString}
        <span
          role="button"
          tabIndex={0}
          onKeyPress={onEnter}
          className="text-violet-700 cursor-pointer focus:outline-none"
          onClick={() => setIsTruncated(!isTruncated)}
        >
          {isTruncated ? ' ...Read more' : ' Read less'}
        </span>
      </div>
    );
  }

  return (
    <div className="py-11">
      { rew
        && (rew.length !== 0)
        && <h1 className="text-4xl text-gray-500 pb-14">Reviews</h1>}
      { rew
        && rew.map((item) => {
          const {
            mal_id, date, reviewer, content,
          } = item;
          return (
            <div key={mal_id} className=" rounded-lg bg-indigo-100  p-4 mb-10 w-full">
              <div className="flex gap-4 items-center pb-5">
                <Image
                  className="rounded-full w-28 h-28 p-3 object-cover"
                  src={reviewer.image_url}
                  width={80}
                  height={80}
                  quality={30}
                />
                <div>
                  <a href={reviewer.url} target="_blank" rel="noreferrer"><h1>{reviewer.username}</h1></a>
                  <h1>{date?.slice(0, -15)}</h1>
                </div>
              </div>
              <div className="w-11/12">
                <ReadMore>
                  {content}
                </ReadMore>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Reviews;
