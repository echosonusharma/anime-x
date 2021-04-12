import React, { useState } from 'react';
import useStore from '../store/store';
import Modal from './modal';

const Bookmark = ({
  mal_id, score, title, image_url,
}) => {
  const data = useStore((state) => state.auth);

  const [watchedBg, setWatchedBg] = useState(false);
  const [planedBg, setPlanedBg] = useState(false);

  const handelWatched = async () => {
    const x = await fetch('https://animex-backend.herokuapp.com/api/anime/watched', {
      method: 'POST',
      body: JSON.stringify({
        creator_id: data.auth_id,
        mal_id,
        score,
        title,
        image_url,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await x.json();
    if (res.msg === 'added') {
      setWatchedBg(true);
    }
    if (res.msg === 'removed') {
      setPlanedBg(false);
    }
  };

  const handelPlaned = async () => {
    const x = await fetch('https://animex-backend.herokuapp.com/api/anime/planed', {
      method: 'POST',
      body: JSON.stringify({
        creator_id: data.auth_id,
        mal_id,
        score,
        title,
        image_url,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const res = await x.json();
    if (res.msg === 'added') {
      setPlanedBg(true);
    }
    if (res.msg === 'removed') {
      setPlanedBg(false);
    }
  };

  return (
    <div>
      {
        data.auth_id ? (
          <div className="flex gap-10 pt-10">
            {
              planedBg
                ? <button type="button" className="btn-sty-2 " onClick={handelPlaned}>Plan to watch</button>
                : <button type="button" className="btn-sty-1 " onClick={handelPlaned}>Plan to watch</button>
            }
            {
              watchedBg
                ? <button type="button" className="btn-sty-2 " onClick={handelWatched}>Watched</button>
                : <button type="button" className="btn-sty-1 " onClick={handelWatched}>Watched</button>
            }
          </div>
        )
          : (
            <div className="flex gap-10 pt-10">
              <Modal trigger="Plan to Watch" content="login to save in Plan to watch" />
              <Modal trigger="Watched" content="login to save in watched" />
            </div>
          )
      }

    </div>
  );
};

export default Bookmark;
