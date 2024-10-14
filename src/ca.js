import React, { useState } from 'react';

const Ca = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    setIsSubmitted(true);
    // alert("Item added to cart");
  };

  return (
    <div>
      <label htmlFor='Name'>Name: </label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor='Price'>Price: </label>
      <input
        type='text'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <label htmlFor='Desc'>Description: </label>
      <input
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />

      <button type='submit' onClick={handleClick}>
        Add to Cart
      </button>
      <br />
      <br />

      {isSubmitted && (
        <div>
          <strong>Item added to cart:</strong>
          <br />
          Name: {name}
          <br />
          Price: {price}
          <br />
          Description: {desc}
        </div>
      )}


    </div>
  );
};

export default Ca;
