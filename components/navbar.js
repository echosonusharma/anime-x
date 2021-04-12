/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import SearchInput from './anime-list/search-input';
import useStore from '../store/store';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {
  const authObj = useStore((state) => state.auth);

  const logout = async () => {
    const x = await fetch('https://animex-backend.herokuapp.com/auth/logout', {
      credentials: 'include',
    });
    const res = await x.json();
    if (res.msg === 'logout') {
      window.location.href = '/';
    }
  };

  return (
    <div className="flex gap-2 mx-5 pt-6 w-full sm:w-full lg:w-156 lg:gap-5 lg:mx-48">
      <div className="flex gap-3 sm:min-w-full lg:gap-5 lg:mr-56">
        <h1
          className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-indigo-500
          text-lg font-black sm:text-lg lg:text-5xl"
        >
          <Link href="/">AnimeX</Link>
        </h1>
        <ul className="flex gap-4 items-center text-sm sm:text-base lg:text-lg">
          <li className="cursor-pointer"><Link href="/plan_to_watch">Plan To Watch</Link></li>
          <li className="cursor-pointer"><Link href="/watched">Watched</Link></li>
          {
            authObj.auth_id
              ? <li onClick={logout} className="cursor-pointer text-indigo-600">Logout</li>
              : <li className="cursor-pointer text-indigo-600"><Link href="/login">Login</Link></li>
          }
        </ul>
      </div>

      <SearchInput />
      {
        authObj.auth_id
        && (
          <Popup trigger={<img src={authObj.profile_pic} alt="profile" className="rounded-full w-12 h-12" />} position="bottom center">
            <div className="flex justify-center p-2">
              <div className="text-center">
                <h1 className="text-indigo-600">{authObj.name}</h1>
                {
                  authObj.email
                  && <h1 className="font-thin text-base">{authObj.email}</h1>
                }
              </div>
            </div>
          </Popup>
        )
      }
    </div>
  );
};

export default Navbar;
