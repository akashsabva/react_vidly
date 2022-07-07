import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.Fragment>
);

//var-let-const
// let i = 5;
// function abc() {
//     for(var i=0; i<5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }
// abc();

//Object
// const obj = {
//     name : 'Steve',
//     walk() {return 'walk'},
//     talk : function() {console.log('talk')},
//     thisFunc() {console.log(this)}
// };
// console.log(obj.name);
// console.log(obj.walk());
// console.log(obj.talk);
// console.log(obj.thisFunc());

// const abc = obj.thisFunc;
// console.log(abc());


// const abc = <h1>Hello World !</h1>;
// ReactDOM.render(abc, document.getElementById('root'));

// const abc = <h1>Hello World !</h1>;
// ReactDOM.createRoot(document.getElementById('root')).render(abc);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
