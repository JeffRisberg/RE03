import React from 'react';
import { connect } from 'react-redux';

import { fetchItem } from '../actions/items';

class ItemDetail extends React.Component {

    componentDidMount() {
        this.props.onMount(this.props.params.id);
    }

    render() {
        const item = this.props.items.records[this.props.params.id];

        if (item != null) {
            return (
                <table className="itemDetail">
                    <tbody>
                    <tr>
                        <td></td>
                        <td>Item Detail</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>{item.text}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{item.description}</td>
                    </tr>
                    <tr>
                        <td>Value:</td>
                        <td>{item.value}</td>
                    </tr>
                    <tr>
                        <td>Completed:</td>
                        <td>{item.completed}</td>
                    </tr>
                    </tbody>
                </table>
            );
        }
        else
            return null;
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMount: (id) => {
            fetchItem(id)(dispatch);
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetail);
