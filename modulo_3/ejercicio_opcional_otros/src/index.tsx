import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import logo1 from "./assets/logo_1.png";

ReactDOM.render(<App />, document.getElementById('root'));

const imagen = document.createElement("img");

imagen.src = logo1;

document.getElementById('logoContainer').appendChild(imagen);
