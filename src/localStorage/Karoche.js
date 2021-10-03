import React, { useState } from 'react';

const Karoche = () => {

    const [item, setItem] = useState("");

    const addItem = () => { //ma'lumotni joylashtirish
        localStorage.setItem("Tekst", item)
    }

    const removeItem = () => { //ma'lum bir ma'lumotni o'chirish
        localStorage.removeItem("Tekst");
    }

    const clearLocalData = () => { //butun localStorageni tozalash
        localStorage.clear();
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Write text.."
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />

            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <button onClick={clearLocalData}>Clear</button>

            {localStorage.getItem("Tekst") && ( //ma'lumotni olish uchun
                <div>
                    Item: <p>{localStorage.getItem("Tekst")}</p>
                </div>
            )}
        </div>
    );
};

export default Karoche;