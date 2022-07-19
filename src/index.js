import ReactDom from 'react-dom';
import App from './App';
import paintings from './paintings.json';


function Painting(props) {
  const {url, title, profile, author, price} = props
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2></h2>
      <p>
        Автор: <a href={profile}>{ author }</a>
      </p>
      <p>Цена: { price } кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );

};

// const painting = paintings[1];

// <Painting
//   url={painting.url}
//   title={painting.title}
//   author={painting.author.tag}
//   profile={painting.author.url}
//   price={painting.price}
// />,

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);


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
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
