import Painting from "./Painting";
import PropTypes from 'prop-types'; // ES6
function paintingList({ items }) {
    return <ul>
        {items.map(item => (
            <li key={item.id}>
                <Painting
                    
                    imageUrl={item.url}
                    title={item.title}
                    author={item.author.tag}
                    profile={item.author.url}
                    price={item.price}
                    quantity={item.quantity}
                />
            </li>))}
    </ul>;
}

export default paintingList;

paintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}