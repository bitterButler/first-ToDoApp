import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';

const ListPage = ({listItems}) => {
    
    return (
        <main>
            <h2>Examples</h2>
            <ul>
                {listItems.map((item) => { // '(' no return needed.
                    return (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default ListPage
