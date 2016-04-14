import React from 'react';
import { connect } from 'react-redux';

import { toggleItem } from '../actions';

class Item extends React.Component {

    render() {
        let id = this.props.item.id;

        return (
            <tr onClick={() => this.props.onItemClick(id)} >
                <td style={{textDecoration: this.props.item.completed? 'line-through' : 'none'}}>
                    {this.props.item.text}
                </td>
                <td className="text-right">${this.props.item.value}</td>
                <td>{this.props.item.description}</td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (id) => {
            dispatch(toggleItem(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
