import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import { saveItem } from '../actions/items';

class ItemList extends React.Component {

    render() {
        const records = this.props.items.idList.map(id => this.props.items.records[id]);

        const itemNodes = records.map((item, key) => {
            const id = item.id;

            return (
                <tr key={key} onClick={() => this.props.onClick(item)}>
                    <td><Link to={'/itemDetail/'+id} className='btn btn-default'>View</Link></td>
                    <td style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                        {item.text}
                    </td>
                    <td className="text-right">${item.value}</td>
                    <td>{item.description}</td>
                </tr>
            );
        });

        return (
            <div className="itemList">
                <table className="table">
                    <tbody>
                    {itemNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item) => {
            var newItem = { ...item, completed: !item.completed };
            saveItem(newItem)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);


