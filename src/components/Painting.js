import PropTypes from 'prop-types'; // ES6
import defaultImage from './default.jpg';

export default function Painting({ imageUrl = defaultImage, title, profile, author = 'невідомо', price, quantity }) {
  return (
    <div>
        <img src={imageUrl ?? defaultImage} alt={title} width="480" />
        <h2>{ title}</h2>
        <p>
            Автор: <a href={profile}>{ author }</a>
        </p>
        <p>Цена: { price } кредитов</p>
        <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
        <button type="button">Добавить в корзину</button>
    </div>
  );

};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}