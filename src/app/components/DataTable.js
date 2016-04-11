import React from 'react'
import { Link } from 'react-router'

/**
 * Based on Chapter 3 of the "React Up and Running" book.
 */
class DataTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: props.initialData,
            sortby: null,
            descending: false,
            edit: null // {row: index, cell: index}
        };

        // Prebinds
        this._sort = this._sort.bind(this);
        this._showEditor = this._showEditor.bind(this);
        this._save = this._save.bind(this);
    }

    _sort(e) {
        var column = e.target.cellIndex;
        var descending = this.state.sortby === column && !this.state.descending;

        var data = Array.from(this.state.data);
        data.sort(function (a, b) {
            return descending
                ? a[column] < b[column]
                : a[column] > b[column];
        });
        this.setState({
            data: data,
            sortby: column, descending: descending,
        });
    }

    _showEditor(e) {
        this.setState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex
            }
        });
    }

    _save(e) {
        e.preventDefault();
        var input = e.target.firstChild;
        var data = this.state.data.slice();

        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null, // done editing data: data,
        });
    }

    render() {
        var edit = this.state.edit;

        return React.DOM.table({className: 'table'},
            React.DOM.thead({onClick: this._sort},
                React.DOM.tr(null,
                    this.props.headers.map(function (title, idx) {
                        if (this.state.sortby === idx) {
                            title += this.state.descending ? ' \u2191' : ' \u2193'
                        }
                        return React.DOM.th({key: idx}, title);
                    }, this))),
            React.DOM.tbody({onDoubleClick: this._showEditor},
                this.state.data.map(function (row, rowidx) {
                    return (
                        React.DOM.tr({key: rowidx},
                            row.map(function (cell, idx) {
                                var content = cell;

                                // If the `idx` and the `rowidx` match the one being edited
                                // otherwise just show the text content
                                if (edit && edit.row === rowidx && edit.cell === idx) {
                                    content = React.DOM.form({onSubmit: this._save}, React.DOM.input({
                                            type: 'text',
                                            defaultValue: content
                                        })
                                    );
                                }

                                return React.DOM.td({
                                    key: idx, 'data-row': rowidx
                                }, content);
                            }, this)
                        ) );
                }, this))
        )
    }
}

export default DataTable;
