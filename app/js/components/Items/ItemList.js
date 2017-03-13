import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { toggleItem } from '../../actions/items';
import './Items.scss';

class ItemList extends React.Component {

    render() {
        const records = this.props.items.idList.map(id => this.props.items.records[id]);

        const itemNodes = records.map((item, key) => {
            const id = item.id;

            return (
                <tr key={key}>
                    <td><Link to={'/items/detail/'+id} className='btn btn-default'>View</Link></td>
                    <td style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                        onClick={() => this.props.toggleItem(item)}>
                        {item.text}
                    </td>
                    <td className="text-right">${item.value}</td>
                    <td>{item.description}</td>
                </tr>
            );
        });

        return (
            <div className="items__list">
                <table className="table">
                    <thead>
                    <tr>
                        <th>{''}</th>
                        <th>Text</th>
                        <th className="text-right">Value</th>
                        <th>Description</th>
                    </tr>
                    </thead>
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
export default connect(
    mapStateToProps,
    {toggleItem}
)(ItemList);


