import styles from './List.module.css';
import PropTypes from 'prop-types';

function List({items = [], category = "Category"}) {
    PropTypes.checkPropTypes(
        List.propTypes, 
        {items, category}, 
        'prop', 
        'List'
    );

    const listItems = items.map(item => 
        <li 
            key={item.id}>{item.name}:&nbsp;
            <b>{item.calories}</b> calories
        </li>);

    return (
        <>
            <h3 className={styles["list-category"]}>{category}</h3>
            <ol className={styles["list-items"]}>{listItems}</ol>
        </>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
};

export default List;