import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const focusInputField = () => {
    // Access the DOM element directly
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button onClick={focusInputField}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
