//const element = document.createElement('h1');
//element.innerText = 'Hello, Malignant !';


//const container = document.getElementById('app');

//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import './global.css';

//const element = <h1>Hello, Malignant Developers from Platzi!</h1>; //JSX y por eso es importa React

//const element = React.createElement('a', {href: 'https://platzi.com'},'Hi Im a children');

// const element = React.createElement(
//     'h1',
//     {},
//     `Hi my name is ${name}`
// );

// const name = 'Malignant';
// const sum = () => 3+3;

// const jsx = <h1>Hola soy,{_Expresiones_ que se puede evaluar}</h1>

// const jsx = <h1>Hola soy,{sum()}</h1> 


// const element = <div>
//     <h1>Hi I'm Igor</h1>
//     <p>I'm Front end Developer</p>
// </div>



const container = document.getElementById('app');

// ReactDOM.render(__qué__quieres renderizar, ___dónde___lo quieres renderizar);
// ReactDOM.render(    
//     <Badge 
//     firstName="Igor" 
//     lastName="'Bae" 
//     avatarUrl="https://s.gravatar.com/avatar/5ae221e81969b0849c84c5cdb0c62623?s=80"
//     jobTitle="Full Stack Developer" 
//     twitter="baedrummer"/>,
//     container)
//     ;
ReactDOM.render(<Badges />,container)
    ;

