import React from 'react';
import TableBody from './tableBody.jsx';
import TableHeader from './tableHeader.jsx';

const Table = ({ columns, onSort, sortedColumn, data }) => {
    return ( 
        <table className="table">
            <TableHeader columns={columns} onSort={onSort} sortedColumn={sortedColumn} />
            <TableBody data={data} columns={columns} />
        </table> 
    );
}
 
export default Table;