import React from 'react/addons';

/*
 * @class Item
 * @extends React.Component
 */
class Item extends React.Component {

    /*
     * @method shouldComponentUpdate
     * @returns {Boolean}
     */
    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
    }

    /*
     * @method render
     * @returns {JSX}
     */
    render() {
        return <tr>
            <td>{this.props.item.title}</td>
            <td className="text-right">${this.props.item.price}</td>
            <td>{this.props.item.description}</td>
        </tr>;
    }
}

// Prop types validation
Item.propTypes = {
    item: React.PropTypes.object.isRequired,
};

export default Item;
