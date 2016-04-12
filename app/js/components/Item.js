import React from 'react';

class Item extends React.Component {

    render() {
        return <tr>
            <td>{this.props.item.title}</td>
            <td className="text-right">${this.props.item.price}</td>
            <td>{this.props.item.description}</td>
        </tr>;
    }
}

export default Item;
