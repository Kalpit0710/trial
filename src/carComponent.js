import React, { useState } from 'react';

const Car = ({ name, color, defName }) => {
    const [carName, setCarName] = useState(defName || '');

    return (
        <div>
            <h2>Car Details:</h2>
            <p>Car Name (from props): {name}</p>
            <p>Car color: {color}</p>

            <input 
                type='text' 
                placeholder='Enter car name' 
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
            />
            <p>Entered Car Name: {carName}</p>
        </div>
    );
};

export default Car;
