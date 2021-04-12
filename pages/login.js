/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Image from 'next/image';

const googleLogin = () => {
  window.open('https://animex-backend.herokuapp.com/auth/google', '_self');
};

const githubLogin = () => {
  window.open('https://animex-backend.herokuapp.com/auth/github', '_self');
};

const Login = () => (
  <div className="flex justify-center items-center mt-40">
    <div className="flex flex-col gap-10">
      <div
        role="button"
        tabIndex={0}
        onClick={googleLogin}
        className="flex items-center gap-5 bg-gray-200 px-5 py-4 rounded-lg focus:outline-none hover:bg-gray-300"
      >
        <Image src="/static/google.svg" width={70} height={70} />
        <div className="text-2xl font-semibold text-gray-600">Login With Google</div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={githubLogin}
        className="flex items-center gap-5 bg-gray-200 px-5 py-4 rounded-lg focus:outline-none hover:bg-gray-300"
      >
        <Image src="/static/github.svg" width={70} height={70} />
        <div className="text-2xl font-semibold text-gray-600">Login With Github</div>
      </div>
    </div>
  </div>
);

export default Login;
