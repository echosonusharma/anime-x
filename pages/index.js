import React, { useEffect } from 'react';
import AnimeHomepage from '../components/anime-homepage';
import useStore from '../store/store';

const Index = () => {
  const data = useStore((state) => state.setAuth);

  const getAuth = async () => {
    const x = await fetch('https://animex-backend.herokuapp.com/getuser', {
      credentials: 'include',
    });
    if (x) {
      const res = await x.json();
      if (res) {
        await data(res);
      }
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <>
      <AnimeHomepage />
    </>
  );
};

export default Index;
