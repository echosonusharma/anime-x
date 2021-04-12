import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NextPrev from './next-prev-btn';

const AnimeList = ({ anime, setPage, prev }) => (
  <div className=" pt-2 mx-5 lg:flex lg:justify-center lg:mx-48">
    <div>
      <div className="w-full lg:grid lg:grid-cols-2 lg:gap-10">
        {
          anime
          && anime.map((items) => {
            const {
              mal_id, rank, title, image_url, episodes, start_date, end_date, score,
            } = items;
            return (
              <Link href="anime/[id]" as={`/anime/${mal_id}`} key={mal_id}>
                <div className="bg-gray-200 rounded shadow-inner p-4 lg:w-full cursor-pointer">
                  <div className="flex ">
                    <Image src={image_url} alt={title} width={225} height={350} quality={60} className="rounded-lg object-cover" />
                    <div className="pl-10">
                      <h2 className="text-base lg:text-2xl font-light py-5 text-gray-700 ">{title}</h2>
                      <h3 className="text-base lg:text-3xl font-bold text-violet-700">{score === 0 ? 'Unranked' : score}</h3>
                      <h2 className="pt-4">{`Rank : ${rank}`}</h2>
                      <h2 className="py-4">
                        {episodes === null ? 'Episodes : Not Available' : `Episodes : ${episodes}`}
                      </h2>
                      {
                        (start_date || end_date)
                        && (
                          <h4>
                            {`Aired : ${start_date} to ${end_date}`}
                          </h4>
                        )
                      }
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        }
      </div>
      <NextPrev setPage={setPage} prev={prev} />
    </div>
  </div>
);

export default AnimeList;
