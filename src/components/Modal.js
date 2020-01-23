import React from 'react';
import ReactDOM from 'react-dom';


function Modal (props){

    return ReactDOM.createPortal(<h1>hi I'm not real</h1>,document.getElementById('modal'));

}

export default Modal;