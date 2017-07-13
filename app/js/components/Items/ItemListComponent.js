import React from 'react';
import { Link } from 'react-router-dom';
import './Items.scss';

class ItemListComponent extends React.Component {

    formatEpochTime(epochTime) {
        const date = new Date(Number(epochTime) * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    render() {
        const itemNodes = this.props.records.map((item, key) => {
            const id = item.id;
            const valueStr = item.value.toLocaleString(undefined, { minimumFractionDigits: 2 });

            return (
                <tr key={key}>
                    <td><Link to={'/items/detail/' + id} className='btn btn-default'>View</Link></td>
                    <td style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                        onClick={() => this.props.toggleItem(item)}>
                        {item.name}
                    </td>
                    <td className="text-right">${valueStr}</td>
                    <td>{item.description}</td>
                    <td>{this.formatEpochTime(item.lastUpdated)}</td>
                </tr>
            );
        });

        return (
            <div className="items__list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{''}</th>
                            <th>Name</th>
                            <th className="text-right">Value</th>
                            <th>Description</th>
                            <th>Last Updated</th>
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

export default ItemListComponent;


