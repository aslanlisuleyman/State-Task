import React, { useState } from 'react';

function Item() {
    const [adlar, setAdlar] = useState([
        {
            id: 1,
            name: 'Name1',
        },
        {
            id: 2,
            name: 'Name2',
        },
        {
            id: 3,
            name: 'Name3',
        },
        {
            id: 4,
            name: 'Name4',
        },
        {
            id: 5,
            name: 'Name5',
        },
        {
            id: 6,
            name: 'Name6',
        },
        {
            id: 7,
            name: 'Name7',
        },
        {
            id: 8,
            name: 'Name8',
        },
        {
            id: 9,
            name: 'Name9',
        },
        {
            id: 10,
            name: 'Name10',
        },
    ]);

    const handleDelete = (id) => {
        const updateAdlar = adlar.filter((ad) => ad.id !== id);
        setAdlar(updateAdlar);
    };

    return (
        <>
            {adlar.map((ad) => (
                <tr key={ad.id}>
                    <td>{ad.id}</td>
                    <td>{ad.name}</td>
                    <td>
                        <button onClick={() => handleDelete(ad.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default Item;
