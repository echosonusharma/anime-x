import React from 'react';
import Anime from '../../../components/anime';

const AnimePage = ({ animeInfo }) => (
  <Anime animeInfo={animeInfo} />
);

export default AnimePage;

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://animex-backend.herokuapp.com/api/anime/info/${context.params.id}`);
  const animeInfo = await res.json();

  return {
    props: {
      animeInfo,
    },
  };
};
