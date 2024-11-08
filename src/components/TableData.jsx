import React from 'react'

const TableData = ({ data }) => {
    console.log(data)
    return (
        <tr>
            <td>{data[6]}</td>
            <td>{data[0]}</td>
            <td>{data[1]}</td>
            <td>{data[2]}</td>
            <td>{data[3]}</td>
            <td>{data[4]}</td>
            <td>{data[5]}</td>
        </tr>
    )
}

export default TableData