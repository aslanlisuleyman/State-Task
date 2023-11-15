import React from 'react'
import Item from './Item'



function List() {
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <Item/>
        </tbody>
    </table>
  )
}

export default List