/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useStore from '../store/store';

const Planed = () => {
  const data = useStore((state) => state.auth);
  const [info, setInfo] = useState(null);

  const handelGetPlaned = async () => {
    const x = await fetch('https://animex-backend.herokuapp.com/api/anime/get_Planed', {
      method: 'POST',
      body: JSON.stringify({
        creator_id: data.auth_id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await x.json();
    setInfo(res);
  };

  // eslint-disable-next-line no-unused-expressions
  data.auth_id && (
    useEffect(() => {
      handelGetPlaned();
    }, []));

  if (!data.auth_id) {
    return (
      <div className="mx-48 pt-52">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-5">
            <Image src="/static/warning.svg" width={50} height={50} priority="eager" />
            <h1 className="text-3xl text-gray-500 font-semibold">Login to View Plan to Watch</h1>
          </div>
        </div>
      </div>
    );
  }
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="pt-20 mx-5 lg:pl-7 lg:mx-48">
      <div className="flex items-center justify-start py-4">
        <input
          type="text"
          placeholder="search by title"
          className="p-2 pl-5 w-2/6  border-gray-500 border-2 rounded-full focus:outline-none focus:border-gray-600"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="pt-5 lg:grid lg:grid-cols-5 lg:gap-y-10">
        {
          // eslint-disable-next-line consistent-return
          info?.filter((val) => {
            if (searchTerm === '') {
              return val;
            } if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((item) => {
            const {
              id, mal_id, score, title, anime_url,
            } = item;

            return (
              <Link href="anime/[id]" as={`/anime/${mal_id}`} key={id}>
                <div className="mb-5 p-5 bg-gray-300 rounded-lg w-60 cursor-pointer">
                  <Image src={anime_url} width={190} height={260} quality={50} className="object-cover rounded-lg" />
                  <h1 className="text-lg font-bold text-violet-600 top-5">{score}</h1>
                  <h1 className="text-base text-gray-700">{title}</h1>
                </div>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Planed;
