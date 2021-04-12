import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const NextPrev = ({ setPage, prev }) => (
  <div>
    <div className="flex gap-4 justify-center pt-8 pb-4">
      <button
        type="button"
        onClick={() => { prev(); scroll.scrollToTop(); }}
        className="btn-sty-1"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={() => { setPage((c) => c + 1); scroll.scrollToTop(); }}
        className="btn-sty-1"
      >
        Next
      </button>
    </div>
  </div>
);

export default NextPrev;
