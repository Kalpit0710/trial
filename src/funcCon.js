import React, { useState } from 'react'

const ItemList = () => {
    const [isVisible, setVisibility] = useState(true);

    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const toggleList = () => {
        setVisibility(prevState => !prevState);
    }

    return (
        <div>
            <button onClick={toggleList}>
                {isVisible ? 'Hide List' : 'Show List'}
            </button>

            {
                isVisible && (
                    <ul>
                        {
                            items.map((data, index) => {
                                return (
                                    <li key={index}>{data}</li>
                                )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}
export default ItemList;