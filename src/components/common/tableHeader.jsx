import React, { Component } from 'react';

class TableHeader extends Component {

    onRaiseSort = path => {
        const sortedColumn = {...this.props.sortedColumn};
        console.log('sortedColumn', sortedColumn);
        if(sortedColumn.path === path)
            sortedColumn.order = (sortedColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortedColumn.path = path;
            sortedColumn.order = 'asc';
        }
        this.props.onSort(sortedColumn);
    }

    renderSortIcon = column => {
        const {sortedColumn} = this.props;
        if(sortedColumn.path !== column.path) return null;
        if(sortedColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }
    
    render() { 
        return (
            <thead className="thead-light">
                <tr>
                    {this.props.columns.map(column => (
                        <th className="clickablePointer" key={column.path || column.key} onClick={() => this.onRaiseSort(column.path)}>{column.label}{this.renderSortIcon(column)}</th>
                    ))}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;