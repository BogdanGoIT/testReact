import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App/App';
import './index.css';
import { theme } from './constants';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
















// 1. Компоненты и коолекция теория

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// // const elem1 = React.createElement('span', { children: 'Это' });
// const elem1 = <span>Це</span>;

// // const elem2 = React.createElement('span', { children: 'дети' });
// const elem2 = <span>діти</span>;

// // const element = React.createElement('div', {
// //   data: 5,
// //   b: 10,
// //   children:'Это дети',
// // });

// const jsxEl = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxEl);

// ==============================



