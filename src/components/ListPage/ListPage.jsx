import React from 'react'

const ListPage = ({ defaultListItems, newItemsList }) => {

    return (
        <main>
            <h2>Examples</h2>
            <ul>
                {defaultListItems.map((item) => { // '(' no return needed.
                    return (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
                <h2>My Tasks</h2>
                {newItemsList.map((newItem) => {
                    return (
                        <li key={newItem.id}>
                            <h3>{newItem.title}</h3>
                            <p>{newItem.description}</p>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default ListPage
