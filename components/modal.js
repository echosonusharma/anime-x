import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Modal = ({ content, trigger }) => (
  <Popup trigger={<button type="button" className="btn-sty-1 opacity-50">{trigger}</button>} position="top center">
    <div className="flex justify-center p-2">{content}</div>
  </Popup>
);

export default Modal;
