import PropTypes from 'prop-types';


function List(props){

    const itemList = props.items;
    const category = props.category;

    const listItem = itemList.map(items => <li key={items.id}>
                                            {items.name} : &nbsp;
                                            <b>{items.calories}</b></li>);

    return (<>
                <h1 className="list-category">{category}</h1>
                <ol className="list-item">{listItem}</ol>
            </>);
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calories: PropTypes.number})),
}
export default List