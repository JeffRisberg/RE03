import React from 'react';

class Item extends React.Component {

    render() {
        let store = this.props.store;
        let id = this.props.item.id;

        return (
            <tr onClick={() => {store.dispatch({
            type: 'TOGGLE_ITEM',
            id: id
            })}}>
                <td style={{textDecoration: this.props.item.completed? 'line-through' : 'none'}}>
                    {this.props.item.text}
                </td>
                <td className="text-right">${this.props.item.value}</td>
                <td>{this.props.item.description}</td>
            </tr>
        );
    }
}

export default Item;
